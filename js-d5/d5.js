//comparison operators
//x == y değerin aynı olup olmadığına bakar
//x === y hem değerin hem de veri türünün eşit olup olmadığına bakar
// x != y  not equal

console.log("mango".length == "avocado".length) // false
console.log("mango".length < "avocado".length) // true
// As rule of thumb, if a value is not true with == it will not be equal with ===. Using === is safer than using ==.

let check = 4<5 && 5<6 // true (and operator)
console.log(check);

let check2 = 4>3 || 5<2 // true. (or operator.)

let isLightOn = true
let isLightOff = !isLightOn // false (negation)

//ternary operator 
let result = 5>4 ? "evet" : "hayir"
console.log(result);

/****** Window Methods *******/
// alert("welcome to my page")
// Do not use too much alert because it is destructing and annoying, use it just to test.

// let deger = prompt("bir değer giriniz: ") // kullanıcıdan veri almak için kullanılır.
// console.log( deger * 5)

// const agree = confirm("emin misin?") // onay kutusu, tamam'a basılırsa true, iptal'e basılırsa false döner. 

//date objects
const myDate = new Date() // new date'i başlatmayı sagliyor
console.log(myDate);
console.log(myDate.getFullYear());
console.log(myDate.getMonth() + 1); // getMonth 0-11 arasi değer verdiği için +1 ile doğru sonuca ulaştık.
console.log(myDate.getDate());

let year = myDate.getFullYear(),
    month = myDate.getMonth();
    date = myDate.getDate(),
    day = myDate.getDay(),
    hour = myDate.getHours(),
    minute = myDate.getMinutes(),
    second = myDate.getSeconds();

let months = [ "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
let days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]

let dateTime = `Today is ${date} ${months[month]} ${days[day]} ${year} , time: ${hour}:${minute}:${second}.`
console.log(dateTime);

// toString:Converts array to string
// const names = ['Nisa', '1', 'TR', '23']
// console.log(names.toString()) 

// join 
// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.join()) // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names.join('')) //AsabenehMathiasEliasBrook 

//splice
// const numbers = [1, 2, 3, 4, 5, 6]
// numbers.splice(3, 3, 7, 8, 9)
// console.log(numbers.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

// push and pop 
// Push: adding item in the end. To add item to the end of an existing array we use the push method.
// pop: Removing item in the end.

// const numbers = [1, 2, 3, 4, 5]
// numbers.push(6)
// console.log(numbers) // -> [1,2,3,4,5,6]

// numbers.pop() // -> remove one item from the end
// console.log(numbers) // -> [1,2,3,4,5]

// shift - unshift - reverse
// shift: Removing one array element in the beginning of the array.
// unshift: Adding array element in the beginning of the array.
// reverse: reverse the order of an array.

const numbers = [1, 2, 3, 4, 5]
numbers.shift() // -> remove one item from the beginning
console.log(numbers) // -> [2,3,4,5]

numbers.unshift(0) // -> add one item from the beginning
console.log(numbers) // -> [0,1,2,3,4,5]    

numbers.reverse() // -> reverse array order
console.log(numbers) // [5, 4, 3, 2, 1]

numbers.reverse()
console.log(numbers) // [1, 2, 3, 4, 5]

let name = "nisa";
reverseName = name.split("").reverse().join("");
console.log(reverseName);

const myNumbers = [1, 5, 7, 3, 6, [1, 2, 3]];
console.log(myNumbers);
// myNumbers.sort();
// console.log(myNumbers);

console.log(myNumbers[5][1]);
console.log(myNumbers.length)
console.log(myNumbers[0]);
let lastIndex = myNumbers.length - 1; 
console.log(lastIndex);

console.log(myNumbers.pop())
