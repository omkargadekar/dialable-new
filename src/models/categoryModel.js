import mongoose, { Schema } from "mongoose";

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Category = mongoose.models.Category || mongoose.model("Category", CategorySchema);
// export default mongoose.model("Category", CategorySchema)
