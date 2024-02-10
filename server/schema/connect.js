const createConnection = require("./createConnection");

module.exports = async function connect() {
  let conn;
  try {
    // Acquire a connection from the connection pool
    conn = await createConnection();
    return conn;
  } catch (err) {
    // Print error
    console.log(err);
  }
};
