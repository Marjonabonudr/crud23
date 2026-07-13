const sequelize = require('../config/database');
const Sequelize = require('sequelize');


const Types = require('./types')(sequelize, Sequelize.DataTypes);
const Venue = require('./venue')(sequelize, Sequelize.DataTypes);
const Venue_types = require('./venue_types')(sequelize, Sequelize.DataTypes);
const Venue_photo = require('./venue_photo')(sequelize, Sequelize.DataTypes);
const Region = require('./region')(sequelize, Sequelize.DataTypes);
const District = require('./district')(sequelize, Sequelize.DataTypes);
const Seat = require('./seat')(sequelize, Sequelize.DataTypes);
const Seat_type = require('./seat_type')(sequelize, Sequelize.DataTypes);
const Event = require('./event')(sequelize, Sequelize.DataTypes);
const Lang = require('./lang')(sequelize, Sequelize.DataTypes);
const Human_category = require('./human_category')(sequelize, Sequelize.DataTypes);
const Event_type = require('./event_type')(sequelize, Sequelize.DataTypes);
const Ticket = require('./ticket')(sequelize, Sequelize.DataTypes);
const Ticket_status = require('./ticket_status')(sequelize, Sequelize.DataTypes);
const Customer = require('./customer')(sequelize, Sequelize.DataTypes);
const Customer_address = require('./customer_address')(sequelize, Sequelize.DataTypes);
const Customer_card = require('./customer_card')(sequelize, Sequelize.DataTypes);
const Cart = require('./cart')(sequelize, Sequelize.DataTypes);
const Cart_item = require('./cart_item')(sequelize, Sequelize.DataTypes);
const Booking = require('./booking')(sequelize, Sequelize.DataTypes);
const Payment_method = require('./payment_method')(sequelize, Sequelize.DataTypes);
const Delivery_method = require('./delivery_method')(sequelize, Sequelize.DataTypes);
const Admin = require('./admin')(sequelize, Sequelize.DataTypes);



Types.associate(sequelize.models);
Venue.associate(sequelize.models);
Venue_types.associate(sequelize.models);
Venue_photo.associate(sequelize.models);
Region.associate(sequelize.models);
District.associate(sequelize.models);
Seat.associate(sequelize.models)
Seat_type.associate(sequelize.models);
Event.associate(sequelize.models);
Lang.associate(sequelize.models);
Human_category.associate(sequelize.models);
Event_type.associate(sequelize.models);
Ticket.associate(sequelize.models);
Ticket_status.associate(sequelize.models);
Customer.associate(sequelize.models);
Customer_address.associate(sequelize.models);
Customer_card.associate(sequelize.models);
Cart.associate(sequelize.models);
Cart_item.associate(sequelize.models);
Booking.associate(sequelize.models);
Payment_method.associate(sequelize.models);
Delivery_method.associate(sequelize.models);
// admin.associate(sequelize.models);



module.exports = {
    sequelize,
    Sequelize,
    Types,
    Venue,
    Venue_types,
    Venue_photo,
    Region,
    District,
    Seat,
    Seat_type,
    Event,
    Lang,
    Human_category,
    Event_type,
    Ticket,
    Ticket_status,
    Customer,
    Customer_address,
    Customer_card,
    Cart,
    Cart_item,
    Booking,
    Payment_method,
    Delivery_method,
    Admin
}