import type { Platform } from "../data/site";

/** The visitor's system, from the user agent; undefined on phones and tablets. */
export function platform(): Platform | undefined {
	const ua = navigator.userAgent;
	if (/Mac OS X|Macintosh/.test(ua) && !/iPhone|iPad/.test(ua)) return "mac";
	if (/Windows/.test(ua)) return "windows";
	if (/Linux/.test(ua) && !/Android/.test(ua)) return "linux";
	return undefined;
}

/**
 * The processor, where the browser says (Chrome and Edge): "x86" or "arm".
 * Safari doesn't, so a Mac gets the Apple Silicon build.
 */
export async function architecture(): Promise<string | undefined> {
	const data = (navigator as { userAgentData?: { getHighEntropyValues(hints: string[]): Promise<{ architecture?: string }> } }).userAgentData;
	try {
		return (await data?.getHighEntropyValues(["architecture"]))?.architecture;
	} catch {
		return undefined;
	}
}

/** Copies `text`; with no clipboard, selects `shown` so the visitor can copy it. True when copied. */
export async function copyText(text: string, shown: Node): Promise<boolean> {
	try {
		await navigator.clipboard.writeText(text);
		return true;
	} catch {
		getSelection()?.selectAllChildren(shown);
		return false;
	}
}
