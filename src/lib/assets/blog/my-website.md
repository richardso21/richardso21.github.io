---
title: chapter zero
description: I spent way too much time on ts 🥀🥀
date: 2025-10-24
---

Pretty much since the start of 2025, I wasted a quarter of my free time
making this website you see here today (if you were curious, the rest was
wasted on [1] tetr.io, [2] league of legends, and [3] instagram reels). If you
like this site, thanks! But if you're the other 90% thinking that I
am crazy and/or have horrible hobbies...

... **yep, you're right** _(and I appreciate the honesty)_.

## why?

I _could_ use up this time on some neat side project or hustle, sure. But some
people swear by making a personal site to showcase their talent/expertise and
stand out from a pool of generic, copy-paste resume templates. For me, though?

**_It's just to stroke my own ego._**

Alright, maybe a bit of an exaggeration. The other part (standing out)
is definitely true to some extent. I mean, there's already a surplus of
four-eyed east asians in the tech industry... including me.

### some lore

If you are an OG, you know this site isn't my first one...
[this is](https://portfolio-web-yajg-richard-sos-projects.vercel.app/).

I made that during my very first internship, Summer 2022, using React and
Next.js. To this day, I can't believe that I had such an intense urge to make a
website glazing myself before finishing any meaningful work experience. Ah, how
naive and pretentious freshman Richard was!

Well, fast forward a 3 years later, and that site had stayed untouched.

### rewrite?

There's a lot of reasons why I decided to ditch my previous site. A big one was
because I made it 3 years ago. That means I...
* ...can't remember why I wrote any of my tailwind classes or components.
* ...have to constantly stare at the crappy code I wrote when I was a freshman.

Because I forgot how I implemented many parts of it, I also can't fix some of
the most annoying bugs I found with the site. One day during grad algos, a good
friend of mine showed me how **my site was firing a request EVERY TIME
you hovered a page link**.

<center>
(╯°□°)╯︵ ┻━┻
</center>

Another thing that irked me to death: the title animations worked as expected
when going into sub pages, but not when navigating back to the home page. Never
got it working with Framer Motion, but it's probably just me being stupid.
Regardless, the animations were looking low-key stale. Freshman me might've
felt so proud when he was coding it the first time. Me Today? Nah, not really
feeling it, tbh.

Finally, all my content was managed via a CMS, prismic.io. I personally didn't
find anything wrong with it, but it felt awkward to depend on it for my use
case (my old site didn't even have a blog). Not to mention, my implementation
integrating prismic into my site was, unsurprisingly, not my proudest work.

> Might as well toss everything into the campfire and rebuild it from scratch, 
> lol.

_(BTW, this is ~ usually ~ horrible advice for anyone building anything, let alone
software, let alone a website. Do as I say, not as I do)_

## how?

_psst, feel free to skip if you don't feel like reading code or anything technical._

### it looks the same?

You should've noticed already. Visually, this new site borrows a **lot** of
inspiration from what I had before. Not even inspiration, some of the components
themselves too (given that I had to refactor them). Sounds pretty
counterintuitive, right? Honestly, my old site didn't look that bad, just
needed a bit of polish, that's all. Or you can call me lazy and uncreative, 
whatever floats your boat.

### svelte!!

My old site used React and Next.js. People like to shit on these two on
Twitter, YouTube, Medium, wherever. My opinion? It's not that big of a deal.
A wise person (perhaps someone by the name of Richard So) once said:

> At the end of the day, libraries and frameworks are a means to an end, and my
> end is to fix up my damn website.

If anything, I switched to Svelte (and SvelteKit) because everybody else was
talking about it. Compiling directly into HTML and JS is better than using a
virtual DOM? Cool, great, I agree, yeahhh! _(no actually, this IS cool)_

### i said "it's GSAPing time" and GSAPed all over the place

Because I used React, I also used Framer Motion. I wasn't _not_ aware of GSAP, 
just that:
1. I was dumber, so Motion was optimal for my smooth brain back then
2. GSAP was not 100% free at the time (this was before [Webflow started
   supporting it](https://gsap.com/pricing))

Now with React out the window, I gave GSAP another shot...

**Holy s#!t this library is amazing.** Especially once I spent some time with
it, skimmed through the documentation, read some of the community fourm topics, 
and giving myself the occasional pep talk, GSAP finally gave me the ability
to put transitions I've always dreamt of into my site. Remember that nit I was
talking about with the titles not animating properly? Hold your horses because
I'll have another write up on how I finally got that working with GSAP!

## closing thoughts

Low-key, I was afraid I was going to end up tossing this rewrite into my huge
void of archived, half-done projects. Some days I was really feeling it, 
especially when I was tweaking my GSAP animations nonstop. Other times, all of
my tailwind classes would fuck up and I start to weigh the advantages of
unaliving myself.

Nonetheless, it's done! Complete! For like 10 people to see per month, but hey, 
that's still an audience! Or maybe all 10 of you guys are AI scraping bots, huh?
_oh well..._

Random stranger (or clanker) on the internet, thanks for reading up till this
point :^)
