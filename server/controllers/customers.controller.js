var customerService = require('../services/customer.service');

exports.addCustomer = async (req, res) => {
    try {
        var cust = await customerService.addCustomer(req);
        cust.save()
            .then(data => {
                res.json(data)
            })

    } catch (error) {
        res.json(error)
    };
}
exports.getCustomers = async (req, res) => {
    try {
        var customers = await customerService.getCustomers({})
        return res.send(customers);

    } catch (error) {
        res.send(error)
    };
}
exports.getCustomerById = async (req, res) => {
    var id = req.params.id;
    try {
        var cust = await customerService.getCustomerById(id)
        return res.send(cust)
    } catch (error) {
        res.send(error)
    }
}
exports.updateCustomer = async (req, res) => {
    const id = req.params.id.toString();
    try {
        var cust = await customerService.updateCustomer(id, req)
        cust.save();
        res.send("update");
    } catch (error) {
        res.json(error)
    }
}
exports.deleteCustomer =  (req, res) => {
    const id = req.params.id;
    try {
        customerService.deleteCustomer(id)  
        res.send('deleted');
        
    } catch (error) {
        res.json(error)
    }
};
