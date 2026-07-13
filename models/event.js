
module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('event', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        start_time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        finish_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        finish_time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        info: {
            type: DataTypes.STRING,
            allowNull: false
        },
        event_type_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        human_category_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
         venue_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        lang_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        release_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
    });

    Event.associate = (models) => {
        Event.belongsTo(models.event_type, {
            foreignKey: 'event_type_id',
            as: 'event_type'
        });
        Event.belongsTo(models.human_category, {
            foreignKey: 'human_category_id',
            as: 'human_category'
        });
        Event.belongsTo(models.venue, {
            foreignKey: 'venue_id',
            as: 'venue'
        });
        Event.belongsTo(models.lang, {
            foreignKey: 'lang_id',
            as: 'lang'
        });
        Event.hasMany(models.ticket, {
            foreignKey: 'event_id',
            as: 'ticket'
        });
    }

    return Event;

}