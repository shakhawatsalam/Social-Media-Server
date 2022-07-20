import mongoose from "mongoose";


const postSchema = mongoose.Schema({
    userId: { type: String, reqired: true },
    desc: String,
    likes: [],
    image: String,
},
    {
        timestamps: true
    });

var PostModel = mongoose.model("Posts", postSchema)
export default PostModel