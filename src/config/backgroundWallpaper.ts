import type { BackgroundWallpaperConfig } from "@/types/config";

export const backgroundWallpaper: BackgroundWallpaperConfig = {
	mode: "banner",
	switchable: true,
	src: {
		desktop: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=80",
		mobile: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
	},
	banner: {
		position: "0% 20%",
		homeText: {
			enable: true,
			switchable: true,
			title: "bingo",
			titleSize: "3.8rem",
			subtitle: ["我的博客", "记录技术、项目和生活", "写点东西，留下些什么"],
			subtitleSize: "1.5rem",
			typewriter: { enable: true, speed: 100, deleteSpeed: 50, pauseTime: 2000 },
		},
		credit: { enable: { desktop: false, mobile: false }, text: { desktop: "", mobile: "" }, url: { desktop: "", mobile: "" } },
		navbar: { transparentMode: "semifull", enableBlur: true, blur: 10 },
		carousel: { enable: true, interval: 5000, switchable: true },
		waves: { enable: { desktop: false, mobile: false }, switchable: true },
	},
};
