const connect = require("./createConnection");

module.exports = async function initDatabase() {
  let conn;
  try {
    // Acquire a connection from the connection pool
    conn = await connect();

    // Execute query to create a new database
    await conn.query("CREATE DATABASE IF NOT EXISTS guests");
    console.log("guests database created.");

    // Execute query to create a new table
    await conn.query(
      "CREATE TABLE IF NOT EXISTS guests.info ( \
                        id INT(11) unsigned NOT NULL AUTO_INCREMENT, \
                        first_name VARCHAR(50) NOT NULL, \
                        last_name VARCHAR(50) NOT NULL, \
                        address VARCHAR(100), \
                        RSVP VARCHAR(3), \
                        plus_one INT(1), \
                        PRIMARY KEY (id))"
    );
    console.log("guest information table created.");
  } catch (err) {
    // Print error
    console.log(err);
  } finally {
    if (conn) await conn.end();
  }
};
