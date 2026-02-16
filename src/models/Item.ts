import mongoose, { Schema, Types } from "mongoose";

export type StatusType = "en cours" | "terminé";

type ItemType = {
  visuals: string[];
  title: string;
  author_artiste: string;
  added_by: Types.ObjectId;
  collection: Types.ObjectId;
  status: StatusType;
  tome?: string;
  genre?: string;
  note?: string;
};

const itemSchema = new Schema<ItemType>(
  {
    visuals: {
      type: [String],
      required: true,
      default: [],
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author_artiste: {
      type: String,
      required: true,
      trim: true,
    },
    added_by: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    collection: {
      type: Schema.Types.ObjectId,
      ref: "Collection",
      required: true,
    },
    status: {
      type: String,
      enum: ["en cours", "terminé"],
      required: true,
    },
    tome: {
      type: String,
      trim: true,
    },
    genre: {
      type: String,
      trim: true,
    },
    note: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const Item = mongoose.models.Item || mongoose.model("Item", itemSchema);

export default Item;
