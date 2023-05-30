/******    string veri türünü int ve floata çevirme  ***************/

let number1 = "11"
number1 = parseInt(number1)
console.log(number1);
console.log("number1 türü:" , typeof(number1));

/******    string birleştirme  ***************/
let username = "Nisa"
const DOMAIN = "kodluyoruz.org"
let email = username + "@" + DOMAIN

console.log("Merhaba" , username, "hoşgeldin." , "Mail adresin:" , email)

/******    template literals  ***************/
let info = `Merhaba ${username} sitemize hoşgeldin. Mail adresin ${email}  
Mail adresinin uzunluğu ${email.length} 
Sıranız: ${(2*6)*3} numara
Saat bilgisi: ${new Date().getHours()}
Kısa isminiz: ${username[0]}.

`
console.log(info)

/****  büyük küçük harf yapma */
username = username.toUpperCase()
console.log(username);

username = username.toLowerCase()
console.log(username);
