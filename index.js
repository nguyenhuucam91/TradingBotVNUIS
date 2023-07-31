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
  const body = req.body.message;
  const ticker = body.match(`Ticker: (\w+)`)
  const orderPrice = body.match(`Price: (\d+.?\d+)`)
  const strategyLongShort = body.match(`Strategy long\/short: (\w+)`)
  try {
    //binance place order
    // binanceService.createOrder(ticker, "market", strategyLongShort, 1, orderPrice);
    //send notification to telegram
    telegramBot.sendMessage(config.service.telegram.CHAT_ID, `Order created for: \n${req.body.message}`);
    return res.status(200).json({
      success: true
    })
  } catch (e) {
    telegramBot.sendMessage(config.service.telegram.CHAT_ID, e.stack)
    return res.status(500).json({
      success: false,
      trace: e.stack,
      message: "Cannot place order"
    })
  }
})

app.listen(config.app.port, () => {
  console.log('App is listening on port ' + config.app.port)
})
