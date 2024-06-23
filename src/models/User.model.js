import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{

        type: String,
        unique: true,
        required: true,
        trim: true,

    },
    email: {

        type: String,
        unique: true,
        required: true,
        trim: true,

    },
    password: {

        type: String,
        trim: true

    },
}, 
{
    timestamps: true
})

export default mongoose.model('User', userSchema);