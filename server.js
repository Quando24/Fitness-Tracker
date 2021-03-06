const express = require('express');
//const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/basic');
const mongoose = require('mongoose')
const workoutsAPIRoutes = require('./routes/workouts')

mongoDBURI = "mongodb+srv://Quando:Qstaxx_24@cluster0.oeu54.mongodb.net/Fitness-Tracker?retryWrites=true&w=majority"

mongoose.connect(
  mongoDBURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);



// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3000;
console.log(process.env.PORT)

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
//app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use('/api/workouts', workoutsAPIRoutes)

// Start the server on the port
console.log("Starting server")
app.listen(process.env.PORT, () => console.log(`Listening on PORT: ${PORT}`));