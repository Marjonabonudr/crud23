const {op} = require('sequelize');
const { validateTicketStatus } = require('../validation/ticket_statusValidation');
const { Ticket_status, ticket } = require('../models');


exports.createTicketStatus = async (req, res) => {
    const {error} = validateTicketStatus(req.body);
    if (error)  return res.status(400).send( error.details[0].message); 

    try {
        const ticketStatus = await Ticket_status.create(req.body);
        res.status(201).send(ticketStatus);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}



exports.getTicketStatuses = async (req, res) => {
    try{
        const ticketStatuses = await Ticket_status.findAll();

        res.status(200).send(ticketStatuses);
    }catch(error){
        res.status(500).send(error.message);
    }
}


exports.getTicketStatusById = async (req, res) => {
    try{
        const ticketStatus = await Ticket_status.findByPk(req.params.id);

        if(!ticketStatus) return res.status(404).send("Ticket Status not found");
        res.status(200).send(ticketStatus);
    }catch(error){
        res.status(500).send(error.message);
    }
}



exports.updateTicketStatus = async (req, res) => {
    const {error} = validateTicketStatus(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    try{
        const ticketStatus = await Ticket_status.findByPk(req.params.id);
        if(!ticketStatus) return res.status(404).send("Ticket Status not found");
        await ticketStatus.update(req.body);

        res.status(200).send(ticketStatus);
    }catch(error){
        res.status(500).send(error.message);
    }
} 


exports.deleteTicketStatus = async (req, res) => {
    try{
        const ticketStatus = await Ticket_status.findByPk(req.params.id);
        if(!ticketStatus) return res.status(404).send("Ticket Status not found");

        const ticketStatusData = ticketStatus.toJSON();

        await ticketStatus.destroy();
        res.status(200).send(ticketStatusData);
    }catch(error){
        res.status(500).send(error.message);
    }
}