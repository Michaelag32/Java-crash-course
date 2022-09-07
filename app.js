/*function convertCelsiusToFahrenheit (celsius) {
    let fahrenheit = celsius * 1.8 + 32
    return fahrenheit
}

console.log(convertCelsiusToFahrenheit (0))*/


/*for (let i=1; i<=20; i++) {

if (i % 3 === 0) {
    console.log(`${i} --> Frontend`)
}

if (i % 5 === 0)
console.log(`${i} --> Simplified`)

else {
    console.log('Frontend Simplified ')*/


/*const convertCelsiusToFahrenheit = (celsius) => {
    return celsius * 1.8 + 32

}

console.log(convertCelsiusToFahrenheit (0))*/ 

/* let arr = [20,30,40,50,100]

let newArr = arr.filter ((element) => {
console.log(element)
if (element < 50) {

    return true;
}
})

console.log(newArr) */ 


/*let grades = ['A+', 'A', 'FAIL']

let goodgrades = grades.filter ((element) => {
    console.log (element)
    if (element !== 'FAIL') {
        return true
    }
})

console.log (goodgrades) -----> Checkedddddd*/

/*let grades = ['A+', 'A', 'FAIL']

let goodgrades = []

for(let i = 0; i < grades.length; i++) {
    if (grades[i] !== 'FAIL')
    goodgrades.push(grades [i])
}
console.log (goodgrades) -------> checkedddddd*/

/*let dollars = [1, 5, 10, 3]

let cents = dollars.map (dollars => dollars * 100) 

console.log (cents) ---------- short version checkeddddd */


/* let dollars = [0 , 10, 20] 

let cents = dollars.map ((element) => {
    console.log (element)
    return element * 100
})

console.log (cents) --------------> long version checked */ 

/* let dollars = [0, 10, 20] 

let cents = []

for (let i = 0; i < dollars.length; i++ ) {
    cents.push (dollars[i] * 100)
}

console.log (cents) ----------- HOW TO MAP W/OUT USING MAP METHOD */


/*let users = [
    {
        username : "michael", 
        email : "mikelagg32@gmail.com",
        password: 'Michael123', 
        subscriptionStatus: 'Vip', 
        discordId: 'michael001',
        lessonsCompleted: [0, 1]
    }
]



function register (name, email, password, 
    subscriptionStatus, discordId, lessonsCompleted) {
        let user = {
            username: name,
            email: email,
            password: password, 
            subscriptionStatus: subscriptionStatus,
            discordId: discordId,
            lessonsCompleted: lessonsCompleted
        }
        users.push (user);
}

register ('michael', 'mikelagg32@gmail.com', 'Michael123', 'Vip', 'michael001', [0, 1])

console.log (users)*/

//First way of accessing an element

console.log(document.querySelector ('#title')) ;

//Second way of accessing an element

console.log(document.getElementById('title'));



function changeTitleToRed () {
    document.querySelector('h1').style.color = 'red'
}