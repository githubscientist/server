require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;
const HOST = process.env.HOST;
const JWT_SECRET = process.env.JWT_SECRET;
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
    MONGODB_URI,
    PORT,
    HOST,
    JWT_SECRET,
    NODE_ENV
}