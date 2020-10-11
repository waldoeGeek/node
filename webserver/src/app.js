const path = require('path')
const express = require('express')


const app = express()
const pubDir = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(pubDir));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
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

app.get('/weather', (req, res) => {
    res.send({
        location: 'Ottawa',
        forecast: 'Currently snowy',
        temp: -10
    })
});


app.listen(3000, () => {
    console.log(`Server started on 3000`);
});