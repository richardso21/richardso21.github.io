---
title: flipping my website off
description: no, that is NOT what I meant
date: 2025-12-22
---

[In my previous post](/blog/my-website), I talked about these new amazing title
transitions with the use of GSAP. Well if you've been longing to learn how to
do this yourself, don't worry: I'll be revealing the secret formula!

_(actually not so secret, if you just go to my website's code repo)_

## my girlfriend, GSAP

Remember my gripes with my old site's page
animations? I figured out what they're actually called when you're animating an
element between pages: a [FLIP](https://gsap.com/docs/v3/Plugins/Flip/)
(**F**irst, **L**ast, **I**nvert, **P**lay) animation.

An element can't belong in two webpages at the same time, but we can create an
illusion of it being so. Suppose you have two elements that you want to look
seamless between the original (element `A` ) and new ( `B` ) page. Immediately
when the new page loads, you anchor the position of `B` where `A` previously
was, then undo these positions with some easing function to make it look buttery
smooth. GSAP makes this super convenient to do.

### how does one flip?

> Sure, animating one element between two pages sounds straightforward, but how
> did you have FLIP animations for 3 of those homepage links, and for each of
> the projects?

I'm glad you asked, and no, I didn't hard code a billion FLIP animations to
make this happen. Instead, I have a global state to keep track of things that
need to be flipped:

```typescript
export const state = $state<InternalState>({
	// ... insert other global state properties ...
	flipState: {
		currentState: undefined,
		target: '',
		duration: 0.4
	}
});

class FlipState {
	private state = state.flipState;

	get active() {
		return this.state.currentState !== undefined;
	}

	set = (state: Flip.FlipState, target: string, duration: number = 0.4) => {
		this.state.currentState = state;
		this.state.target = target;
		this.state.duration = duration;
	};

	// once consumed, we must reset the state
	get = () => ({
		currentState: this.state.currentState,
		target: this.state.target,
		duration: this.state.duration
	});

	reset = () => {
		this.state.currentState = undefined;
		this.state.target = '';
		this.state.duration = 0.4; // default duration
	};
}

export const flipState = new FlipState();
```

It gets set before navigating to a new page, and is consumed (and later reset)
right after navigation. This is all done in the SvelteKit layout of the whole
site. However, the real magic comes from standardizing the target selector to
give to `GSAP.Flip()` in each call, basically how to identify the element of
the new page you're entering, in a way such that I reduce as much complexity
and code duplication as possible.

My strategy is to mark each pair of FLIP-able elements with a
`data-flip-id=<path_name>` data attribute. For instance, 
`data-flip-id="/experience"` would be the attribute for my "experience" link in
my home page and the corresponding title in the sub page. Realize that the
destination url path when navigating into a subpage (/ -> **/experience**) is
the same as the source path when navigating out of that page (**/experience**
-> /).

The `beforeNavigate` svelte hook lets us peak at the source and destination
paths, which is perfect for us. If we are navigating deeper, we use the
destination path as the value of the attribute, otherwise the source. This way, 
we always achieve parity for the elements we had set to FLIP together:

```typescript
beforeNavigate((nav) => {
  // store a flip state from a previously navigated page
  if (!nav.to || !nav.from) return;
  const [to_url, from_url] = [nav.to.url.pathname, nav.from.url.pathname];

  // determine flipId based on direction of navigation
  // (if navigating deeper into the site, use `to_url` , otherwise use `from_url` )
  const nav_deeper = to_url.includes(from_url);
  const flip_id = nav_deeper ? to_url : from_url;

  const target = `[data-flip-id='${flip_id}']` ;

  // set a different duration for the flip depending on the direction of the page transition
  flipState.set(Flip.getState(target), target);
});

afterNavigate(() => {
  // check if we need to flip anything
  if (flipState.active) {

    const currFlipState = flipState.get();
    Flip.from(currFlipState.currentState as Flip.FlipState, {
      targets: currFlipState.target,
      duration: currFlipState.duration,
      ease: 'circ.inOut',
      scale: true,
      toggleClass: 'pointer-events-none'
    });
    // afterNavigate should be invoked last (after onMounts), so we can assume
    // flip has been completed and we can reset its state
    flipState.reset();

  }
});
```

## post-flip clarity

In retrospect, this isn't so hard at all. I'm pretty sure there's a youtube
tutorial that explains GSAP FLIPing at a high level. On the other hand, I think
figuring out a robust way to flip the same two elements, regardless of which
direction you're navigating, was the crux to getting exactly what I'm looking
for for my site. Also not something that's extremely difficult, but still took
a bit of thinking to figure out (at least for me and my smooth brain).

Even so, there might already be a JS library out there that does exactly what
I'm talking about. Was it still worth it figuring it out myself? Oh, hell yeah.
At least it proves I'm not some deadweight that needs to import stuff like [
`is-odd` ](https://www.npmjs.com/package/is-odd) from npm... 

...or even better, [ `is-odd-ai` ](https://www.npmjs.com/package/is-odd-ai)!
