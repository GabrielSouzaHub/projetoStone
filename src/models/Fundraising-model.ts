import mongoose from "mongoose";

const Fundraising = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    video: {
        type: String,
    },
    description: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
    validity: {
        type: Date,
        required: true,
    },
},
    {
        timestamps: true,
    });

mongoose.model('fundraising', Fundraising);