module.exports = (sequelize, DataTypes) => {
    const Human_category = sequelize.define('human_category', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        start_age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        finish_age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });

    Human_category.associate = (models) => {
        Human_category.hasMany(models.event, {
            foreignKey: 'human_category_id',
            as: 'events'
        });
    }

    return Human_category;
}