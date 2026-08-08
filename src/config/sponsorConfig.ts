import type { SponsorConfig } from "../types/sponsorConfig";

export const sponsorConfig: SponsorConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 打赏用途说明
	usage:
		"我心中的“缪斯”是只敏感的猫。",

	// 是否显示打赏者列表
	showSponsorsList: true,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否在文章详情页底部显示打赏按钮
	showButtonInPost: true,

	// 打赏方式列表
	methods: [
		
		
			
	],

	// 打赏者列表（可选）
	sponsors: [
		// 示例：已实名打赏者
		{
			name: "是海星不是手里剑",
			avatar:
				"https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEY0hhqdxUhLNdf2pZf6RFOOxaI-RNHCwACfSgAAvmbuFcyoctVBLQYzz0E.jpg",
			amount: "",
			date: "2026-8-01",
		},

		
	],
};
