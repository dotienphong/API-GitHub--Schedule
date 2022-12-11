const cors = require('cors')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 3000;

const url = "mongodb+srv://dotienphong1993:Phong186@cluster0.ocjhu.mongodb.net/Schedule?retryWrites=true&w=majority"
const taskRoutes = require('./routes/taskRoutes')

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Backend for Schedule App')
})

app.use(cors())
app.use(taskRoutes)

const connectToMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || url, { useUnifiedTopology: true, useNewUrlParser: true })
            .then(() => {
                console.log('Connected to database')
                app.listen(port, () => {
                    console.log("App is running on port " + port);
                });
            })
    } catch (error) {
        console.log('error connection to MongoDB:', error.message);
    }
};
connectToMongo()