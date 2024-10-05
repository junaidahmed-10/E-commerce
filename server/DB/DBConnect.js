// This file is created for learnng purpose only



const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({
    path: "../.env"
})

const DBConnect = () => {
    mongoose.connect(process.env.MONGODB_URI)

        .then(() => console.log("MongoDB connected"))
        .catch((error) => console.log("ERROR: ", error))
}

export default DBConnect