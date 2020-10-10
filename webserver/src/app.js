const path = require('path')
const express = require('express')


const app = express()
const pubDir = path.join(__dirname, '../public')
app.use(express.static(pubDir));

app.get('/help', (req, res) => {
    res.sendFile(pubDir+'/help.html')
});


app.get('/about', (req, res) => {
    res.sendFile(pubDir + '/about.html') 	
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