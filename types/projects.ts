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
  primaryColor: string;
  secondaryColor: string;
  title: string;
  _id: string;
}

export type Image = {
  asset: {
    _ref: string;
    _type: string;
  };
  _type: string;
};
