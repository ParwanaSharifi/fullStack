import mongoose, { modelNames } from "mongoose";

// Defining a new schema for saved recipes
const savedRecipeSchema = new mongoose.Schema({
  recipe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "recipe",
  },
});

export const SavedRecipe = mongoose.model("SavedRecipe", savedRecipeSchema);
