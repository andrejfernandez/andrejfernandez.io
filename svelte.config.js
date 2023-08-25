import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-auto';

export default {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter()
	}
};
