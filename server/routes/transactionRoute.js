const express = require('express');
const router = express.Router();
const transactionTemplateCopy = require('../models/transactionModel');
const transactionController = require('../controllers/transaction.controller')


router.post('/addTransaction',transactionController.addTransaction);

router.get('/getTransactions',transactionController.getTransactions);

router.get('/getTransactionById/:id',transactionController.getTransactionById);

router.put('/updateTransaction/:id', transactionController.updateTransaction);

router.delete('/deleteTransaction/:id',transactionController.deleteTransaction);

module.exports = router;