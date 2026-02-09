import mongoose, { Schema, Types } from "mongoose";

export type CollectionLabel =
  | "Livres"
  | "Musiques"
  | "Bandes-dessinées"
  | "Jeux de société"
  | "Jeux vidéo";

export type MembersCollectionType = {
  user_id: Types.ObjectId;
  can_edit: boolean;
};

export type CollectionType = {
  title: string;
  type: CollectionLabel[];
  owner_id: Types.ObjectId;
  members: MembersCollectionType;
  is_public: boolean;
};

const collectionSchema = new Schema<CollectionType>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    type: {
      type: [String],
      enum: [
        "Livres",
        "Musiques",
        "Bandes-dessinées",
        "Jeux de société",
        "Jeux vidéo",
      ],
      required: true,
    },

    owner_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    members: [
      {
        user_id: {
          type: Schema.Types.ObjectId,
          ref: "User",
          required: false,
        },
        can_edit: {
          type: Boolean,
          default: false,
        },
      },
    ],

    is_public: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const Collection =
  mongoose.models.Collection ||
  mongoose.model<CollectionType>("Collection", collectionSchema);

export default Collection;
