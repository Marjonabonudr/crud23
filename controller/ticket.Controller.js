const {op} = require('sequelize');
const { validateTicket } = require('../validation/ticketValidation');
const { Ticket, Event, Seat, Ticket_status } = require('../models');



exports.createTicket = async (req, res) => {
    const {error} = validateTicket(req.body);
    if (error)  return res.status(400).send( error.details[0].message); 

    try {
        const ticket = await Ticket.create(req.body);
        res.status(201).send(ticket);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}



exports.getTickets = async (req, res) => {
    try{
        const tickets = await Ticket.findAll();

        res.status(200).send(tickets);
    }catch(error){
        res.status(500).send(error.message);
    }
}


exports.getTicketById = async (req, res) => {
    try{
        const ticket = await Ticket.findByPk(req.params.id,{
            include: [
                { model: Event, as: 'event' },
                { model: Seat, as: 'seat' },
                { model: Ticket_status, as: 'ticket_status' },
            ]
        });

        if(!ticket) return res.status(404).send("Ticket not found");
        res.status(200).send(ticket);
    }catch(error){
        res.status(500).send(error.message);
    }
}



exports.updateTicket = async (req, res) => {
    const {error} = validateTicket(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    try{
        const ticket = await Ticket.findByPk(req.params.id);
        if(!ticket) return res.status(404).send("Ticket not found");
        await ticket.update(req.body);

        res.status(200).send(ticket);
    }catch(error){
        res.status(500).send(error.message);
    }
} 


exports.deleteTicket = async (req, res) => {
    try{
        const ticket = await Ticket.findByPk(req.params.id);
        if(!ticket) return res.status(404).send("Ticket not found");

        const ticketData = ticket.toJSON();

        await ticket.destroy();
        res.status(200).send(ticketData);
    }catch(error){
        res.status(500).send(error.message);
    }
}