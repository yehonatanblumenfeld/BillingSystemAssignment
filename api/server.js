const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const transactionRoute = require('./routes/transactionRoute');
const customerRoute = require('./routes//customerRoute');
const transactionModel = require('./models/transactionModel')
const customerTemplateCopy = require('./models/customerModel')

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, ()=> console.log("database connected"));

app.use(express.json())
app.use(cors());
app.listen(9000 , ()=> console.log("server is up and running"));

app.post('/addCustomer', (request , response) =>{
    
    const customer = new customerTemplateCopy({
        customer_id:request.body.customer_id,
        first_name:request.body.first_name,
        last_name:request.body.last_name,
        email:request.body.email,
        gender:request.body.gender,
        country:request.body.country
});
customer.save()
.then(data=>{
   response.json(data)
})
.catch(error=>{
   response.json(error)
});  
}); 



app.use('/transactions', transactionRoute);
app.use('/customers', customerRoute);


