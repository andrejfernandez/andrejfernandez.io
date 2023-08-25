import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['InterVariable', 'Inter', 'sans-serif']
			}
		}
	},
	plugins: [daisyui],
	daisyui: {
		themes: ['black', 'lofi']
	}
} satisfies Config;
