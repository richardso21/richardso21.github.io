export type ExperienceMetaData = {
	org: string;
	role: string;
	start: Date;
	end?: Date;
	details: string | Array<string>;
	icon_url: string;
	iconBackdrop?: string;
};
