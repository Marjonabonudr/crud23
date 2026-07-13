const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const sequelize = require('./config/database');
const setupSwagger = require('./swagger/swagger');

const Types = require('./routes/types.Route');
const Venues = require('./routes/venue.Route');
const Venue_types = require('./routes/venue_types.Route');
const Venue_photos = require('./routes/venue_photo.Route');
const Region = require('./routes/region.Route');
const District = require('./routes/district.Route');
const Seat = require('./routes/seat.Route');
const Seat_type = require('./routes/seat_type.Route');
const Event = require('./routes/event.Route');
const Lang = require('./routes/lang.Route');
const Human_category = require('./routes/human_category.Route');
const Event_type = require('./routes/event_type.Route');
const Ticket = require('./routes/ticket.Route');
const Ticket_status = require('./routes/ticket_status.Route');
const Customer = require('./routes/customer.Route');
const Customer_address = require('./routes/customer_address.Route');
const Customer_card = require('./routes/customer_card.Route');
const Cart = require('./routes/cart.Route');
const Cart_item = require('./routes/cart_item.Route');
const Booking = require('./routes/booking.Route');
const Payment_method = require('./routes/payment_method.Route');
const Delivery_method = require('./routes/delivery_method.Route');
const Admin = require('./routes/admin.Route');


dotenv.config();

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: "*"
    })
);

app.use('/api', Types);
app.use('/api', Venues);
app.use('/api', Venue_types);
app.use('/api', Venue_photos);
app.use('/api', Region);
app.use('/api', District);
app.use('/api', Seat);
app.use('/api', Seat_type);
app.use('/api', Event);
app.use('/api', Lang);
app.use('/api', Human_category);
app.use('/api', Event_type);
app.use('/api', Ticket);
app.use('/api', Ticket_status);
app.use('/api', Customer);
app.use('/api', Customer_address);
app.use('/api', Customer_card);
app.use('/api', Cart);
app.use('/api', Cart_item);
app.use('/api', Booking);
app.use('/api', Payment_method);
app.use('/api', Delivery_method);
app.use('/api', Admin);


setupSwagger(app);


const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})

    .catch((err) => console.error(" DB xatosi", err));

