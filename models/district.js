module.exports = (sequelize, DataTypes) => {
    const District = sequelize.define('district', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        region_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    District.associate = (models) => {
        District.hasMany(models.venue, {
            foreignKey: 'district_id',
            as: 'venue'
        });
        District.belongsTo(models.region, {
            foreignKey: 'region_id',
            as: 'region'
        });
    }
    return District;
}