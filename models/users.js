const mongoose=require("mongoose");

const UsersSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    
    role: {
        type: String,
        default: "user"
    },
    firstname: {
        type: String,
        default: "Nothing to Show"
    },
    lastname: {
        type: String,
        default: "Nothing to Show"
    },
    phone: {
        type: String,
        default: "Nothing to Show"
    },
    bio: {
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
    },
    
});

const UsersModel = mongoose.model("users", UsersSchema);
module.exports = UsersModel;