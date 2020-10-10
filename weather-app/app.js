const request = require('request')
const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const city = process.argv[2]

if (!city) {
    console.log('Please Pick a Location');
} else {
    geoCode(city, (error, { latitude, longitude, location } = {} )=> {
        if (error) {
            return console.log('Error', error);
        } else {
            forecast(latitude, longitude, (error, forecastData) => {
                if (error) {
                    return console.log('Error:', error); 
                }
                console.log(location);
                console.log(forecastData); 
            }) 
        }   
    })
}
