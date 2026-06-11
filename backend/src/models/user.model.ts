import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ["Admin", "User"],
        default: "User"
    }
}, 
{
    timestamps: true
});

userSchema.pre("save", async function() {
    this.password = await bcrypt.hash(this.password, 14);
})

const User = model("User", userSchema);
export default User;