var transaction = require('../models/transactionModel');

exports.addTransaction = async (req) => {
    try {
        var tran = new transaction({
            customer_id: req.body.customer_id,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            gender: req.body.gender,
            country: req.body.country,
            city: req.body.city,
            street: req.body.street,
            phone: req.body.phone,
            total_price: req.body.total_price,
            currency: req.body.currency,
            cerdit_card_type: req.body.cerdit_card_type,
            cerdit_card_number: req.body.cerdit_card_number
        });
        return tran;

    } catch (error) {
        throw Error('error while creating new transaction')
    };
}
exports.getTransactions = async (query) => {
    try {
        var transactions = await transaction.find(query)
        return transactions;

    } catch (error) {
        throw Error('error while getting transactions list')
    };
}
exports.getTransactionById = async (id) => {
    try {

        var tran = await transaction.findById(id)
        return tran;

    } catch (error) {
        throw Error('error while getting transaction by id')
    }
}
exports.updateTransaction = async (id, req) => {
    try {
        var tran = await transaction.findById(id)
        tran.customer_id = req.body.customer_id
        tran.first_name = req.body.first_name
        tran.last_name = req.body.last_name
        tran.email = req.body.email
        tran.gender = req.body.gender
        tran.country = req.body.country
        tran.city = req.body.city
        tran.street = req.body.street
        tran.phone = req.body.phone
        tran.total_price = req.body.total_price
        tran.currency = req.body.currency
        tran.cerdit_card_type = req.body.cerdit_card_type
        tran.cerdit_card_number = req.body.cerdit_card_number
        return tran;

    } catch (error) {
        throw Error('error while updating transaction ')
    }
}
exports.deleteTransaction = (id) => {
    try {
        transaction.findByIdAndRemove(id)
            .exec();
    } catch (error) {
        throw Error('error while deleting transaction')
    }

};