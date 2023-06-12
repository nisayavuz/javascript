// if conditions
// the key word if is to used check if a condition is true and to execute the block code
// if (condition) {}

let num = 3;
if (num > 0){
    console.log(` ${num} is a positive number. `)
}

// else 
let result = prompt("4+8 = ?")
if(result == 12){
    console.log("doğru")
}else{
    console.log("yanlış")
}

// else if
let a = 0;
if (a > 0){
    console.log(`${a} is a positive number`)
}else if (a == 0){
    console.log(`${a} is zero.`)
}else if (a < 0){
    console.log(`${a} is a negative number`)
}else{
    console.log(`${a} is not a number`)
}

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
switch (result){
    case "12":
        console.log("doğru.")
        break
    case "11":
        console.log("tekrar düşün.")
        break
    default:
        console.log("yanlış.")
}


