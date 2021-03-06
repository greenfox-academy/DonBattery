const mySql = require('mysql');
const dbConfig = require('./config');

function endpoint(req, res, next) {
  const conn = mySql.createConnection(dbConfig.dbConn);
  if (req.url === '/heartbeat' || req.url === '/heartbeat/') {
    conn.connect((err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json({ status: 'OK' });
      }
    });
  } else {
    next();
  }
}

module.exports = {
  endpoint,
};
