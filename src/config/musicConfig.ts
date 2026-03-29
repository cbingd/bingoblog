import type { MusicPlayerConfig } from "../types/config";

export const musicPlayerConfig: MusicPlayerConfig = {
	showInNavbar: false,
	mode: "local",
	volume: 0.7,
	playMode: "list",
	showLyrics: true,
	local: { playlist: [] },
};
