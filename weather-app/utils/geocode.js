const request = require('request')

const geoCode = (address, callback) => {
    const city = address
    const geoToken = "pk.eyJ1Ijoid2FsZG9lIiwiYSI6ImNrNng0MDZqdzBjYTgzZm52eHEzYWp1YW4ifQ.LfX1Y8SuEyNW5XjFCbwCWg"
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + city + ".json?limit=2&access_token=" + geoToken + "&limit=1"

    request({url , json:true}, (error, { body } = {}) => {
        if (error) {
           callback("cannot connect to service!", undefined);
        } else {
            if (body.features.length === 0) {
                callback("Error, Location Not found!", undefined);
            } else {
                const datas = body.features[0]
                const long = datas.center[0]
                const lat = datas.center[1]
                callback(undefined, {
                    latitude: datas.center[1],
                    longitude: datas.center[0],
                    location: datas.place_name
                })
            }        
        }
    })
}

module.exports = geoCode