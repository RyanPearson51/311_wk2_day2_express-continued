const express = require("express");
const app = express();
app.use(express.json());

app.use(express.static('./public'));

let commentsRoutes = require('./routes/comments');
app.use(commentsRoutes);

let vehiclesRoutes = require('./routes/vehicles');
app.use(vehiclesRoutes);

let contactsRoutes = require('./routes/contacts');
app.use(contactsRoutes);

let productsRoutes = require('./routes/products');
app.use(productsRoutes);

const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
