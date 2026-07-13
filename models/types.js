
module.exports = (sequelize, DataTypes) => {
    const Types = sequelize.define('types', {
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


    Types.associate = (models) => {
        Types.hasMany(models.venue, {
            foreignKey: 'type_id',
            as: 'venue_type'
        });
    }
    
    return Types;
}