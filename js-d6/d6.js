// if conditions
// the key word if is to used check if a condition is true and to execute the block code
// if (condition) {}

// let num = 3;
// if (num > 0){
//     console.log(` ${num} is a positive number. `)
// }

// // else 
// let result = prompt("4+8 = ?")
// if(result == 12){
//     console.log("doğru")
// }else{
//     console.log("yanlış")
// }

// else if
// let a = 0;
// if (a > 0){
//     console.log(`${a} is a positive number`)
// }else if (a == 0){
//     console.log(`${a} is zero.`)
// }else if (a < 0){
//     console.log(`${a} is a negative number`)
// }else{
//     console.log(`${a} is not a number`)
// }

//switch case 
/*
switch(caseValue){
    case 1:
      code
      break
    case 2:
     code
     break
    case 3:
      code
     break
    default:
      code
  }
*/
// switch (result){
//     case "12":
//         console.log("doğru.")
//         break
//     case "11":
//         console.log("tekrar düşün.")
//         break
//     default:
//         console.log("yanlış.")
// }


for (let i = 0; i <= 20; i++ ) {
    console.log(`${i} * ${i} = ${i * i}`)
}

let names = ["Nisa" , "Nur" , "Yavuz" , "Songül" , "Kübra"];

for ( let i = 0; i < names.length; i++ ){
    console.log(names[i]);
}


// break 

for(let i = 0; i <= 5; i++){
  if(i == 3){
    break
  }
  console.log(i)
}

// 0 1 2

//continue
// We use the keyword continue to skip a certain iterations.

for(let i = 0; i <= 5; i++){
  if(i == 3){
    continue   // 3'ü yazdırmadan es geçiyoruz.
  }
  console.log(i)
}

// 0 1 2 4 5

for( let i = 0; i < 11; i++){

  console.log(`${i} * ${i} = ${i * i}`);
}

let arr = [];

for( let i =0; i < 8; i++) {
  arr += "#"
  console.log(arr);
}

console.log( "i   i^2   i^3"); 

for( let i= 0; i < 11; i++){
  let iSquared = i**2;
  let iCubed = i**3;

  console.log(`${i}   ${iSquared}   ${iCubed}`);
}

for(let i = 0; i<= 100; i++){
  if(i % 2 === 0){
    console.log(i);
  }
}

for(let i = 0; i<= 100; i++){
  if(i % 2 !== 0){
    console.log(i);
  }
}

/*********       Use for loop to iterate from 0 to 100 and print only prime numbers *******/


sum = 0;
for(let i = 0; i<= 100; i++){
  sum += i;
}

sumEven = 0;
sumOdd = 0;
console.log("The sum of all numbers =" , sum); 

for(let i = 0; i<= 100; i++){
  if( i % 2 === 0 ){
    sumEven += i;
  }
}

for(let i = 0; i<= 100; i++){
  if( i % 2 !== 0 ){
    sumOdd += i;
  }
}

console.log("The sum of all even numbers = ", sumEven, "The sum of all odd numbers = ", sumOdd);
