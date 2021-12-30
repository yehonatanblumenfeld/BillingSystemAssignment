var customer = require('../models/customerModel');

exports.getCustomers = async (query) => {
    try {
        var customers = await customer.find(query)
        return customers;

    } catch (error) {
        throw Error('error while getting customers list')
    };
}

exports.addCustomer = async (req) => {
    try {
        var cust = new customer({
            customer_id: req.body.customer_id,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            gender: req.body.gender,
            country: req.body.country
        });
        return cust;

    } catch (error) {
        throw Error('error while creating new customer')
    };
}
exports.getCustomerById = async (id) => {
    try {

        var cust = await customer.findById(id)
        return cust;

    } catch (error) {
        throw Error('error while getting customer by id')
    }
}
exports.updateCustomer = async (id, req) => {
    try {
        var cust = await customer.findById(id)
        cust.customer_id = req.body.customer_id
        cust.first_name = req.body.first_name
        cust.last_name = req.body.last_name
        cust.email = req.body.email
        cust.gender = req.body.gender
        cust.country = req.body.country
        return cust;

    } catch (error) {
        throw Error('error while updating customer')
    }
}
exports.deleteCustomer = (id) => {
    try {   
        customer.findByIdAndRemove(id)
        .exec();
    } catch (error) {
        throw Error('error while deleting customer')
    }

};

