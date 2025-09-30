import { md_link as link } from '$lib/linkStyles';
import { importsToMap } from '$lib/links';
import type { ProjectMetaData } from './projects.types';

// Build a map from bare filename (e.g., 'site.png') to the enhanced image URL/module
const optImgImports = import.meta.glob('$lib/assets/projects/*.{png,gif}', {
	eager: true,
	import: 'default',
	query: { enhanced: true }
});
export const optImgs: Record<string, string> = importsToMap(optImgImports);

const rawImgImports = import.meta.glob('$lib/assets/projects/*.{png,gif}', {
	eager: true,
	import: 'default'
});
export const rawImgs = importsToMap(rawImgImports);

// Simple preloader for raw images used on project detail pages.
// Keeps a set of keys we've already started loading to avoid duplicate work.
const _preloaded = new Set<string>();

export function preloadRawImage(image_key: string) {
	if (typeof window === 'undefined') return; // SSR safe
	if (!image_key || _preloaded.has(image_key)) return;
	const url = rawImgs[image_key];
	if (!url) return;
	const img = new Image();
	// prefer async decoding
	// @ts-ignore (Image.decoding is widely supported but TS lib may not include it)
	img.decoding = 'async';
	img.onload = () => _preloaded.add(image_key);
	img.src = url;
}

// object keys are their respective UIDs
export const projects: Record<string, Omit<ProjectMetaData, 'uid'>> = {
	lc3tools: {
		title: 'LC3Tools',
		tech_stack: ['C++', 'Vue', 'Electron'],
		date: new Date(2024, 3),
		image_url: 'lc3tools_demo.gif',
		details: `
Revived and maintained the LC3Tools project, an educational
software suite to write, simulate, and debug assembly for the
${link('Little Computer 3', 'https://en.wikipedia.org/wiki/Little_Computer_3')}

Worked on this as a **CS 2110 TA**, used by over **1000 students per
semester**. Completely revamped its testing suite, resolved
tokenizer nuances, and made countless QoL UI improvements.

_View the gt-cs2110 fork of LC3Tools_
${link('here', 'https://github.com/gt-cs2110/lc3tools')}
`
	},
	caribou_detection: {
		title: 'Alaskan Caribou Image Detection',
		tech_stack: ['PyTorch', 'Keras', 'Pillow'],
		date: new Date(2021, 1),
		image_url: 'caribou.png',
		details: `
A **DL** project to automate the labeling of caribou instances in
Alaskan camera trap data using **Foreground Segmentation**.

Completed under the supervision of **Dr. Michael Mandel** at Brooklyn College CUNY.
Won the **Terra NYC STEM First Award** and the **Milton Fisher Scholarship for
Innovation and Creativity**.

_View the project's:_
${link('Github', 'https://github.com/richardso21/serp2021-bgsub')},
${link('Paper', 'https://cdn.jsdelivr.net/gh/richardso21/SERP2021-BGSUB@main/Paper_21_6_SO.pdf')},
${link('Video', 'https://youtu.be/BKwb6yks85o')}
`
	},
	ttris: {
		title: 'ttris',
		tech_stack: ['Python', 'Pyxel'],
		date: new Date(2024, 3),
		image_url: 'ttris.gif',
		details: `
Tetris with modern rules, yet old-school retro vibes. Built with Pyxel,
implementing most of current-day Tetris Guideline mechanics, such as T-Spins,
hold, soft drop, Super Rotation System (SRS), and more...to come.

${link('View the source code', 'https://github.com/richardso21/ttris')}
_or play it online_
${link('here', 'https://richardso21.github.io/ttris/')}
`
	},
	moe_domain_generalization: {
		title: 'MoEs for Domain Generalization',
		tech_stack: ['PyTorch', 'Lightning'],
		date: new Date(2024, 11),
		image_url: 'moe.png',
		details: `
Investigated the ability for **Mixture of Experts** (MoE) models to adapt to
scenarios with **out-of-distribution data**, or in other words, domain
generalization (DG).

Dubbed **MEADOW**
(**M**ixture of **E**xperts for **A**bundant **DO**main on **W**ILDS), we test
DG-capability of MoEs against the Stanford
${link('WILDS iWildCam', 'https://wilds.stanford.edu/datasets/#iwildcam')}
benchmark.

Final project for **CS 8803: Data-Centric ML**. _View the_
${link('presentation', 'https://docs.google.com/presentation/d/1XKCtPTC0Dq2isUjqZ1vtgED58C33M79V7p-n6B-CMqE/edit?usp=sharing')},
${link('report', 'https://cdn.jsdelivr.net/gh/Data-Centric-ML-MEADOW/meadow@main/CS_8803_DML_Project_Final_Report.pdf')},
or ${link('code', 'https://github.com/Data-Centric-ML-MEADOW/meadow')}
`
	},
	layerleap: {
		title: 'LayerLeap',
		tech_stack: ['PyTorch', 'Transformers'],
		date: new Date(2025, 4),
		image_url: 'dls.png',
		details: `
Experimented with multiple strategies to augment
**${link('LayerSkip', 'https://arxiv.org/pdf/2404.16710')}**, a solution to
speed up LLM inference times by **Meta AI**.

Explored the use of hierarchial layer skipping, dynamic layer skipping, and layer
pruning on top of LayerSkip to increase the efficiency of computation resources
and time.

Final project for **CS 7643: Deep Learning**.
_View the final report_
${link('here', 'https://drive.google.com/file/d/1KxGa0Betps-chLQNVHpm_8uTr_9NUgaI/view?usp=sharing')}
`
	},
	potus_sentiment_analysis: {
		title: 'POTUS Sentiment Analysis',
		tech_stack: ['Transformers', 'NLTK', 'BeautifulSoup'],
		date: new Date(2023, 11),
		image_url: 'potus.png',
		details: `
Leveraged a **RoBERTa** model fine-tuned to classify 28 different emotions to
evaluate trends of sentiments of U.S. Presidential Inaugural Addresses over the
course of history. Used **BeautifulSoup 4** to scrape transcripts of these
Addresses from the American Presidency Project website, along with
**Transformers** and **NLTK** for sentiment classification.

Final project for **LING 3100: Applications to Linguistics**.
_View the colab notebook_
${link('here', 'https://colab.research.google.com/drive/1Nad6-QSXxrYZIGiX7j5It3ebqHk7TnOW')}
`
	},
	controlnet_augmentation: {
		title: 'ControlNet Augmentation',
		tech_stack: ['PyTorch', 'Scikit-Image'],
		date: new Date(2024, 4),
		image_url: 'cnet.png',
		details: `
Explored the use of image generation methods like **Stable Diffusion** and
**ControlNet** to augment very small datasets for image classification tasks.
Found a **10%** F1 score improvement on extremely sparse datasets (w/ ResNet-50).

_View the final report_
${link('here', 'https://richardso21.github.io/controlnet-augmentation/2024/04/20/final-project.html')}
`
	}
	// 	this_site: {
	// 		title: 'sorichard.com',
	// 		tech_stack: ['SvelteKit', 'GSAP', 'Tailwind'],
	// 		date: new Date(2025, 7),
	// 		image_url: 'site.png',
	// 		details: `
	// My portfolio website, not only to showcase my experience/projects, but also my
	// ability to **craft a delightful web UX** with modern frameworks.

	// Built with **Typescript** and **SvelteKit**. All stylings (using Tailwind) are
	// **fully responsive and custom**, borrowing components is lame. Animations
	// done with **GSAP Flip**. Only thing I can credit is
	// ${link('Vanta', 'https://github.com/tengbao/vanta')} for the amazing
	// background effects.

	// _Want to visit this site? You're already here!_
	// `
	// 	}
};
