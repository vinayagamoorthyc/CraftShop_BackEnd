const mongoose=require("mongoose");

const ReportSchema = new mongoose.Schema({
    report: String
});

const ReportModel= mongoose.model("reports", ReportSchema);
module.exports = ReportModel;