import stockimg from '../../media/stockimg.jpeg';
import type { Service } from '$lib/types';

let services: Service[] = [
	{
		id: 0,
		image: stockimg,
		title: 'Personal & Business Websites',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
		tags: [
			{ tagName: 'SvelteKit', url: 'https://kit.svelte.dev/' },
			{ tagName: 'TypeScript', url: 'https://www.typescriptlang.org/' },
			{ tagName: 'TailwindCSS', url: 'https://tailwindcss.com/' }
		]
	},
	{
		id: 1,
		image: stockimg,
		title: 'Portfolios & Blogs',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
		tags: [
			{ tagName: 'Astro', url: 'https://astro.build/' },
			{ tagName: 'Svelte', url: 'https://svelte.dev/' },
			{ tagName: 'TypeScript', url: 'https://www.typescriptlang.org/' },
			{ tagName: 'TailwindCSS', url: 'https://tailwindcss.com/' }
		]
	},
	{
		id: 2,
		image: stockimg,
		title: 'E-Commerce Websites',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
		tags: [
			{ tagName: 'SvelteKit', url: 'https://kit.svelte.dev/' },
			{ tagName: 'TypeScript', url: 'https://www.typescriptlang.org/' },
			{ tagName: 'TailwindCSS', url: 'https://tailwindcss.com/' },
			{ tagName: 'Supabase', url: 'https://supabase.com/' },
			{ tagName: 'Stripe', url: 'https://stripe.com/' }
		]
	}
];

export function load() {
	return { services };
}
