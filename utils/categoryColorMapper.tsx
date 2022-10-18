import { CategoryTitleOptions } from "features/projects";

export default function getCategoryColor(category: CategoryTitleOptions) {
	if (category.toLowerCase() === "product") {
		return "orange";
	}
	if (category.toLowerCase() === "digital") {
		return "blue";
	}
	if (category.toLowerCase() === "experimental") {
		return "green";
	}
	if (category.toLowerCase() === "physical") {
		return "red";
	} else {
		return "";
	}
}
