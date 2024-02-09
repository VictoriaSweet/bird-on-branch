app.post("/guests.json", async (req, res) => {
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