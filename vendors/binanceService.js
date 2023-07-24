const ccxt = require('ccxt').pro
const { config } = require('../config');

const binance = new ccxt.binanceusdm()
try {
  binance.apiKey = config.service.binance.API_KEY
  binance.secret = config.service.binance.SECRET
  binance.checkRequiredCredentials()
} catch (e) {
  console.log("Authentication error", e)
}

module.exports = binance