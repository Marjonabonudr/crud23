const {op} = require('sequelize');
const { validateCustomerCard } = require('../validation/customer_cardValidation');
const { Customer_card, Customer } = require('../models');


exports.createCustomerCard = async (req, res) => {
    const {error} = validateCustomerCard(req.body);
    if (error)  return res.status(400).send( error.details[0].message); 

    try {
        const customerCard = await Customer_card.create(req.body);
        res.status(201).send(customerCard);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
} 


exports.getCustomerCards = async (req, res) => {
    try{
        const customerCards = await Customer_card.findAll();

        res.status(200).send(customerCards);
    }catch(error){
        res.status(500).send(error.message);
    }
}

exports.getCustomerCardById = async (req, res) => {
    try{
        const customerCard = await Customer_card.findByPk(req.params.id,{
            include: [
                { model: Customer, as: 'customer' },
            ]
        });

        if(!customerCard) return res.status(404).send("Customer Card not found");
        res.status(200).send(customerCard);
    }catch(error){
        res.status(500).send(error.message);
    }
} 


exports.updateCustomerCard = async (req, res) => {
    const {error} = validateCustomerCard(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    try{
        const customerCard = await Customer_card.findByPk(req.params.id);
        if(!customerCard) return res.status(404).send("Customer Card not found");
        await customerCard.update(req.body);

        res.status(200).send(customerCard);
    }catch(error){
        res.status(500).send(error.message);
    }
} 



exports.deleteCustomerCard = async (req, res) => {
    try{
        const customerCard = await Customer_card.findByPk(req.params.id);
        if(!customerCard) return res.status(404).send("Customer Card not found");

        const customerCardData = customerCard.toJSON();

        await customerCard.destroy();
        res.status(200).send(customerCardData);
    }catch(error){
        res.status(500).send(error.message);
    }
}

exports.searchCustomerCard = async (req, res) => {
    try{
        const customerCard = await Customer_card.findAll({
            where: {
                [Op.or]: [
                    {name: {[Op.like]: `%${req.query.name}%`}},
                    {phone: {[Op.like]: `%${req.query.phone}%`}},
                    {number: {[Op.like]: `%${req.query.number}%`}},
                ]
            }
        });

        res.status(200).send(customerCard);
    }catch(error){
        res.status(500).send(error.message);
    }
}