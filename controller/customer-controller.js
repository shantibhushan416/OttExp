import Customer from "../model/customerSchema.js";
import _ from "lodash";

export const postCustomers = async (req, res) => {
    try {
        let customer = await Customer.findOne({ email: req.body.email });
        if (customer) return res.status(400).send('Cutomer Already exists');

        customer = new Customer(_.pick(req.body, ["name", "email", "isGold"]));

        customer.save();
        res.status(200).send(customer);


    } catch (error) {
        res.status(500).send("Something went wrong");
    }
};


export const getCustomerById = async (req, res) => {
    const customer = await Customer.findById(req.params.id);
    res.status(200).send(customer);

};

export const updateCustomerById = async (req, res) => {
    const customer = await Customer.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name } });
    await customer.save();
    res.status(200).send(customer);
};