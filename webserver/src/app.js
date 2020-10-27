const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const app = express()

// Define Paths for express config
const pubDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars and views elocation
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static Directory to serve
app.use(express.static(pubDir));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Thomas Reynolds'
    })
})

app.get('/help', (req, res) => {
    let date = new Date()
    let seconds = date.getSeconds()
    let minutes = date.getMinutes()
    let hours = date.getHours()
    res.render('help', {
        title: 'Help Page',
        time: hours + ':' + minutes,
        name: 'Thomas Reynolds'
    })
});


app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Thomas Reynolds',
        age: 36,
        myTitle: 'Developer'
    })
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Error',
        errorMessage: 'Help article not found!',
        name: 'Thomas Reynolds'
    })
});

app.get('/weather', (req, res) => {
    if (!req.query.addr) {
        return res.send({
            error: 'No address provided!'
        })
    }
    
    geoCode(req.query.addr, (error, { latitude, longitude, location } = {} )=> {
        if (error) {
            return res.send({error});
        } else {
            forecast(latitude, longitude, (error, forecastData) => {
                if (error) {
                    return res.send({ error}); 
                }
                res.send({
                    location: location,
                    forecast: forecastData,
                    address: req.query.addr
                }); 
            }) 
        }   
    })
});

app.get('*', (req, res) => {
    res.render('404', {
        title: 'Error',
        name: 'Thomas Reynolds',
        myTitle: 'Developer',
        errorMessage: 'Error: Page Not Found!'
    })
});

// Start Server
app.listen(3000, () => {
    console.log(`Server started on 3000`);
});