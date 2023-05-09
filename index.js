const { v4: uuidv4 } = require('uuid');
const fetch = require('node-fetch')

const id = uuidv4(); 
console.log(id)

const fetchData = async()=>{
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}


fetchData()

// console.log(fetch)