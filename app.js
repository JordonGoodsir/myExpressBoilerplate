// requires
const express = require('express');
const mongoose = require('mongoose'); 
const indexRouter =  require(`./routes/index_routes`); 

// set up 
const port = process.env.port || 3000;
const app = express();   

// const dbConnIndex = 'mongodb://localhost/indexing'  

// connects to mongodb and gets rid of warnings

// mongoose.connect(dbConnIndex, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// },
// (err) => {
//     if (err) {
//         console.log('Error connecting to database', err);
//     } else {
//         console.log('Connected to database!');
//     }
// });  


// middleware to access secondary routes file
app.use('/index', indexRouter);

// confirm server working
app.listen(port, () => {
    console.log(`Blog express app listening on port ${port}`);
}); 