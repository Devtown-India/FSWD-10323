module.exports.add = (...rest)=> rest.reduce((acc, val)=> acc + val, 0)
module.exports.multiply = (...rest)=> rest.reduce((acc, val)=> acc * val, 1)