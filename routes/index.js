var express = require('express');
var router = express.Router();
const queries = require('../db/messagesQueries')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({message: 'Working'});
});

router.get('/test', (req,res)=>{
  res.json({message: 'something'})
})

router.post('/messages', (req, res, next)=>{
  queries.addMessage(req.body).then(message=>res.json(message))
})
router.get('/messages', (req,res)=>{
  queries.getMessages().then(messages=>{
    res.json(messages)
  })
})

module.exports = router;
