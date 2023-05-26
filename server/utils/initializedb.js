const localstorage = require('local-storage')

module.exports = async () => {
    if(!await localstorage.get('users')) {
        await localstorage.set('users', [])
    }
    if(!await localstorage.get('todos')) {
        await localstorage.set('todos', [])
    }
    console.log('Database initialized')
}