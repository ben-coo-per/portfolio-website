export interface Project {
  backgroundImage: Image;
  title: string;
  role: string;
  body: any[];
  categories: Category[];
  mainImage: Image;
  slug: string;
  years: string;
  _id: string;
}

export interface Category {
  title: CategoryTitleOptions;
  _id: string;
}

export type CategoryTitleOptions =
  | "product"
  | "digital"
  | "furniture"
  | "experimental";

export type Image = {
  asset: {
    _ref: string;
    _type: string;
  };
  _type: string;
};
