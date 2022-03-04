const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=57c58a1a3501b3b99462df5c62ba7a7d&query=37.8267,-122.4233'

request({ url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})