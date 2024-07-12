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
			title: 'Climoscope',
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
					label: 'Welcome!',
					link: '/home/',
				},
				{
					label: 'Documentation',
					items: [
						{ label: "Index", link:'/doc/help/'},
						{ label: "Data", link:'/doc/data/'},
						{ label: "Climate", link:'/doc/climate/'},
						{ label: "Weather", link:'/doc/weather/'},
						{ label: "Tags", link:'/doc/tags/'},
						{ label: "Keyboard", link:'/doc/shortcuts/'},
					],
				},
				{
					label: 'Boring',
					items: [
						{ label: "Contact", link:'/contact/'},
						{ label: "Legal", link:'/legal/'},
					],
				},
			],
		}),
	],
});
