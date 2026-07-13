const {op} = require('sequelize');
const { validateCartItem } = require('../validation/cart_itemValidation');
const { Cart_item, Ticket, Cart } = require('../models');


exports.createCartItem = async (req, res) => {
    const {error} = validateCartItem(req.body);
    if (error)  return res.status(400).send( error.details[0].message); 

    try {
        const cartItem = await Cart_item.create(req.body);
        res.status(201).send(cartItem);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}

exports.getCartItems = async (req, res) => {
    try{
        const cartItems = await Cart_item.findAll();

        res.status(200).send(cartItems);
    }catch(error){
        res.status(500).send(error.message);
    }
}   

exports.getCartItemById = async (req, res) => {
    try{
        const cartItem = await Cart_item.findByPk(req.params.id,{
            include: [
                { model: Ticket, as: 'ticket' },
                { model: Cart, as: 'cart' },
            ]
        });

        if(!cartItem) return res.status(404).send("Cart Item not found");
        res.status(200).send(cartItem);
    }catch(error){
        res.status(500).send(error.message);
    }
}



exports.updateCartItem = async (req, res) => {
    const {error} = validateCartItem(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    try{
        const cartItem = await Cart_item.findByPk(req.params.id);
        if(!cartItem) return res.status(404).send("Cart Item not found");
        await cartItem.update(req.body);

        res.status(200).send(cartItem);
    }catch(error){
        res.status(500).send(error.message);
    }
} 



exports.deleteCartItem = async (req, res) => {
    try{
        const cartItem = await Cart_item.findByPk(req.params.id);
        if(!cartItem) return res.status(404).send("Cart Item not found");

        const cartItemData = cartItem.toJSON();

        await cartItem.destroy();
        res.status(200).send(cartItemData);
    }catch(error){
        res.status(500).send(error.message);
    }
}


