module.exports = (sequelize, DataTypes) => {
    const Customer_card = sequelize.define('customer_card', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        month: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        is_main: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    });

    Customer_card.associate = (models) => {
        Customer_card.belongsTo(models.customer, {
            foreignKey: 'customer_id',
            as: 'customer'
        });
    }

    return Customer_card;
}