const mongoose = require('mongoose');

const transactionTemplate = new mongoose.Schema({
 
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
    },
    city:{
        type:String,
        required:true
    },
    street:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    total_price:{
        type:Number,
        required:true
    },
    currency:{
        type:String,
        required:true
    },
    cerdit_card_type:{
        type:String,
        required:true
    },
    cerdit_card_number:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Transactions', transactionTemplate);