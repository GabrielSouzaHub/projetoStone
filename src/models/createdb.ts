import mongoose from "mongoose";
import bcrypt from "bcrypt";

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

UserSchema.pre('save', async (next)=> {
    const user = this;
})

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