var name = "nisa"
console.log(name);

/******     let    ******/
let fullName;
fullName = "Nisa Yavuz";
console.log(fullName);

let serverName = "https://kodluyoruz.org";
console.log(serverName);

/******  let ile tanimlanan degisken içindeki bilgiyi değiştirmek     ******/
let variable = "merhaba";

variable = "merhaba Nisa";
console.log(variable);

/** degiskene ekleme yapma */
variable += " Yavuz";
console.log(variable);

/******     const   ******/
// İçindeki bilgi değiştirilemez.
// const serverPassword;  ---> const ile tanımlarken bu şekilde içerisinde veri olmadan değişkeni tanımlayamıyoruz.
const serverPassword = "1234nisa";
console.log(serverPassword);

/*********** sayilarla tanımlama yapmak **************/
let sayi_1 = 15;
let sayi_2 = 23;
let carpim = sayi_1 * sayi_2;
let toplam = sayi_1 + sayi_2;

console.log("1. Sayı:" , sayi_1, "2. Sayı:", sayi_2, "Çarpım:", carpim, "Toplam:", toplam);

/*********** sayilarla tanımlama yapmak **************/
let counter = 453;
console.log(counter);

counter += 1;
counter ++;
console.log(counter);

counter --;
console.log(counter);

counter *=10;
console.log(counter);

counter /= 2;
console.log(counter);

/*********** mod alma **************/
console.log( "Mod alma:", 18 % 4);

/************ aşağı yukarı yuvarlama *************/
console.log("Aşağı yuvarlama:" , Math.floor(1.5))
console.log("Yukarı yuvarlama:" , Math.ceil(4.2))
console.log("Yakına yuvarlama:" , Math.round(1.4))
console.log("Yakına yuvarlama:" , Math.round(1.8))

let username = "user";

var x = 10 / "a";
console.log(Boolean(x))

var y = "" || -2 || "Javascript";
console.log(Boolean(y))

var a = true;
console.log(Boolean(a))



