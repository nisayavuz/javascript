const cb = (n) => {
    return n ** 2;
}
 

function cube(myfunc, num) {
    return myfunc(num) * num; 
 }

console.log(cube(cb , 5));

// const numbers = [1, 3, 7, 11, 8]
// let total = 0;
//  numbers.forEach(
//     number => total += number
//     )

//  console.log(total);

const numbers = [1, 3, 7, 11, 8];

console.log(
    numbers.find(number => number > 3)
)


let total = 0;

numbers.forEach( function(number){
    total += number;
})
console.log(total);

function Hello(){
    console.log("hello")
}
const interval = setInterval(Hello , 1000); // saniyede bir konsola hello yazdırır.

//setTimeout(Hello, 3000); // 3 saniye sonra konsola hello yazdırır ve durur.

//clearInterval --> cancelling set interval
// clearTimeout --> cancelling set timeout

setTimeout(() => {
    clearInterval(interval);
    console.log("interval durduruldu.")
} , 5000)

const countries = ["Turkiye", "Finland", "Denmark", "Germany", "Holland"];

countries.forEach( (upper) => console.log(upper.toUpperCase())
)


let users = [
    {
        id: 1,
        name: "nisa",
        age: 23,
        gender: 1
    },
    {
        id: 2,
        name: "kübra",
        age: 24,
        gender: 1
    },
    {
        id: 3,
        name: "melike",
        age: 24,
        gender: 1
    },
    {
        id: 4,
        name: "no men allowed",
        age: 3,
        gender: 2
    }
]

users = users.map( user =>{
    if(user.id === 1){
        user.age = 55;
    }
    return user;
})

console.log(users);

//filter() method
console.log(
numbers.filter(number => number > 3)
)

const women = users.filter( user => user.gender === 1)
const men = users.filter( user => user.gender === 2)

console.log(men);