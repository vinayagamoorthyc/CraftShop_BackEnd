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
        default: "00000 00000"
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
        default: "000 000"
    },
    street: {
        type: String,
        default: "Nothing to Show"
    },
    cart:[{
        imgurl: String,
        proname: String,
        prorate: Number,
        count: Number,
    }]
});

const UsersModel = mongoose.model("users", UsersSchema);
module.exports = UsersModel;