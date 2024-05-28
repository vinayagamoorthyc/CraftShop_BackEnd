const mongoose=require("mongoose");

const ProductSchema = new mongoose.Schema({
    proname: String,
    prorate: Number,
    desc: String,
    maker: String,
    category: String,
    category2: String,
    imgurl: String,
    liked: {
        type: Boolean,
        default: false
    },
    recent: {
        type: Boolean,
        default: false
    }
});

const ProductModel = mongoose.model("products", ProductSchema);
module.exports = ProductModel;