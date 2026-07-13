module.exports = (sequelize, DataTypes) => {
    const Seat = sequelize.define('seat', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        sector: {
            type: DataTypes.STRING,
            allowNull: false
        },
        row_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        venue_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        seat_type_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        location_in_schema: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Seat.associate = (models) => {
        Seat.belongsTo(models.venue, {
            foreignKey: 'venue_id',
            as: 'venue'
        });
        Seat.belongsTo(models.seat_type, {
            foreignKey: 'seat_type_id',
            as: 'seat_type'
        });
        Seat.hasMany(models.venue_photo, {
            as: 'ticket'
        });
    }   


    return Seat;
}