module.exports = (sequelize, DataTypes) => {
    const Cart_item = sequelize.define('cart_item', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ticket_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cart_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    })

    Cart_item.associate = (models) => {
        Cart_item.belongsTo(models.ticket, {
            foreignKey: 'ticket_id',
            as: 'ticket'
        });
        Cart_item.belongsTo(models.cart, {
            foreignKey: 'cart_id',
            as: 'cart'
        });
    }
    return Cart_item;
}