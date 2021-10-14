import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category, CategoryTitleOptions } from "features/projects";
import type { RootState } from "./store";

// Define a type for the slice state
interface MyWorkState {
  selectedCategories: Category[];
  allCategories: Category[];
}

// Define the initial state using that type
const initialState: MyWorkState = {
  selectedCategories: [],
  allCategories: [],
};

export const myWorkSlice = createSlice({
  name: "myWork",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    hydrateCategories: (state, action: PayloadAction<Category[]>) => {
      state.allCategories = action.payload;
    },

    addCategory: (state, action: PayloadAction<Category>) => {
      state.selectedCategories = [...state.selectedCategories, action.payload];
    },

    removeCategory: (state, action: PayloadAction<Category>) => {
      state.selectedCategories = state.selectedCategories.filter(
        (category) => category._id !== action.payload._id
      );
    },

    // Selects ONLY the category provided
    selectCategory: (state, action: PayloadAction<CategoryTitleOptions>) => {
      state.selectedCategories = state.allCategories.filter(
        (category) => category.title == action.payload
      );
    },

    unSelectCategory: (state) => {
      state.selectedCategories = [];
    },
  },
});

export const {
  hydrateCategories,
  addCategory,
  removeCategory,
  selectCategory,
  unSelectCategory,
} = myWorkSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSelectedCategories = (state: RootState) =>
  state.myWork.selectedCategories;

export default myWorkSlice.reducer;
