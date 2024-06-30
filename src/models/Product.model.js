import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
            trim: true,
        },
        description:{
            type: String,
            required: true,
        },
        price:{
            type: Number,
            default: 0,
        },
        stock:{
            type: Number,
            default: 0,
        },
        available:{
            type: Boolean,
            default: false
        },
        imgURL: String,
    }
)

export default mongoose.model('Product', productSchema);