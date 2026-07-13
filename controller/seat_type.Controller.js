const { Op } = require('sequelize');
const { validateSeatType } = require('../validation/Seat_typeValidation');
const { district, region, venue, Seat_type, seat } = require('../models');


exports.createSeatType = async (req, res) => {
    const { error } = validateSeatType(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const seatType = await Seat_type.create(req.body);
        res.status(201).send(seatType);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.getSeatTypes = async (req, res) => {
    try {
        const seatTypes = await Seat_type.findAll();

        res.status(200).send(seatTypes);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.getSeatTypeById = async (req, res) => {
    try {
        const seatType = await Seat_type.findByPk(req.params.id);

        if (!seatType) return res.status(404).send("Seat Type not found");
        res.status(200).send(seatType);
    } catch (error) {
        res.status(500).send(error.message);
    }
}



exports.updateSeatType = async (req, res) => {
    const { error } = validateSeatType(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const seatType = await Seat_type.findByPk(req.params.id);
        if (!seatType) return res.status(404).send("Seat Type not found");
        await seatType.update(req.body);

        res.status(200).send(seatType);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.deleteSeatType = async (req, res) => {
    try {
        const seatType = await Seat_type.findByPk(req.params.id);
        if (!seatType) return res.status(404).send("Seat Type not found");

        const seatTypeData = seatType.toJSON();

        await seatType.destroy();
        res.status(200).send(seatTypeData);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
