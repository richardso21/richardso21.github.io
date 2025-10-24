---
title: why (and how) I made this website
description: I spent way too much time on ts 🥀🥀
date: 2025-10-24
---

Pretty much since the beginning of 2025, I wasted half of my free time
making this site you see here today (if you were curious, the other half was
wasted on tetr.io, league, and instagram reels). If you like my website and
blog, thanks! But if you're the other 90% thinking that I am crazy...

... **yep, you're right** _(and I appreciate the honesty)_.

## so, why?

I _could_ use up this time on some neat side project or hustle, sure. People
claim how a personal website helps showcase talent/expertise and exert a bit
more personality beyond a generic resume template. But if I'm reeeeally honest?
**_It's just to stroke my own ego._**

Alright, that's a bit of an exaggeration. The other part (about personality) is
definitely true. I mean, there's already a surplus of four-eyed east asians in
the tech industry. My very existence wasn't making this situation any better.

### some lore

If you are an OG, you know this site isn't my first one...
[this is](https://portfolio-web-yajg-richard-sos-projects.vercel.app/).

I made that during my very first internship, Summer 2022, using React and
Next.js. To this day, I can't believe that I had such an intense urge to make a
website glazing myself before finishing any meaningful work experience. Ah, how
naive and pretentious freshman Richard was!

Now, I encourage you to take a good look into that site and make some
comparisons with the one you see here to prep you for the next article section.

### rewrite?

There's a lot of reasons why I decided to ditch my previous site. A big one was
because it was made 3 years ago. That means I...
* ...can't remember why I wrote any of my tailwind classes or components.
* ...have to constantly stare at the crappy code I wrote when I was a freshman.

Because I forgot how I implemented it, I also can't fix some of the most
annoying bugs with the site. For example, a good friend of mine was showing me
how **my old site was firing a request EVERY TIME you hovered a page link**.
Yikes, pretty embarrassing.

Another thing: realize how the title animations worked when going into sub
pages, but not back to the home page. Never got it working with Framer Motion, 
though it could just be me being stupid. Regardless, the animations were
looking low-key stale. Freshman me might've felt so proud when he was coding it
the first time. Me Today? Nah, not really feeling it tbh.

Finally, all my content was managed via a CMS, prismic.io. I personally didn't
find anything wrong with it, but it felt awkward to depend on it for my use
case (my old site didn't even have a blog). Not to mention, my implementation
integrating prismic into my site was, unsurprisingly, not my proudest work.

> Might as well toss everything into the campfire and rebuild it from scratch, 
> lol.

_(BTW, this is horrible advice for anyone building anything, let alone
software, let alone a website. I just cant't help myself TT)_

## so, how?

_Feel free to skip if you don't feel like reading code or anything technical._

### it looks the same!?

You should've noticed already. Visually, this new site borrows a lot of
inspiration from what I had before. Not even inspiration, the components
themselves too (given that I had to rewrite them). Sounds pretty
counterintuitive, right? Honestly, my old site didn't look that bad, just
needed a bit of polish, that's all. Or you can call me lazy.

### svelte!?!?

My old site used React and Next.js. People like to shit on these two on
Twitter, YouTube, Medium, wherever. My opinion? It's not that big of a deal.
A wise person, someone by the name of Richard So, once said:

> At the end of the day, libraries and frameworks are a means to an end, and my
> end is to fix up my damn website.

If anything, I switched to Svelte (and SvelteKit) because everybody else and
their grandma was talking about it. Compiling directly into HTML and JS is
better than using a virtual DOM? Cool, great, I agree, yeahhh! _(no actually, 
this IS cool)_

### say hello to my girlfriend, GSAP

Because I used React, I also used Framer Motion (now called "Motion for
React"). Although GSAP was under my radar at the time, there were two big things
stopping me from using it:
1. I was dumber at the time, so Motion looked like an easier, better choice
2. GSAP was not entirely free at the time, this was before [Webflow started
   supporting it](https://gsap.com/pricing)

Now with React out the window, I gave GSAP another shot...

**Holy s#!t this library is amazing.** Especially once I spent some time with
it, skimmed through the documentation, read some of the community fourm topics, 
and giving myself the occasional pep talk, GSAP finally gave me the ability
to put transitions I've always dreamt of into my site.

## learnings

### flipping my website off

BTW, that's not what I meant. Remember my gripes with my old site's page
animations? I figured out what they're called when you're animating an element
between pages: a [FLIP](https://gsap.com/docs/v3/Plugins/Flip/) (**F**irst, 
**L**ast, **I**nvert, **P**lay) animation.

An element can't belong in two webpages at the same time, but we can create an
illusion of it being so. Suppose you have two elements that you want to look
seamless between the original (element `A` ) and new ( `B` ) page. Immediately
when the new page loads, you anchor the position of `B` where `A` previously
was, then undo these positions with some easing function to make it look buttery
smooth. GSAP makes this super convenient to do.

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
  // (if navigating deeper into the site, use `to_url`, otherwise use `from_url`)
  const nav_to_deeper = to_url.includes(from_url);
  const flip_id = nav_to_deeper ? to_url : from_url;

  const target = `[data-flip-id='${flip_id}']`;

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

### markdown and blogging

I used to blog on Medium, but I decided that I'm not gonna put my ideas behind
a paywall anymore. I'm not really proud of what I've written in the past, 
anyway. On another note, I'm hearing that "cool" kids these days use notion or
obsidian to publish their blog articles to the internet? Here's my chance to
one up them: I'll code it from scratch.

A CMS could've been useful for a blog, however, I was persistent with my
decision to move away from it. Also, that would've been cheating in the realm
of "building from scratch". So what's the alternative? Classic markdown files.

I decided on using [Marked](https://marked.js.org/), which in retrospect was an
ok choice, but there weren't many others out there that were as active in the
open-source scene. One of the first things I did was to support markdown front
matter, so that I can store stuff like the title, description, and other
metadata in an organized fashion. `front-matter` was a helpful package for
doing so, and it was easy to use with Marked's preprocess hook to omit them
from the actual markdown rendering.

#### automation heaven (and hell)

Without a CMS, I needed to manually keep an index of articles I have for
`/blogs` to list out. Editing a javascript array every single time was super
lame, so I made a node script to parse the front matter of each of the markdown
files I had into a generated typescript array of objects for the page to
consume. See? I told you having front matter in the markdown would be clutch.

Am I going to run this node.js file manually? **Hell no!** Create a script
entry in `package.json` so I can run `pnpm register-blogs` to run it for me. In
fact, **hell no** with even running this manually! I want to just commit my new
markdown file, and have it automatically inserted as a new entry in my blog list.
Enter [Husky](https://typicode.github.io/husky/): I create a `pre_commit` file, 
insert a shell snippet, and it'll auto configure git to run this every time I'm
about to create a new commit. Fancy!

## closing thoughts

Even though it took me waaaaay too long to make this site, it was a blast. Oh
man, these new animations. And the fact that I finally have a blog in my own
website, not some 3rd party platform that runs on a subscription model. I'm
quite satisfied with how everything came out to be.

It doesn't really matter how many visitors I get. Don't get me wrong; it'd be
great to have a following, but I now have a cozy place in the internet I can
call mine (at least while I'm still paying SquareSpace 15 dollars/year to keep
my domain).

I'll make changes to the site here and there over time.

I'll (try my best to) write new blog articles.

Thanks for showing up to my website warming party!
