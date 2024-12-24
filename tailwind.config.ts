import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			animation: {
				fade: 'fadeIn 0.5s ease-in-out 0.5s forwards'
			},
			keyframes: {
				fadeIn: {
					from: { opacity: '0' },
					to: { opacity: '1' }
				}
			}
		}
	},

	plugins: [
		function ({ addVariant }) {
			addVariant('child', '& > *');
		}
	]
} satisfies Config;
