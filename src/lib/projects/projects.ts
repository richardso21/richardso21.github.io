import { md_link as link } from '$lib/animLink';
import type { ProjectMetaData } from './projects.types';

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
	caribou: {
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
	moe: {
		title: 'MoEs for Domain Generalization',
		tech_stack: ['PyTorch', 'Lightning', 'HF Datasets'],
		date: new Date(2024, 11),
		image_url: 'moe.png',
		details: `
Investigated the ability for **Mixture of Experts** (MoE) models to adapt to
scenarios with **out-of-distribution data**, or in other words, domain
generalization (DG).

Dubbed **MEADOW**
(**M**ixture of **E**xperts for **A**bundant **DO**main on **W**ILDS), we test
DG-capability of MoEs against the
${link('Stanford WILDS iWildCam benchmark', 'https://wilds.stanford.edu/datasets/#iwildcam')}

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
${link('here', '/projects/cs7643.pdf')}
`
	},
	potus: {
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
	}
};
