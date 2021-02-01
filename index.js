const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const cors = require('cors');
app.use(cors());


const userController = require('./controllers/userController');
app.use(userController);

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
    console.log('Server Running');
})

// app.listen(4000, () => {
//   console.log(`Listening on port 4000`);
// });