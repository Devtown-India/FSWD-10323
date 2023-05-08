const fs = require('fs');

const text = 'this is text'

const data = fs.readFileSync('temp.txt')
console.log(data.toString())