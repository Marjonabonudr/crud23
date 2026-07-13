module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define('booking', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cart_id: {
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
        payment_method_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        delivery_method_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        discount_coupon_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: false
            
       }
    });
    Booking.associate = (models) => {
        Booking.belongsTo(models.cart, {
            foreignKey: 'cart_id',
            as: 'cart'
        });
        Booking.belongsTo(models.payment_method, {
            foreignKey: 'payment_method_id',
            as: 'payment_method'
        });
        Booking.belongsTo(models.delivery_method, {
            foreignKey: 'delivery_method_id',
            as: 'delivery_method'
        });
    }

    return Booking;
}