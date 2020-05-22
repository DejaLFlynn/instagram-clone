require("dotenv").config();
const pgp = require("pg-promise")({});

const DB = pgp(process.env.DATABASE_URL);

module.exports = DB;
