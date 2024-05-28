const mongoose=require("mongoose");

const ProductSchema = new mongoose.Schema({
    proname: String,
    prorate: Number,
    desc: String,
    maker: String,
    category: String,
    imgurl: String,
    liked: Boolean,
    recent: Boolean,
    category2: String
});

const ProductModel = mongoose.model("products", ProductSchema);
module.exports = ProductModel;