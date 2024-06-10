const mongoose=require("mongoose");

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    firstname:  {
        type: String,
        default: "Nothing to Show"
    },
    lastname:  {
        type: String,
        default: "Nothing to Show"
    },
    phone:  {
        type: Number,
        default: "Nothing to Show"
    },
    bio:  {
        type: String,
        default: "Nothing to Show"
    },
    country: {
        type: String,
        default: "Nothing to Show"
    },
    citystate: {
        type: String,
        default: "Nothing to Show"
    },
    postalcode: {
        type: String,
        default: "Nothing to Show"
    },
    street: {
        type: String,
        default: "Nothing to Show"
    }
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;