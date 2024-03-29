const { Schema, model } = require("mongoose")

const postSchema = new Schema({
    title: { type: String, required: true },
    category: { type: String, enum: ["Html & Css", "JavaScript", "Tools", "Projects", "Uncategorized"], message: "{VALUE is not supported" },
    description: { type: String, required: true },
    creator: { type: Schema.Types.ObjectId, ref: "User" },
    viewCount: { type: Number, required: true, default: 0},
    thumbnail: { type: String, required: true}
}, { timestamps: true })

module.exports = model("Post", postSchema)