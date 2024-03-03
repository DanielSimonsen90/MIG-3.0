import Genre from "./Genre";

type Options = {
  genres: Genre[];
  subCategories?: Category[];
} | {
  genres?: Genre[];
  subCategories: Category[];
}

export class Category {
  public genres?: Genre[];
  public subCategories?: Category[]

  constructor(public name: string, options: Options) {
    this.genres = options.genres;
    this.subCategories = options.subCategories;
  }
}

export default Category;