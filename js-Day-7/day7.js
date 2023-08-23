function sayHello(){
    console.log("hello")
}

sayHello() // function called

// Function can also return values, if a function does not return values the value of the function is undefined. 

let hello = sayHello();
console.log(hello); // undefined 

function addTwoNumbers() {
    let numOne = 2
    let numTwo = 3
    let total = numOne + numTwo
    return total

}
/*********  **********/


console.log(addTwoNumbers())

function multiply(num1 , num2){
    let total = num1 * num2
    return total;
}

// let result = multiply(5 , 4);
console.log(multiply(5 , 4));  


function addition(){
    console.log(arguments); // girilen argumentleri burada gormemi sagliyor
}

addition(5,7,8,9);

// ornek

function sumAllNums(){
    let sum = 0;
    for(let i =0; i < arguments.length; i++){
        sum += arguments[i];
    
}
    return sum;
}
console.log(sumAllNums(2,8,7,9))

// anonymous function --> ismi olmayan, let const ile tanımlanan fonksiyonlar
// anonymous fonksiyonlar bir değer döndürmez, değer döndürürse --> Expression function olur.

const anonymousFunc = function(myName){ // değer anonymousFunc'ta depolanır. 
    return `Hello ${myName}`  // burada bir değer döndüğü için expression func ornegi
}

console.log(anonymousFunc("nisa"));

// SELF INVOKING FUNCTIONS  ---> kendi kendini çağıran fonksiyonlar.

(function(num){
    console.log(num * num);

})(10)

let squaredNum = (function(n) {
    return n * n
  })(10)
  
  console.log(squaredNum);

console.log(typeof(squaredNum))

// normal function 

function hello_exp(){

}

// arrow function tanımı 

const arrowFunc_exp = () => {

}

function helloo(name){
    return `Hello ${name}`
}

console.log(helloo("kübra"))

// arrow function 
const helloo2 = name => `Hello ${name}`

console.log(helloo2("nisa"));

// birden fazla parametre olursa

const twoPars = (age , city) => `I'm ${age} years old and i live in ${city}`

console.log(twoPars(12, "ankara"));

// spread öperatörü --> arrow functionda arguments kullanılmaz onun yerine spread operatörü kullanılır.

const toplama = (...numbers) => { // burada numbers girdigim tüm parametreleri alır. Farklı kullanım asagıdaki örnekte.
    sumAll=0;
    for(i=0; i<numbers.length; i++){
        sumAll += numbers[i];
    }
    console.log(sumAll);
}
 
toplama(1,3,5,4);

const toplama2 = (sayi1 , sayi2, ...sayilar) => { // burada ilk iki parametre ayrı olarak tanımlanıyor ve sonraki parametreler ... operatoru ile tutuluyor.
    console.log(sayi1 + sayi2);

    console.log(sayilar);
}

toplama2(2,5,6,7,8,11);

//Default parameters = Fonksiyonlardaki parametrelere bir değer vermediğim zaman otomatik olarak kullanacağı değerleri girmek.

function carpma(num1, num2 = 5){ // eğer fonksiyonu çağırırken num2'ye herhangi bir değer ataması yapmamışsam değer 5 olarak kabul edilecek. Eğer değer atamışsam burdaki defaul param gözardı edilecek.
    console.log(num1 * num2);
}

carpma(6);
carpma(5,7);

// call vs invoke

function test(){
    console.log("fonksiyon calisti.")
}

test();

function invoker(func){
    func()
}

invoker(test);

// exercise
function bmi(weight , height){
   let result = weight / (height * height)

    if( result < 18.5){
        console.log("You're underweight.")
    } else if( result >= 18.5 && result <= 29.4){
        console.log("You're normal weight.")
    }

    return result;
}

bmi(65, 1.65);





