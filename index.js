const express = require('express')
//const route =
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoose = require('mongoose');
mongoose.connect().then(() => console.log("mongodb connected")).catch((err) => console.log(err));

app.use('/', route);

app.listen(process.env.PORT || 3000, () => {
    console.log("express app running on port" + (process.env.PORT || 3000));
})
