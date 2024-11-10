const express = require('express')
const app = express()
const http = require('http')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const validator = require('express-validator')
const session = require('express-session')
const mongoStore = require('connect-mongo')
const mongoose = require('mongoose')
const flash = require('connect-flash')
const passport = require('passport')

module.exports = class Application {
    constructor() {
        this.setupExpress()
        this.setupMongoConnection()
        this.setConfig()
        this.setRouter()
    }

    // setting up express
    setupExpress() {
        const server = http.createServer(app)
        server.listen(3000, () => console.log('server is running'))
    }

    // setting up mongo connection
    setupMongoConnection() {
        mongoose.Promise = global.Promise
        mongoose.connect('mongodb://localhost/nodejscms')
            .then(() => console.log('database is connected'))
            .catch(error => console.log(`error connecting to database => ${error.message}`))
    }

    // setting up express config
    setConfig() {
        app.use(express.static('public'))
        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(session({
            secret: 'mySecretKey',
            resave: true,
            saveUninitialized: true,
            store: new mongoStore({ mongoUrl: 'mongodb://localhost/nodejscms' })
        }))
        app.use(cookieParser('mySecretKey'))
        app.use(flash())
        // app.use(validator)

        app.set('view engin', 'ejs')
        app.set('views', path.resolve('./resource/views'))
    }

    setRouter() {
        app.use(require('app/routes/api'))
        app.use(require('app/routes/web'))
    }
}