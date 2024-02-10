const mariadb = require("mariadb");
require("dotenv").config();

module.exports = async function createConnection() {
  try {
    // Acquire a connection from the connection pool
    return await mariadb.createConnection({
      host: process.env.MDB_HOST,
      port: process.env.MDB_PORT,
      user: process.env.MDB_USER,
      password: process.env.MDB_PASS,
      allowPublicKeyRetrieval: true,
    });
  } catch (err) {
    // Print error
    console.log(err);
  }
};
