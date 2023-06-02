console.log("message from d3.js")

let name = "nisa" , 
    age = 23,
    country = "Türkiye";

console.log(name, age , country)


//string karakter sayısı
let email = "nsnryvz@outlook.com"
console.log(email.length)

//string içerisinde bilgi arama 
console.log(email.search("@"))

console.log(email[10])

//string bölme
console.log(email.slice(0,5))
console.log(email.slice(email.search("@"))) //domain kısmına erişme

let DOMAIN = email.slice(email.search("@") +1 )
console.log(DOMAIN)

let x = DOMAIN.slice(0 , DOMAIN.indexOf("."))
console.log(x)

// bilgi degistirme
email = email.replace("outlook.com" , "kodluyoruz.org")
console.log(email)

//istenilen bilgi bulunuyor mu?
console.log(email.includes("ldlkf"))
console.log(email.includes("@"))

console.log(email.endsWith("kodluyoruz.org"))

//ilk harfleri büyük yapma
let firstName = "nisa"
let lastName = "YAVUZ"
let fullName = ` ${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}  `

console.log(firstName , lastName, fullName)