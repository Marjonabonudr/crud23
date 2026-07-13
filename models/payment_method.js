module.exports = (sequelize, DataTypes) => {
    const Payment_method = sequelize.define('payment_method', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    Payment_method.associate = (models) => {
        Payment_method.hasMany(models.booking, {
            foreignKey: 'payment_method_id',
            as: 'booking'
        });
    }

    return Payment_method;
}