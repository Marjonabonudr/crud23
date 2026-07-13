const {op} = require('sequelize');
const { validateRegion } = require('../validation/regionValidation');
const { Region } = require('../models');



exports.createRegion = async (req, res) => {
    const {error} = validateRegion(req.body);
    if (error)  return res.status(400).send( error.details[0].message); 

    try {
        const newRegion = await Region.create(req.body);
        res.status(201).send(newRegion);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
} 



exports.getRegions = async (req, res) => {
    try{
        const regions = await Region.findAll();

        res.status(200).send(regions);
    }catch(error){
        res.status(500).send(error.message);
    }
}


exports.getRegionById = async (req, res) => {
    try{
        const regionData = await Region.findByPk(req.params.id);

        if(!regionData) return res.status(404).send("Region not found");
        res.status(200).send(regionData);
    }catch(error){
        res.status(500).send(error.message);
    }
}


exports.updateRegion = async (req, res) => {
    const {error} = validateRegion(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    try{
        const regionData = await Region.findByPk(req.params.id);
        if(!regionData) return res.status(404).send("Region not found");
        await regionData.update(req.body);

        res.status(200).send(regionData);
    }catch(error){
        res.status(500).send(error.message);
    }
} 


exports.deleteRegion = async (req, res) => {
    try{
        const regionData = await Region.findByPk(req.params.id);
        if(!regionData) return res.status(404).send("Region not found");

        const regionJSON = regionData.toJSON();

        await regionData.destroy();
        res.status(200).send(regionJSON);
    }catch(error){
        res.status(500).send(error.message);
    }
}
