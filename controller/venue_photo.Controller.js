const {op} = require('sequelize');
const { validateVenuePhoto } = require('../validation/Venue_photoValidation');
const { Venue_photo, Venue } = require('../models');


exports.createVenuePhotos = async (req, res) => {
    const {error} = validateVenuePhoto(req.body);
    if (error)  return res.status(400).send( error.details[0].message); 

    try {
        const venuePhoto = await Venue_photo.create(req.body);
        res.status(201).send(venuePhoto);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}


exports.getVenuePhotos = async (req, res) => {
    try{
        const venuePhotos = await Venue_photo.findAll();

        res.status(200).send(venuePhotos);
    }catch(error){
        res.status(500).send(error.message);
    }
}


exports.getVenuePhotosById = async (req, res) => {
    try{
        const venuePhoto = await Venue_photo.findByPk(req.params.id, {
            include: [
                { model: Venue, as: 'venue' }
            ]
        });

        if(!venuePhoto) return res.status(404).send("Venue Photos not found");
        res.status(200).send(venuePhoto);
    }catch(error){
        res.status(500).send(error.message);
    }
}


 

exports.updateVenuePhotos = async (req, res) => {
    const {error} = validateVenuePhoto(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    try{
        const venuePhoto = await Venue_photo.findByPk(req.params.id);
        if(!venuePhoto) return res.status(404).send("Venue Photos not found");
        await venuePhoto.update(req.body);

        res.status(200).send(venuePhoto);
    }catch(error){
        res.status(500).send(error.message);
    }
} 



exports.deleteVenuePhotos = async (req, res) => {
    try{
        const venuePhoto = await Venue_photo.findByPk(req.params.id);
        if(!venuePhoto) return res.status(404).send("Venue Photos not found");

        const venuePhotosData = venuePhoto.toJSON();

        await venuePhoto.destroy();
        res.status(200).send(venuePhotosData);
    }catch(error){
        res.status(500).send(error.message);
    }
}
