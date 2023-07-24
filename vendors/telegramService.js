const { config } = require('../config')

const TelegramBot = require('node-telegram-bot-api');

const telegramBot = new TelegramBot(config.service.telegram.TELEGRAM_TOKEN, { polling: true });

module.exports = telegramBot