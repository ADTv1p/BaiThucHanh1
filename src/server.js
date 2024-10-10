import express from 'express'
import dotenv from 'dotenv'
// import date from './date.js'
// import getURL from './getURL.js'
import configViewEngine from './configs/viewEngine.js'
import initWebRoute from './route/webRoute.js'
import path from 'path'
const app = express()
dotenv.config()
const port=process.env.PORT
configViewEngine (app) 
// app.use(express.static(path.join(_dirname, 'public')))
initWebRoute (app)
// app.get ('/about', (req, res) => {
//     res.send ('Hello World!.Page about')
// })

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
