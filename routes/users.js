var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource  dsha');
});

router.post ("/",(req,res)=>{
  res.send(req.body);
})

module.exports = router;
