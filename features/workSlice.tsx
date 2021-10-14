import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category, CategoryTitleOptions, Categories } from "features/projects";
import type { RootState } from "./store";

// Define a type for the slice state
interface MyWorkState {
  selectedCategories: CategoryTitleOptions[];
  allCategories: CategoryTitleOptions[];
}

// Define the initial state using that type
const initialState: MyWorkState = {
  selectedCategories: [],
  allCategories: ["Product", "Digital", "Furniture", "Experimental"],
};

export const myWorkSlice = createSlice({
  name: "myWork",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Selects ONLY the category provided
    selectCategory: (state, action: PayloadAction<CategoryTitleOptions>) => {
      state.selectedCategories = state.allCategories.filter(
        (category) => category == action.payload
      );
    },

    unSelectCategory: (state) => {
      state.selectedCategories = [];
    },
  },
});

export const { selectCategory, unSelectCategory } = myWorkSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSelectedCategories = (state: RootState) =>
  state.myWork.selectedCategories;

export default myWorkSlice.reducer;
