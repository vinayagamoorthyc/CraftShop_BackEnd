const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ProductModel = require("./models/product.js");
const SubscriberModel = require('./models/subscribers.js');
const ReportModel = require('./models/reports.js');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://VinayagaMoorthy27:Vinayaga2709@vinayagadb.o991msv.mongodb.net/CraftShop?retryWrites=true&w=majority");

app.listen(3001, ()=>{
    console.log("server is running");
});

// ------------------------------------- Products ------------------------------------

app.get("/getProduct", (req,res)=>{
    ProductModel.find()
    .then(e=>res.json(e))
    .catch(err=>res.json(err));
})
app.post("/createProduct", (req, res)=>{
    ProductModel.create(req.body)
    .then(e=>res.json(e))
    .catch(err=>res.json(err))
});
app.delete("/deleteProduct/:id", (req, res)=>{
    const id = req.params.id;
    ProductModel.findByIdAndDelete({_id: id})
    .then(e=>res.json(e))
    .catch(err=>res.json(err))
});
app.get("/getParticular/:id", (req, res)=>{
    const id = req.params.id;
    ProductModel.findById({_id:id})
    .then(e=>res.json(e))
    .catch(err=>res.json(err))
  });
  app.put("/updateProduct/:id", (req, res)=>{
    const id = req.params.id;
    ProductModel.findByIdAndUpdate({_id: id}, {proname: req.body.proname, prorate: req.body.prorate, 
      desc: req.body.desc, maker: req.body.maker,category: req.body.category, category2: req.body.category2, imgurl: req.body.imgurl
    })
    .then(e=>res.json(e))
    .catch(err=>res.json(err))
  })

  // ------------------------------ subscriber --------------------------------

  app.get("/getSubscribers", (req,res)=>{
    SubscriberModel.find()
    .then(e=>res.json(e))
    .catch(err=>res.json(err));
})
  app.post("/addSubscriber", (req,res)=>{
    SubscriberModel.create(req.body)
    .then(e=>res.json(e))
    .catch(err=>res.json(err));
  });
  app.delete("/deleteSubcriber/:id", (req, res)=>{
    const id = req.params.id;
    SubscriberModel.findByIdAndDelete({_id: id})
    .then(e=>res.json(e))
    .catch(err=>res.json(err))
});

  // ------------------------------ Reports --------------------------------

  app.get("/getReports", (req,res)=>{
    ReportModel.find()
    .then(e=>res.json(e))
    .catch(err=>res.json(err));
})
  app.post("/addReport", (req,res)=>{
    ReportModel.create(req.body)
    .then(e=>res.json(e))
    .catch(err=>res.json(err));
  });
  app.delete("/deleteReport/:id", (req, res)=>{
    const id = req.params.id;
    ReportModel.findByIdAndDelete({_id: id})
    .then(e=>res.json(e))
    .catch(err=>res.json(err))
});