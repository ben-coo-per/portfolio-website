import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category, CategoryTitleOptions } from "features/projects";
import type { RootState } from "./store";

// Define a type for the slice state
interface MyWorkState {
  selectedCategories: Category[];
}

// Define the initial state using that type
const initialState: MyWorkState = {
  selectedCategories: [],
};

export const myWorkSlice = createSlice({
  name: "myWork",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    hydrateCategories: (state, action: PayloadAction<Category[]>) => {
      state.selectedCategories = action.payload;
    },

    addCategory: (state, action: PayloadAction<Category>) => {
      state.selectedCategories = [...state.selectedCategories, action.payload];
    },

    removeCategory: (state, action: PayloadAction<Category>) => {
      state.selectedCategories = state.selectedCategories.filter(
        (category) => category._id !== action.payload._id
      );
    },

    toggleCategory: (state, action: PayloadAction<Category>) => {
      if (state.selectedCategories.includes(action.payload)) {
        state.selectedCategories = state.selectedCategories.filter(
          (category) => category._id !== action.payload._id
        );
      } else {
        state.selectedCategories = [
          ...state.selectedCategories,
          action.payload,
        ];
      }
    },
  },
});

export const {
  hydrateCategories,
  addCategory,
  removeCategory,
  toggleCategory,
} = myWorkSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSelectedCategories = (state: RootState) =>
  state.myWork.selectedCategories;

export default myWorkSlice.reducer;
