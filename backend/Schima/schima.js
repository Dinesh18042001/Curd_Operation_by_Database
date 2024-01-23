const mongoose = require('mongoose')
const myschimapattern = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String
    },
    city:{
        type:String
    },
    phone:{
        type:String
    },
    dob:{
        type:String
    },
    pass:{
        type:String
    },

});

const mytype = new mongoose.model("users", myschimapattern);
module.exports = mytype