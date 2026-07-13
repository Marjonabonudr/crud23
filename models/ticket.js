module.exports = (sequelize, DataTypes) => {
    const Ticket = sequelize.define('ticket', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        event_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        seat_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        service_fee: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ticket_type: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Ticket.associate = (models) => {
        Ticket.belongsTo(models.event, {
            foreignKey: 'event_id',
            as: 'event'
        });
        Ticket.belongsTo(models.seat, {
            foreignKey: 'seat_id',
            as: 'seat'
        });
        Ticket.belongsTo(models.ticket_status, {
            foreignKey: 'status_id',
            as: 'ticket_status'
        });
        Ticket.hasMany(models.cart_item, {
            foreignKey: 'ticket_id',
            as: 'cart_items'
        });

    }
    return Ticket;

};
