const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const cors = require('cors');
app.use(cors());


const userController = require('./controllers/userController');
app.use(userController);

app.listen(4000, () => {
  console.log(`Listening on port 4000`);
});