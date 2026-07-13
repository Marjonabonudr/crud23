const {op} = require('sequelize');
const { validateHumanCategory } = require('../validation/Human_categoryValidation');
const { Human_category, event } = require('../models');


exports.createHumanCategory = async (req, res) => {
    const {error} = validateHumanCategory(req.body);
    if (error)  return res.status(400).send( error.details[0].message); 

    try {
        const humanCategory = await Human_category.create(req.body);
        res.status(201).send(humanCategory);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
} 


exports.getHumanCategories = async (req, res) => {
    try{
        const humanCategories = await Human_category.findAll();

        res.status(200).send(humanCategories);
    }catch(error){
        res.status(500).send(error.message);
    }
}


exports.getHumanCategoryById = async (req, res) => {
    try{
        const humanCategory = await Human_category.findByPk(req.params.id);

        if(!humanCategory) return res.status(404).send("Human Category not found");
        res.status(200).send(humanCategory);
    }catch(error){
        res.status(500).send(error.message);
    }
}



exports.updateHumanCategory = async (req, res) => {
    const {error} = validateHumanCategory(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    try{
        const humanCategory = await Human_category.findByPk(req.params.id);
        if(!humanCategory) return res.status(404).send("Human Category not found");
        await humanCategory.update(req.body);

        res.status(200).send(humanCategory);
    }catch(error){
        res.status(500).send(error.message);
    }
} 


exports.deleteHumanCategory = async (req, res) => {
    try{
        const humanCategory = await Human_category.findByPk(req.params.id);
        if(!humanCategory) return res.status(404).send("Human Category not found");

        const humanCategoryData = humanCategory.toJSON();

        await humanCategory.destroy();
        res.status(200).send(humanCategoryData);
    }catch(error){
        res.status(500).send(error.message);
    }
}




exports.searchHumanCategories = async (req, res) => {
    try{
        console.log("Query received:", req.query.query);

        const {query} = req.query;
        if(!query) {
            return res.status(400).send("Search query is required");
        }

        const humanCategories = await Human_category.findAll({
            where: {
                [Op.or]: [
                    {name: {[Op.iLike]: `%${query}%`}},
                    {gender: {[Op.iLike]: `%${query}%`}},
                ],
            },
        });
        res.status(200).send(humanCategories);
    }catch(error){
        res.status(500).send(error.message);
    }
}