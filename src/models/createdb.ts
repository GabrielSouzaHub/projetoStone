import mongoose from "mongoose";
import bcrypt from "bcrypt";
type userSchema ={
    name:{ type: String},
    email:{ type: String},
    password: { type: String},
}
const UserSchema = new mongoose.Schema({
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
},
 {
    timestamps: true,
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

mongoose.model('usuario', UserSchema);
mongoose.model('vaquinha', Vaquinha);