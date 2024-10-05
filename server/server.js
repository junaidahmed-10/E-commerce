const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
// const { default: DBConnect } = require('./DB/DBConnect');
// const DBConnect = require(DBConnect)

// DBConnect()

dotenv.config({
    path: ".env"
})

const app = express();
const PORT = 5000;


mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("MONGODB Connected"))
.catch((error) => console.log("Error: ", error))

app.use(
    cors({
        origin: 'http://localhost:5173/',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Expires",
            "Cache-Control",
            "Pragma"
        ],
        credentials : true
    })
)

app.use(cookieParser())
app.use(express.json())

app.listen(process.env.PORT, () => {
    console.log(`server running on PORT: ${PORT}`);
    
})