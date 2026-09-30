/** The developer portal, for site owners who want to add Leuria. */
export const DEVELOPERS_URL = "https://leuria.dev";

export type Platform = "mac" | "windows" | "linux";

/** Where published builds live: the latest GitHub release, under stable names. */
const LATEST = "https://github.com/leur-ia/leuria/releases/latest/download";

/**
 * The desktop app, per platform. `url` stays null until a build is
 * published: the site then says it isn't available yet instead of
 * linking to nothing. On Mac, `url` is for Apple Silicon (every Mac since
 * late 2020) and `intel` for the older ones. On Windows, `url` is for x64
 * PCs, `arm` for Windows on ARM, and `msi` for companies installing it for
 * everyone.
 */
export interface Build {
	name: string;
	url: string | null;
	intel?: string;
	arm?: string;
	msi?: string;
}

export const downloads: Record<Platform, Build> = {
	mac: { name: "Mac", url: `${LATEST}/Leuria-mac-apple-silicon.dmg`, intel: `${LATEST}/Leuria-mac-intel.dmg` },
	windows: {
		name: "Windows",
		url: `${LATEST}/Leuria-windows-setup.exe`,
		arm: `${LATEST}/Leuria-windows-arm-setup.exe`,
		msi: `${LATEST}/Leuria-windows.msi`,
	},
	linux: { name: "Linux", url: null },
};

/** The Homebrew commands, for Mac users who prefer it: the leuria repository is also the tap. */
export const BREW_INSTALL = "brew tap leur-ia/leuria https://github.com/leur-ia/leuria && brew install --cask leuria";

/** Structured data (schema.org) for search engines: who makes Leuria, and the app itself. */
const ORGANIZATION = {
	"@type": "Organization",
	"@id": "https://leuria.eu/#organization",
	name: "Leuria",
	url: "https://leuria.eu",
	logo: "https://leuria.eu/apple-touch-icon.png",
	sameAs: ["https://github.com/leur-ia", "https://leuria.dev"],
};

const APP_JSON_LD = {
	"@type": "SoftwareApplication",
	"@id": "https://leuria.eu/#app",
	name: "Leuria",
	description: "Use your own AI (ChatGPT, Claude, Mistral or a model on your computer) on the websites you choose. Every site asks first.",
	url: "https://leuria.eu",
	applicationCategory: "UtilitiesApplication",
	operatingSystem: Object.values(downloads)
		.filter((build) => build.url)
		.map((build) => (build.name === "Mac" ? "macOS" : build.name))
		.join(", "),
	downloadUrl: "https://leuria.eu/download",
	license: "https://www.apache.org/licenses/LICENSE-2.0",
	isAccessibleForFree: true,
	offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
	publisher: { "@id": ORGANIZATION["@id"] },
	sameAs: ["https://github.com/leur-ia/leuria"],
};

export const SITE_JSON_LD = {
	"@context": "https://schema.org",
	"@graph": [ORGANIZATION, { "@type": "WebSite", "@id": "https://leuria.eu/#website", name: "Leuria", url: "https://leuria.eu", publisher: { "@id": ORGANIZATION["@id"] } }, APP_JSON_LD],
};
