module.exports = (sequelize, DataTypes) => {
    const Event_type = sequelize.define('event_type', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        parent_event_type_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }

    });

    Event_type.associate = (models) => {
        Event_type.belongsTo(models.event_type, {
            foreignKey: 'parent_event_type_id',
            as: 'parent_event_type'
        });
        Event_type.hasMany(models.event, {
            foreignKey: 'event_type_id',
            as: 'events'
        });
        Event_type.hasMany(models.event_type, {
            foreignKey: 'parent_event_type_id',
            as: 'event_types'
        });
    };

    return Event_type;

}