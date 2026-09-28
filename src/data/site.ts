/** The developer portal, for site owners who want to add Leuria. */
export const DEVELOPERS_URL = "https://leuria.dev";

export type Platform = "mac" | "windows" | "linux";

/** Where published builds live: the latest GitHub release, under stable names. */
const LATEST = "https://github.com/leur-ia/leuria/releases/latest/download";

/**
 * The desktop app, per platform. `url` stays null until a build is
 * published: the site then says it isn't available yet instead of
 * linking to nothing. On Mac, `url` is for Apple Silicon (every Mac since
 * late 2020) and `intel` for the older ones.
 */
export const downloads: Record<Platform, { name: string; url: string | null; intel?: string }> = {
	mac: { name: "Mac", url: `${LATEST}/Leuria-mac-apple-silicon.dmg`, intel: `${LATEST}/Leuria-mac-intel.dmg` },
	windows: { name: "Windows", url: null },
	linux: { name: "Linux", url: null },
};

/** The Homebrew commands, for Mac users who prefer it: the leuria repository is also the tap. */
export const BREW_INSTALL = "brew tap leur-ia/leuria https://github.com/leur-ia/leuria && brew install --cask leuria";
