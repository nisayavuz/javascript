// SCOPE 
//Window scope
a = "javascript" // is a window scope that found anywhere

//global scope
let b = "nisa"
let c = 11;

if(true){
    let a = "lfdgfd" // local, bir kod bloğunun içinde tanımlandıığı için sadece bu kod bloğunun içerisinde erişilebilir.
    let n = 12;
    console.log(a,b);
}

// creating an object 
const object ={}

const user = {
    name: 'Nisa' ,
    surname: 'Yavuz' ,
    age: 23,
    isMarried: false,
    'phone number': 56964676544,
    skills: ['HTML', 'CSS', 'Javascript'],
    friends:
        {
            name:'Kübra',
            surname:'Arslan'
        },
// burada arrow function kullanamayız çünkü this metodu arrow functionda objeyi referans almıyor.
    getFullName: function(){ 
        return `${this.name} ${this.surname}`
    },

    getFullName2: () => `${user.name} ${user.surname}`
}

console.log(user.name);
console.log(user.isMarried ? 'Evli' : 'Bekar');
console.log(user.friends.name);
console.log(user.skills[2]);
console.log(user['phone number']);
console.log(user.getFullName());
console.log(user.getFullName2());

// objedeki propertyleri değiştirme/ekleme/çıkarma

user.name = 'Nur'
user.skills.push('React');
user.skills.push('Bootstrap');

console.log(user.skills);
console.log(user.name);


const forInExample = () => {
    let cat = {};

    cat.name = "Bulut";
    cat.hunger = 0;
    cat.energy = 1;
    cat.state = "idle";

    for(  let property in cat){
        console.log(property + " " + cat[property]);

    };
}

// Object.assign:Nesneyi orijinal nesneyi değiştirmeden kopyalamak için kullanılır

let newUser = Object.assign({} , user);
// let newUser = {...user} // bu şekilde de yazabiliriz fakat iç içe olanlarda çalışmaz.
 

console.log(user);

newUser.name = "dfghjmk";

console.log(user.name);
console.log(newUser.name);

// Object.keys: Bir nesnenin anahtarlarını veya özelliklerini dizi olarak almak için kullanılır

console.log( Object.keys(user));

// Object.values: Nesnenin key'lerine karşılık gelen değerleri dizi içerisinde almak için kullanılır

console.log( Object.values(user));

for( let [key , value] of Object.entries(user)){
    console.log(key, value);
// backtickle ek olarak bir şeyler yazabiliriz
}




console.log( user.hasOwnProperty("country"))
console.log( user.hasOwnProperty("skills"))

// Object.freeze() =>> Objeye yeni bir property tanımlamayı ya da bir propertynin güncellenmesini engeller. push() methodu çalışıyor.

Object.freeze(user); // artık user objesine herhangi bir güncelleme yapsak da değişmeyecek.

Object.seal(user); // ekleme çıkarma yapmaya izin vermez fakat bulunan objeler güncellenebilir.

