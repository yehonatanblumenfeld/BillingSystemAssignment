const express = require('express');
const router = express.Router();
const transactionTemplateCopy = require('../models/transactionModel');


router.post('/addTransaction', (request, response) => {

    const transaction = new transactionTemplateCopy({
        customer_id: request.body.customer_id,
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        email: request.body.email,
        gender: request.body.gender,
        country: request.body.country,
        city: request.body.city,
        street: request.body.street,
        phone: request.body.phone,
        total_price: request.body.total_price,
        currency: request.body.currency,
        cerdit_card_type: request.body.cerdit_card_type,
        cerdit_card_number: request.body.cerdit_card_number
    });

    transaction.save()
        .then(data => {
            response.json(data)
        })
        .catch(error => {
            response.json(error)
        });
});

router.get('/getTransactions', (req, res) => {
    transactionTemplateCopy.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result)
    });
});

router.get('/getTransactionById/:id', (req, res) => {
    const id = req.params.id.toString();
    transactionTemplateCopy.findById(id, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result)
    });
});

router.put('/updateTransaction/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await transactionTemplateCopy.findById(id, (err,transaction) => {
            transaction.customer_id= req.body.customer_id
            transaction.first_name= req.body.first_name
            transaction.last_name= req.body.last_name
            transaction.email= req.body.email
            transaction.gender= req.body.gender
            transaction.country= req.body.country
            transaction.city= req.body.city
            transaction.street= req.body.street
            transaction.phone= req.body.phone
            transaction.total_price= req.body.total_price
            transaction.currency= req.body.currency
            transaction.cerdit_card_type= req.body.cerdit_card_type
            transaction.cerdit_card_number= req.body.cerdit_card_number    
            transaction.save();
            res.send("update");
        })      
    } catch (err) {
        console.log(err);
    }
});

router.delete('/deleteTransaction/:id', (req, res) => {
    const id = req.params.id;
    transactionTemplateCopy.findByIdAndRemove(id).exec();
    res.send('deleted');
});

module.exports = router;