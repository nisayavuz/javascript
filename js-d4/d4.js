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
console.log(Math.floor(PI))
console.log(Math.ceil(PI))

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value
console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value
let a = 5.4
console.log(Math.round(a));

const randNum = Math.random()
console.log(randNum)
const randNum2 = (Math.random() * 101)
console.log(randNum2 )
