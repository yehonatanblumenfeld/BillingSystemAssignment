var transactionService = require('../services/transactions.service');
const transactionTemplateCopy = require('../models/transactionModel');


exports.addTransaction = async (req, res) => {
    try {
        var tran = await transactionService.addTransaction(req);
        tran.save()
            .then(data => {
                res.json(data)
            })

    } catch (error) {
        res.json(error)
    };
}
exports.getTransactions = async (req, res) => {
    try {
        var transactions = await transactionService.getTransactions({})
        return res.send(transactions);

    } catch (error) {
        res.send(error)
    };
}
exports.getTransactionById = async (req, res) => {
    var id = req.params.id;
    try {
        var tran = await transactionService.getTransactionById(id)
        return res.send(tran)
    } catch (error) {
        res.send(error)
    }
}
exports.updateTransaction = async (req, res) => {
    const id = req.params.id;
    try {
        var tran = await transactionService.updateTransaction(id , req)
        tran.save();
        res.send("update");
             
    } catch (err) {
        console.log(err);
    }
}
exports.deleteTransaction =  (req, res) => {
    const id = req.params.id;
    try {
        transactionService.deleteTransaction(id)  
        res.send('deleted');
        
    } catch (error) {
        res.json(error)
    }
};
