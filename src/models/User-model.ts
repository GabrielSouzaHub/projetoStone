import mongoose from "mongoose";
//import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
    CPF: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    birth: {
        type: Date,
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
        // select: false, //*!tirar quando subir
    },
    number: {
        type: String,
        required: true,
    },
    // address: {
    //     cep: {
    //         type: String,
    //         required: true,
    //     },
    //     publicPlace: {
    //         type: String,
    //         required: true,
    //     },
    //     complement: {
    //         type: String,
    //         required: true,
    //     },
    //     district: {
    //         type: String,
    //         required: true,
    //     },
    //     locality: {
    //         type: String,
    //         required: true,
    //     },
    //     FU: {
    //         type: String,
    //         required: true,
    //     },
    // },
},
 {
    timestamps: true,
});

// UserSchema.pre('save', async function(next) {
//     const hash = await bcrypt.hash(this.password, 10);
//     this.password = hash;
//     next();
// })

mongoose.model('user', UserSchema);