'use strict'

const Telebot = require('telebot')
const BOT_API = require('./config/BOT_KEY')

const reglas = require('./models/index').reglas

const bot = new Telebot(BOT_API.key)

//codigo saludo
bot.on(['/start', '/hello'], msg => msg.reply.text('Welcome!'));

//codigo guardar datos
bot.on(['/train'], function (msg){

  console.log(msg.text.substr(7))

  try {
    reglas.create( msg.text.substr(7))
  }catch (e) {
    console.log(e)
  }
  msg.reply.text(`Dato guardado ${msg.text.substr(7)}`)
})

bot.start()