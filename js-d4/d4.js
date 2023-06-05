//Primitive Data Types 
let word = "Javascript"

word[0] = "Y" // bu kod word değişkeninde saklanan string değeri değiştirmez. 

// strings are not modifiable. 
let num1 = 3
let num2 = 3  //they are primitive. 

//primitive veri türleri değerlerine göre karşılaştırılabilir. 

console.log(num1 == num2) // true

let js = "javascript"
let py = "python"

console.log( js == py) // false

// Non-primitive Data Types

let nums = [1, 2, 3];

nums[0] = 10;
console.log(nums) // [10, 2, 3]

let array = [1, "nisa", true, undefined, null, []]

let nums1 = [1, 2, 3]
let nums2 = [1, 2, 3]

console.log(nums1 == nums2); // false. We can't compare arrays, functions or objects.

let nums3 = [1, 2, 3, 4]
let nums4 = nums3 
console.log(nums3 == nums4) // true. Çünkü baz aldıkları referans aynı. 

//math object
const PI = Math.PI
console.log(PI);
console.log(Math.round(PI))
console.log(Math.round(9.8))
console.log(Math.floor(PI)) // aşağı yuvarlama
console.log(Math.ceil(PI)) // yukarı yuvarlama 

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value
console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value
let a = 5.4
console.log(Math.round(a));

const randNum = Math.random()
console.log(randNum)
const randNum2 = (Math.random() * 101)
console.log(randNum2 )

/********* *****************/ 
function hesap(sayi1, sayi2) {
    // let sayi1 = 10, sayi2 = 15;
    console.log(sayi1 * sayi2);
}

hesap(13, 4)
/********* *****************/ 

console.log(Math.abs(-10))      // 10 --> mutlak değer

console.log(Math.sqrt(100))     // 10 --> karekök alma

console.log(Math.sqrt(2))       // 1.4142135623730951

console.log(Math.pow(3, 2))     // 9 --> üs alma

let name = "Nisa"
let surname = "Yavuz"
let fullName = name + " " + surname;
console.log(fullName) 

/* escape sequences in strings 
\n: new line
\t: Tab, means 8 spaces
\\: Back slash
\': Single quote (')
\": Double quote (") */
console.log("Merhaba \nNasılsın?")
console.log("Merhaba \t Hi")
console.log('Nisa\'nın odası. ') // tek tırnak içerisinde kesme işareti kullanmak için

//template literals
let template = `Merhaba benim adım ${name}, soyadım ${surname}.`
console.log(template)
let c = 2
let b = 3
console.log(`The sum of ${c} and ${b} is ${c + b}`) // injecting the data dynamically

let variable = "NisaGitHub"
let lastIndex = variable.length - 1;
console.log(variable[lastIndex])
console.log(variable.substr(2,6)); // (from , length) burada 6 kaç harf seçileceğini belirtiyor. split gibi değil.

let string = 'JavaScript'

console.log(string.substring(0,4))     // Java
console.log(string.substring(4,10))    // Script
console.log(string.substring(4))       // Script

let myName = "Nisa Yavuz"
console.log(myName.split(" "))
console.log(myName.split(""))

// trim(): Removes trailing space in the beginning or the end of a string.
let str = '   30 Days Of JavaScript   '

console.log(str)
console.log(str.trim())

let firstName = ' Nisa '

console.log(firstName)
console.log(firstName.trim())  // still removes spaces at the beginning and the end of the string

console.log(str.includes("Of"))

let string1 = "merhaba nisa, nasilsin nisa?"
console.log(string1)
console.log(string1.replace("nisa" , "kübra"))
console.log(string1.replaceAll("nisa" , "kübra"))


let string_a = 'Love is the best to in this world'

console.log(string_a.startsWith('love'))   // false
console.log(string_a.endsWith('world'))  // false
console.log(string_a.startsWith('Love'))   // true

console.log(string_a.search("is")) // 5. index

let num = '10'
let numInt = parseInt(num)
console.log(numInt) // 10