const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const PostSchema = new Schema({
    category: { type: String, trim: true, required: true },
    name_service: { type: String, trim: true, required: true },
    address: { type: String, trim: true, required: true },
    img_url: { type: String },
    hidden: { type: Boolean, default: false }
}, {
    timestamps: true
});

module.exports = Mongoose.model("Post", PostSchema)