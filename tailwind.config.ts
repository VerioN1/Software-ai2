import type { Config } from 'tailwindcss';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { nextui } = require('@nextui-org/react');

export default {
	content: ['./app/**/*.{js,jsx,ts,tsx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {}
	},
	plugins: [
		nextui({
			defaultTheme: 'light',

			themes: {
				dark: {
					colors: {
						primary: '#5932EA'
					}
				},
				light: {
					colors: {
						background: '#e9e4f5',
						primary: {
							DEFAULT: '#5932EA',
							foreground: '#ffffff'
						}
					}
				}
			}
		})
	]
} satisfies Config;
