const add = (...rest)=> rest.reduce((acc, val)=> acc + val, 0)
const multiply = (...rest)=> rest.reduce((acc, val)=> acc * val, 1)


module.exports={
    add,
    multiply,
    something: 'else',
    age:22
}
