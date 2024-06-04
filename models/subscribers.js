const mongoose=require("mongoose");

const SubscriberSchema = new mongoose.Schema({
    email: String
});

const SubscriberModel= mongoose.model("subscribers", SubscriberSchema);
module.exports = SubscriberModel;