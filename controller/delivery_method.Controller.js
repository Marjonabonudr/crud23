const {op} = require('sequelize');
const { validateDeliveryMethod } = require('../validation/Delivery_methodValidation');
const { Delivery_method, booking } = require('../models');


exports.createDeliveryMethod = async (req, res) => {
    const {error} = validateDeliveryMethod(req.body);
    if (error)  return res.status(400).send( error.details[0].message); 

    try {
        const deliveryMethod = await Delivery_method.create(req.body);
        res.status(201).send(deliveryMethod);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}


exports.getDeliveryMethods = async (req, res) => {
    try{
        const deliveryMethods = await Delivery_method.findAll();

        res.status(200).send(deliveryMethods);
    }catch(error){
        res.status(500).send(error.message);
    }
}


exports.getDeliveryMethodById = async (req, res) => {
    try{
        const deliveryMethod = await Delivery_method.findByPk(req.params.id);

        if(!deliveryMethod) return res.status(404).send("Delivery Method not found");
        res.status(200).send(deliveryMethod);
    }catch(error){
        res.status(500).send(error.message);
    }
}



exports.updateDeliveryMethod = async (req, res) => {
    const {error} = validateDeliveryMethod(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    try{
        const deliveryMethod = await Delivery_method.findByPk(req.params.id);
        if(!deliveryMethod) return res.status(404).send("Delivery Method not found");
        await deliveryMethod.update(req.body);

        res.status(200).send(deliveryMethod);
    }catch(error){
        res.status(500).send(error.message);
    }
} 




exports.deleteDeliveryMethod = async (req, res) => {
    try{
        const deliveryMethod = await Delivery_method.findByPk(req.params.id);
        if(!deliveryMethod) return res.status(404).send("Delivery Method not found");

        const deliveryMethodData = deliveryMethod.toJSON();

        await deliveryMethod.destroy();
        res.status(200).send(deliveryMethodData);
    }catch(error){
        res.status(500).send(error.message);
    }
}   
