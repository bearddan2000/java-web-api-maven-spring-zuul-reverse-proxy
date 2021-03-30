const express = require('express');
const router = express.Router();
const mysql = require("mysql");
//const birds = require('../services/birds');

const pool = mysql.createConnection({ /* don't expose password or any sensitive info, done only for demo */
  host: 'db',
  user: 'maria',
  password: 'pass',
  database: 'animal',
});
/* GET programming languages. */
router.get('/', (req, res, next) => {
  try {
    pool.connect();
    getBirds(res);
    pool.end();
  } catch(err) {next(err); }
});

function getBirds(res) {
    return pool.query("SELECT * FROM bird", function(err, results) {
        res.json({'data': results});
      }
    );
}
module.exports = router;
