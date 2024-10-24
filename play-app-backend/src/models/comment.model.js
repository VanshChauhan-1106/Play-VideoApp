import mongoosh, { Schema } from "mongoosh";
import mongooshAggregatePaginate from "mongoosh-aggregate-paginate-v2";

const commentSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
      trim: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    video: {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
  },
  {
    timestamps: true,
  }
);

commentSchema.plugin(mongooshAggregatePaginate);

export const Comment = mongoosh.model("Comment", commentSchema);
