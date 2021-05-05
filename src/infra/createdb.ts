import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Usuario = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        //select: false
    },
});

const Vaquinha = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
},
    {
        timestamps: true,
    });

mongoose.model('usuario', Usuario);
mongoose.model('vaquinha', Vaquinha);