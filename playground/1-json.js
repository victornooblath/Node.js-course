const fs = require('fs')
// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// Read the file in getting our binary data
// const dataBuffer = fs.readFileSync('1-json.json')

// // Converting previous data into a standard string in JS
// const dataJSON = dataBuffer.toString()

// // Parsing that data into an object
// const data = JSON.parse(dataJSON)

// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Irish'
user.age = '34'

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json',userJSON)