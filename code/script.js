// const a = [1,2,3,4]
// const b = [5,6,7,8]
// /*
// [1,2,3,4]
//  1, 2, 3, 4
// */

// const c = [...a,b]

const a = {
    name: 'John',
    age: 30,
    car:{
        brand: 'BMW',
        model: 'X5'
    }
}

const b ={
    ...a,
}

a.name = 'Jack'
a.age = 18
a.car.brand = 'Mercedes'
a.car.model = 'C300D'

console.log(b)