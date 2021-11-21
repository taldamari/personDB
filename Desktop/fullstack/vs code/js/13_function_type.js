// function expressions

// פונקציה רגילה function declaration
function sayHello(msg) {
    console.log(msg);
}

// פונקציה ללא שם function expressions
let sayHey = function () {
    console.log('Hello');
}

sayHey()            //קריאה לפונקציה שבתוך המשתנה

// פונקצית חץ arrow function 
let saybye = (msg) => {
    console.log(msg);
}

function ask(question, yes, no) {
    let result = confirm(question)
    if (result) {
        yes()
    } else {
        no()
    }
}

let yesP = () => {
    console.log("yessss")
    console.log('Which extras?');
}

let noP = () => {
    console.log('Bad choice');
}

let yesB = () => {
    console.log("Eat Banana")
}

let noB = () => {
    console.log('Go eat Pizza');
}

ask('Do you want pizza? ', yesP, noP)
ask('Do you wont to eat Banana?', yesB, noB)
