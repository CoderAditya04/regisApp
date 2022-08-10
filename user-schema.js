import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique:true,
        lowercase: true
    },
    number: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true,
        trim: true
    }
});

const user = mongoose.model('user',userSchema);

export default user;