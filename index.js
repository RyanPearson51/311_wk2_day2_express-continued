const express = require("express");
const app = express();
app.use(express.json());

app.use(express.static('./public'));

let commentsRoutes = require('./routes/comments');
app.use(commentsRoutes);

const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
