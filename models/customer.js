module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('customer', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hashed_password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        birth_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lang_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        hashed_refresh_token: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    Customer.associate = (models) => {
        Customer.hasMany(models.cart, {
            foreignKey: 'customer_id',
            as: 'cart'
        });
        Customer.hasMany(models.customer_address, {
            foreignKey: 'customer_id',
            as: 'customer_address'
        });
        Customer.hasMany(models.customer_card, {
            foreignKey: 'customer_id',
            as: 'customer_card'
        });
    }


    return Customer;
}