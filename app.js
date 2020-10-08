// requires
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// set up 
const port = process.env.port || 3000;
const app = express();   

// connect db 
// const dbConn = 

// confirm server working
app.listen(port, () => {
    console.log(`Blog express app listening on port ${port}`);
}); 