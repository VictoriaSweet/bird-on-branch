// const guestsData = require("../guests.json");
const connect = require("../schema/connect");

module.exports = function (app) {
  app.get("/guests", async (req, res) => {
    try {
      // populate guestsData from database instead of json file
      const conn = await connect();
      const guestsData = await conn.query("SELECT * FROM guests.info;");

      res.header("Content-Type", "application/json");
      res.send(JSON.stringify(guestsData));
    } catch (e) {
      res.status(500);
      res.send(JSON.stringify(e));
    }
  });

  // INSERT INTO `guests`.`info` (`first_name`, `last_name`, `address`, `RSVP`, `plus_one`) VALUES ('Victoria', 'Sweet', '123', '1', '1');

  app.post("/guests", async (req, res) => {
    try {
      const { id, name, address, RSVP, plus_one } = req.body;
      const [{ insertId }] = await connection.promise().query(
        `INSERT INTO guests.info (id, name, address, RSVP, plus_one) 
            VALUES ('', '', '', '', '')`,
        [id, name, address, RSVP, plus_one]
      );
      res.status(202).json({
        message: "Guest Created",
      });
    } catch (err) {
      res.status(500).json({
        message: err,
      });
    }
  });
};
