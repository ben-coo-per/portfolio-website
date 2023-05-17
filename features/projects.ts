export interface Project {
	figmaLink: string;
	backgroundImage: Image;
	title: string;
	role: string;
	body: any[];
	categories: Category[];
	mainImage: Image;
	slug: string;
	years: string;
	_id: string;
	linkToProject?: string;
}

export interface Category {
	title: CategoryTitleOptions;
	_id: string;
}

export type CategoryTitleOptions = keyof typeof Categories;

export type Image = {
	asset: {
		_ref: string;
		_type: string;
	};
	_type: string;
};

export enum Categories {
	Digital,
	Physical,
	Product,
	Experimental,
}
