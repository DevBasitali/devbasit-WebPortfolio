import {Schema, model, models} from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        // unique: [true, 'username alredy exist!']
    },

    email: {
        type: String,
        required: [true, 'Email is required'],
        // unique: [true, 'Email alredy exist!']
    },

    message: {
        type: String,
        required: [true, 'Enter your message'],
        // minlength: [20, "Message must be at least 10 characters"],
    }
})

const User = models.User || model( "User", UserSchema)
export default User;
