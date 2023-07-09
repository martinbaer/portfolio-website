import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

const production = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
});


// {
// 	preprocess: sveltePreprocess({
// 		sourceMap: !production,
// 		scss: {
// 			includePaths: ['src'],
// 			prependData: `@import 'src/constants/colors.scss';`,
// 		},
// 	})
// }