const mongoose = require('mongoose')

const dbConnect = async() => {
    try {
        await mongoose.connect(
            process.env.DATABASE_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        )
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = dbConnect;
