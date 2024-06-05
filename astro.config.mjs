import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	server: {
		host: true,
	},
	build :{
		format: "file",
	},
	base: "/BfmLH/doc",
	output: "static",
	integrations: [
		starlight({
			favicon: "./src/assets/favicon.png",
			title: 'Climoscope β',
			logo: {
        src: './src/assets/favicon.png',
      },
			customCss: [
        './src/styles/custom.css',
      ],
			components: {
				Header: './src/components/header.astro',
			},		
			tableOfContents: false,
			sidebar: [
				{ label: "Homepage", link:'/home/'},
				{
					label: 'Documentation',
					autogenerate: { directory: 'doc' },
				},
				{ label: "Legal", link:'/legal/'},
			],
		}),
	],
});
