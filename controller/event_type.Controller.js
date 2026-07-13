const {op} = require('sequelize');
const { validateEventType } = require('../validation/Event_typeValidation');
const { Event_type, event,  } = require('../models');


exports.createEventType = async (req, res) => {
    const {error} = validateEventType(req.body);
    if (error)  return res.status(400).send( error.details[0].message); 

    try {
        const eventType = await Event_type.create(req.body);
        res.status(201).send(eventType);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
} 


exports.getEventTypes = async (req, res) => {
    try{
        const eventTypes = await Event_type.findAll();

        res.status(200).send(eventTypes);
    }catch(error){
        res.status(500).send(error.message);
    }
}



exports.getEventTypeById = async (req, res) => {
    try{
        const eventType = await Event_type.findByPk(req.params.id,{
            include: [
                { model: Event_type, as: 'parent_event_type' },
            ]
        });

        if(!eventType) return res.status(404).send("Event Type not found");
        res.status(200).send(eventType);
    }catch(error){
        res.status(500).send(error.message);
    }
} 


exports.updateEventType = async (req, res) => {
    const {error} = validateEventType(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    try{
        const eventType = await Event_type.findByPk(req.params.id);
        if(!eventType) return res.status(404).send("Event Type not found");
        await eventType.update(req.body);

        res.status(200).send(eventType);
    }catch(error){
        res.status(500).send(error.message);
    }
} 



exports.deleteEventType = async (req, res) => {
    try{
        const eventType = await Event_type.findByPk(req.params.id);
        if(!eventType) return res.status(404).send("Event Type not found");

        const eventTypeData = eventType.toJSON();

        await eventType.destroy();
        res.status(200).send(eventTypeData);
    }catch(error){
        res.status(500).send(error.message);
    }
}