require('dotenv').config()
const { config } = require('./config');
const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const binanceService = require("./vendors/binanceService");
const telegramBot = require("./vendors/telegramService");

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req,res) {
  res.send("HEllo world");
})

app.post('/create-order', function (req, res) { 
  try {
    //binance place order
    telegramBot.sendMessage(config.service.telegram.CHAT_ID, `Order created for: \n${req.body.message}`);
    res.status(200).send({
      success: true
    })
  } catch (e) { 
    res.status(500).send({
      success: false,
      trace: e.stackTrace,
      message: "Cannot place order"
    })
  }
})

app.listen(config.app.port, () => {
  console.log('App is listening on port ' + config.app.port)
})
