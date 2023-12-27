import mongoose, { Schema } from "mongoose";
import categoryModel from "./category.model";
import subcategoryModel from "./subcategory.model";

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: categoryModel,
  },
  subcategory: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: subcategoryModel,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  shortdescription: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: null,
    maxLength: 1000,
  },
  thumbnail: {
    type: String,
    default: null,
  },
  images: {
    type: String,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Product = mongoose.model("Product", productSchema);
