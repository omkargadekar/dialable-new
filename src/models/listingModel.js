import mongoose, { Schema } from "mongoose";

const listingSchema = new Schema(
  {
    placeName: {
      type: String,
      required: true,
    },
    category: {
      type: [String],
      required: true,
    },
    keywords: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    website: {
      type: String,
    },
    designation: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    facebook: {
      type: String,
    },
    twitter: {
      type: String,
    },
    linked: {
      type: String,
    },
    skype: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Listing = mongoose.model.Listing || mongoose.model("Listing", listingSchema);
