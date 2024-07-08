import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
	server: {
		host: true,
	},
	build :{
		format: "file",
	},
	base: "/doc",
	output: "static",
	integrations: [
		partytown(),
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
				Header: './src/components/header.astro'
			},		
			tableOfContents: false,
			sidebar: [
				{
					label: 'About',
					items: [
						{ label: "Homepage", link:'/home/'},
						{ label: "Contact", link:'/contact/'},
						{ label: "Legal", link:'/legal/'},
					]
				},
				{
					label: 'Documentation',
					items: [
						{ label: "Help", link:'/doc/help/'},
						{ label: "Tags", link:'/doc/tags/'},
						{ label: "Keyboard shortcuts", link:'/doc/shortcuts/'},
					],
				},
			],
		}),
	],
});
