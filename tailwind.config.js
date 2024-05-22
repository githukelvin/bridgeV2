/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors:{
			'neutrals':{
				900:"#676666",
				800:"#7F7F7F",
				700:"#909090",
				600:"#9F9F9F",	
				500:"#AAAAAA",
				400:"#B8B8B8",
				300:"#CAC9C9",
				200:"#D8D8D8",
				100:"#E5E5E5",
				50:"#F2F2F2",	
			},
			'success':{
			
				500:"#53A95B",
				400:"#60BA64",
				300:"#91DB93",
				200:"#AFEDB1",
				100:"#C2F5C4",
			},
			'primary':{
				500:"#001f3f",
				400:"#21405f",
				300:"#42607f",
				200:"#63819f",
				100:"#84a1bf",
			},
			'shade':{
				200:"#141414",
				100:"#212121",
			},
			'white':'#ffffff',
			'black':'#000000',
			'accent':{
				500:"#53a95b",
				400:"#60ba64",
				300:"#91db93",
				200:"#afedb1",
				100:"#c2f5c4",
			},
			'error':{
				400:"#7f1d1d",
				300:"#ef4444",
				200:"#891c1c",
				100:"#fef2f2",
			},
			'warning':{
				500:"#78350f",
				400:"#b45309",
				300:"#f59e08",
				200:"#fcd34d",
				100:"#fffbeb",
			},
		}
	},
	plugins: [],
}
