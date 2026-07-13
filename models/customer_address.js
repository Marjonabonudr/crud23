module.exports = (sequelize, DataTypes) => {
    const Customer_address = sequelize.define('customer_address', {
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
        region_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        district_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false
        },
        house: {
            type: DataTypes.STRING,
            allowNull: false
        },
        flat: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        post_index: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        info: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    Customer_address.associate = (models) => {
        Customer_address.belongsTo(models.customer, {
            foreignKey: 'customer_id',
            as: 'customer'
        });
    }

    return Customer_address;
}