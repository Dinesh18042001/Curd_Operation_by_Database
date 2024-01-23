const express = require('express');
const mytype = require('../backend/Schima/schima');
const app = express()
const cors = require("cors")
const PORT = 8000;
require("../backend/Database/connection")  
require ("../backend/Schima/schima")

app.use(express.json());
app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get("/getalldata", async (req, res) => {
  const alldata = await mytype.find();
  res.json(alldata);
  console.log(alldata);
});

app.get("/updateuser/:id", async (req, res) => {
  const {id} = req.params;
  const alldata = await mytype.findById({_id:id});
  res.json(alldata);
  console.log(alldata);
});

app.delete("/deleterecord/:id",async(req,res)=>{
  const {id} = req.params;
  const a = await mytype.findByIdAndDelete({_id:id});
  console.log(a);
  res.status(201).json(a);
});


app.patch("/updateuser/:id",async(req,res)=>{
  const {id} = req.params;
  const recordupdate = await mytype.findByIdAndUpdate(id,req.body,{new:true});
  console.log(recordupdate);
  res.status(201).json(recordupdate);
});

//APIs
app.post("/register",async(req,res)=>{
    const{name,email,city,phone,dob,pass} = req.body;
    const adduser = new mytype({
        name,email,city,phone,dob,pass 
    })
    await adduser.save();
    res.status(200).json(adduser);
    console.log(adduser)
})

app.listen(PORT, () =>console.log(`Srever Started on PORT ${PORT}`))