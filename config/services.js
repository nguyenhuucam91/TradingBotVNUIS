const service = {
  binance: {
    BASE_URL: process.env.BINANCE_BASEURL || 'xx',
    API_KEY: process.env.BINANCE_API_KEY || 'fQlohf0x5R6VAvWJssb8lhpsvfnxD4sQINOnykFoiEBsR5dWNpSgTETnahkRrT9a',
    SECRET: process.env.BINANCE_SECRET || 'BvTyyab8UKCTqpi0be6QVip4ONHY1xDpCC88dU3JyE3J2rjZ8dOUIXJnJCSEWKHc',
  },

  telegram: {
    TELEGRAM_TOKEN: process.env.TELEGRAM_TOKEN || '6405204094:AAFFNiBEr6k4lkZ0iRxtb3xlbIOqsf-DYcI',
    CHAT_ID: process.env.TELEGRAM_CHAT_ID || '-1001869062832'
  }
}

module.exports = service