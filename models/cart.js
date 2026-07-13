module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define('cart', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        finished_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: false
            
       }
    });
    Cart.associate = (models) => {
        Cart.belongsTo(models.customer, {
            foreignKey: 'customer_id',
            as: 'customer'
        });
        Cart.hasMany(models.booking, {
            foreignKey: 'cart_id',
            as: 'booking'
        });
        Cart.hasMany(models.cart_item, {
            foreignKey: 'cart_id',
            as: 'cart_item'
        });
    }
    return Cart;
}