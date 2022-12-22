const paginate = require('./middlewares/pagination');
const userSchema = require('./models/user');
const connectDB = require('./config/dbConfig');

require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());

const users = [
    { "id": 1, "name": "User 1" },
    {"id": 2, "name": "User 2"},
    {"id": 3, "name": "User 3"},
    {"id": 4, "name": "User 4"},
    {"id": 5, "name": "User 5"},
    {"id": 6, "name": "User 6"},
    {"id": 7, "name": "User 7"},
    {"id": 8, "name": "User 8"},
    {"id": 9, "name": "User 9"},
    {"id": 10, "name": "User 10"},
    {"id": 11, "name": "User 11"},
    {"id": 12, "name": "User 12"}
]

app.get('/', (req, res) => {
    res.send(`This is a paginated API.
    Check the API documentation for all paths; and other details.`)
})

app.get('/users', paginate(userSchema), (req, res) => {
    res.json(req.paginatedResult);
})

app.post('/users', async (req, res) => {
    const data = req.body.users;
    await userSchema.create(data);
    res.json({
        "message": "Data added",
        "data": data
    });
})

app.listen(3090, () => {
    connectDB();
    console.log("Server is running on port 3090")
})
