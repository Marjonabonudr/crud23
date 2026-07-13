module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define('admin', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hashed_password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        is_creator: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        hashed_refresh_token: {
            type: DataTypes.STRING,
            allowNull: true
        },
    });


    return Admin;
}