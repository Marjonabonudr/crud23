const {op} = require('sequelize');
const { validateTypes } = require('../validation/typesValidation');
const { Types } = require('../models');


exports.createTypes = async (req, res) => {
    const {error} = validateTypes(req.body);
    if (error)  return res.status(400).send( error.details[0].message); 

    try {
        const type = await Types.create(req.body);
        res.status(201).send(type);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
} 


exports.getTypes = async (req, res) => {
    try{
        const types = await Types.findAll();

        res.status(200).send(types);
    }catch(error){
        res.status(500).send(error.message);
    }
}



exports.getTypeById = async (req, res) => {
    try{
        const type = await Types.findByPk(req.params.id);

        if(!type) return res.status(404).send("Type not found");
        res.status(200).send(type);
    }catch(error){
        res.status(500).send(error.message);
    }
} 



exports.updateType = async (req, res) => {
    const {error} = validateTypes(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    try{
        const type = await Types.findByPk(req.params.id);
        if(!type) return res.status(404).send("Type not found");
        await type.update(req.body);

        res.status(200).send(type);
    }catch(error){
        res.status(500).send(error.message);
    }
} 




exports.deleteType = async (req, res) => {
    try{
        const type = await Types.findByPk(req.params.id);
        if(!type) return res.status(404).send("Type not found");

        const typeData = type.toJSON();

        await type.destroy();
        res.status(200).send(typeData);
    }catch(error){
        res.status(500).send(error.message);
    }
}