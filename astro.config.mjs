import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
	site: "https://leuria.eu",
	fonts: [
		{
			name: "Plus Jakarta Sans",
			cssVariable: "--font-jakarta",
			provider: fontProviders.fontsource(),
			weights: [400, 500, 600, 700, 800],
			styles: ["normal"],
			subsets: ["latin", "latin-ext"],
			fallbacks: ["ui-sans-serif", "system-ui", "sans-serif"],
		},
		{
			name: "Geist Mono",
			cssVariable: "--font-geist-mono",
			provider: fontProviders.fontsource(),
			weights: [400, 500],
			styles: ["normal"],
			subsets: ["latin"],
			fallbacks: ["ui-monospace", "monospace"],
		},
	],
});
