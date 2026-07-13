const {op} = require('sequelize');
const { validateDistrict } = require('../validation/districtValidation');
const { District, Region } = require('../models');


exports.createDistrict = async (req, res) => {
    const {error} = validateDistrict(req.body);
    if (error)  return res.status(400).send( error.details[0].message); 

    try {
        const newdistrict = await District.create(req.body);
        res.status(201).send( newdistrict);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}

exports.getDistricts = async (req, res) => {
    try{
        const districts = await District.findAll();

        res.status(200).send(districts);
    }catch(error){
        res.status(500).send(error.message);
    }
}

exports.getDistrictById = async (req, res) => {
    try{
        const districtt = await District.findByPk(req.params.id,{
            include: [
                { model: Region, as: 'region' },
            ]
        });

        if(!districtt) return res.status(404).send("District not found");
        res.status(200).send(districtt);
    }catch(error){
        res.status(500).send(error.message);
    }
}



exports.updateDistrict = async (req, res) => {
    const {error} = validateDistrict(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    try{
        const districtt = await District.findByPk(req.params.id);
        if(!districtt) return res.status(404).send("District not found");
        await districtt.update(req.body);

        res.status(200).send(districtt);
    }catch(error){
        res.status(500).send(error.message);
    }
} 


exports.deleteDistrict = async (req, res) => {
    try{ 
        const district = await District.findByPk(req.params.id);
        if(!district) return res.status(404).send("District not found");

        const districtData = district.toJSON();

        await district.destroy();
        res.status(200).send(districtData);
    }catch(error){
        res.status(500).send(error.message);
    }
}