module.exports = (sequelize, DataTypes) => {
    const Region = sequelize.define('region', {
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

    Region.associate = (models) => {
        Region.hasMany(models.district, { 
            foreignKey: 'region_id',
            as: 'district'
        });
    }

    return Region;
}