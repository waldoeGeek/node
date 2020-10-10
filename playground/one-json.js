const fs = require('fs')

const dataBuffer = fs.readFileSync('one-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'Thomas'
data.age = '36'

const newDATA = JSON.stringify(data)
fs.writeFileSync('one-json.json', newDATA)
console.log('Changes written!');