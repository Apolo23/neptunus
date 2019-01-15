const firebase = require('firebase-admin')
const serviceAccount = require('../config/neptunus-boot-firebase')

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: 'https://neptunus-telegram-bot.firebaseio.com/'
})

const db = firebase.database()

const Reglas = require('./reglas')

module.exports = {
  reglas: new Reglas(db)
}
