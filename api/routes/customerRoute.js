const express = require('express');
const router = express.Router();
const customerTemplateCopy = require('../models/customerModel');


router.post('/addCustomer', (request , response) =>{
    
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

router.get('/getCustomers',  (req , res) =>{
    customerTemplateCopy.find({} , (err , result )=>{
       if(err){
           res.send(err);
       }
       res.send(result)
   });        
});
router.get('/getCustomerById/:id', (req, res) => {
    const id = req.params.id;
    customerTemplateCopy.findById(id, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result)
    });
});

router.put('/updateCustomer/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await customerTemplateCopy.findById(id, (err,customer) => {
            customer.customer_id= req.body.customer_id
            customer.first_name= req.body.first_name
            customer.last_name= req.body.last_name
            customer.email= req.body.email
            customer.gender= req.body.gender
            customer.country= req.body.country
    
            customer.save();
            res.send("update");
        })      
    } catch (err) {
        console.log(err);
    }
});


router.delete('/deleteCustomer/:id',  (req , res) =>{  
    const id = req.params.id;  
    customerTemplateCopy.findByIdAndRemove(id).exec();
    res.send('deleted');
});




module.exports = router;
     
