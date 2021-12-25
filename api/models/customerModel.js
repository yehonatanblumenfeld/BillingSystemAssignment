const mongoose = require('mongoose');

const customerTemplate = new mongoose.Schema({
 
    customer_id:{
        type:String,
        required:true,                
    },
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Customers', customerTemplate);