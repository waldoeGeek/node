const request = require('request')
const geoCode = require('./geocode')

 const forecast = (long, lat, callback) => {
    const key = "74209e1616573a008582d7818cf24e30"
    const url = 'http://api.weatherstack.com/current?access_key=' + key + '&query=' + long + ',' +lat

    request({url, json: true}, (error, { body } = {}) => {
        if (error) {
            callback('Cannot Connect to Service!', undefined)
        } else if (body.error) {
            callback('Location Not Found!', undefined)
        } else {
            const data = body.current
            const condition = data.precip
            const desc = data.weather_descriptions[0]
            const temp = data.temperature
            const icon = data.weather_icons[0]
            callback(undefined, 'It is ' + desc + '. It is ' + temp + '°C. With ' + condition + '% Chance of Rain! It feels like ' + data.feelslike)
        }
    })

 }

 module.exports = forecast