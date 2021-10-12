import { CategoryTitleOptions } from "types/projects";

export default function getCategoryColor(category: CategoryTitleOptions) {
  console.log(category);
  if (category.toLowerCase() === "product") {
    return "orange";
  }
  if (category.toLowerCase() === "digital") {
    return "blue";
  }
  if (category.toLowerCase() === "experimental") {
    return "green";
  }
  if (category.toLowerCase() === "furniture") {
    return "red";
  } else {
    return "";
  }
}
