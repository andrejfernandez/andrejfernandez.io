interface Tag {
	tagName: string;
	url: string;
}

export interface Service {
	id: number;
	image: string;
	title: string;
	description: string;
	tags: Tag[];
}
