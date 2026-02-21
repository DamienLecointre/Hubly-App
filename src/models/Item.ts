import mongoose, { Schema, Types } from "mongoose";

export type StatusType = "IN_PROGRESS" | "DONE" | "NEW";

type VisualType = {
  url: string;
  public_id: string;
};

type ItemType = {
  visuals: VisualType[];
  title: string;
  author_artiste: string;
  added_by: Types.ObjectId;
  collection_id: Types.ObjectId;
  status: StatusType;
  tome?: string;
  genre?: string;
  note?: string;
};

const itemSchema = new Schema<ItemType>(
  {
    visuals: {
      type: [
        {
          url: { type: String, required: true },
          public_id: { type: String, required: true },
        },
      ],
      required: true,
      validate: {
        validator: (arr: VisualType[]) => arr.length > 0,
        message: "At least one image is required",
      },
    },
    title: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    author_artiste: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    added_by: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    collection_id: {
      type: Schema.Types.ObjectId,
      ref: "Collection",
      required: true,
    },
    status: {
      type: String,
      enum: ["IN_PROGRESS", "DONE", "NEW"],
      default: "NEW",
      required: true,
    },
    tome: {
      type: String,
      trim: true,
      lowercase: true,
    },
    genre: {
      type: String,
      trim: true,
      lowercase: true,
    },
    note: {
      type: String,
      trim: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  },
);

const Item = mongoose.models.Item || mongoose.model("Item", itemSchema);

export default Item;
