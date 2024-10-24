import mongoosh, { Schema } from "mongoosh";

const playlistSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, "Playlist name must be at least 3 characters long!"],
      maxlength: [160, "Playlist name must be at most 160 characters long!"],
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: [
        3,
        "Playlist description must be at least 3 characters long!",
      ],
      maxlength: [
        400,
        "Playlist description must be at most 400 characters long!",
      ],
    },
    videos: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const Playlist = mongoosh.model("Playlist", playlistSchema);
