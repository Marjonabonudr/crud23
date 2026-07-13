
module.exports = (sequelize, DataTypes) => {
    const Venue = sequelize.define('venue', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        site: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        schema: {
            type: DataTypes.STRING,
            allowNull: false
        },
        regionId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        districtId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
    });



    Venue.associate = (models) => {
        Venue.belongsTo(models.region, {
            foreignKey: 'region_id',
            as: 'region'
        });
        Venue.belongsTo(models.district, {
            foreignKey: 'district_id',
            as: 'district'
        });
        Venue.hasMany(models.event, {
            foreignKey: 'venue_id',
            as: 'event'
        });
        Venue.hasMany(models.seat, {
            foreignKey: 'venue_id',
            as: 'seat'
        });
        Venue.hasMany(models.venue_types, {
            foreignKey: 'venue_id',
            as: 'venue_type'
        });
        Venue.hasMany(models.venue_photo, {
            foreignKey: 'venue_id',
            as: 'venue_photo'
        });

    }
    
    return Venue;
}