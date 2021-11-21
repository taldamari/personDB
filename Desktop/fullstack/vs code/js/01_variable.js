// H.M 1
// First task
let name = prompt("Enter your name: ");
let lastName = prompt("Enter your last name: ")
alert("good morning " + name + " " + lastName + "!");

// Second task
let user = prompt("הכנס/י את שם המשתמש ");
let b_day = prompt(" הכנס/י את שנת הלידה שלך ");
let age = 2021 - b_day;
alert( " שלום " + user + "\n " + " גילך הוא " +  age);

// H.M 2
// Task 1
let num1 = prompt("Enter number 1: ");
let num2 = prompt("Enter number 2: ");
let product = (num1*num2);
console.log("The result is: " + product);

//Task 2
let name2 = prompt("Enter your name: ");
let age = prompt("How old are you: ");
console.log("Your name is " + name2 + " and you are " + age + " years old." );

// Task 3
let b_year = prompt("Enter your birth year: ");
let age = 2021 - b_year;
console.log("your age is " + age + " years old");

// Task 4
let time1 = prompt(" what is the time now? (full hour please) ")
if (time1 === '5' || time1 === '6' || time1 === '7' || time1 === '8' || time1 === '9' || time1 ==='10' || time1 ==='11') {
    console.log("Good morning!")
}
else if (time1 === '12' || time1 === '13' || time1 ==='14' || time1 ==='15' || time1 ==='16') {
    console.log("Good afternoon!")
}
else if (time1 === '17'|| time1 === '18'|| time1 ==='19'|| time1 ==='20'|| time1 ==='21') {
    console.log("Good evning!")
}
else if (time1 === '22'|| time1 ==='23'|| time1 ==='24'|| time1 ==='1'|| time1 ==='2'|| time1 ==='3'|| time1 ==='4') {
    console.log("Good night!")
}
else {
    console.log("Error")
}

// Task 5
let guess = prompt("Guess number between 1-10: ")
if (guess === '7') {
    console.log("Well done! good guess...")
} else {
    console.log("Wrong guess")
}

// Task 6
let score = 0
let ques1 = prompt("מה השם הפרטי של ראש הממשלה הראשון של ישראל?")
let ans1 = "דוד"
if (ques1 === ans1) {
    console.log("תשובה נכונה")
    score = score + 10
} else {
    console.log("תשובה שגויה")
}

let ques2 = prompt("באיזה שנה הוקמה מדינת ישראל?")
let ans2 = "1948"
if (ques2 === ans2) {
    console.log("תשובה נכונה")
    score = score + 10
} else {
    console.log("תשובה שגויה")
}

let ques3 = prompt("מהי עיר הבירה של ישראל?")
let ans3 = "ירושלים"
if (ques3 === ans3) {
    console.log("תשובה נכונה")
    score = score + 10
} else {
    console.log("תשובה שגויה")
}
alert(" הציון שלך הוא " + score + " מתוך 30 ")
console.log(" הציון שלך הוא " + score + " מתוך 30 ")

// Task 7
let num1 = prompt("Enter first number") 
let num2 = prompt("Enter second number") 
if (num1 === num2) {
    console.log("You have written the same thing twice")
}
else {
    console.log("These are two different things")
}

// Task 8
let num1 = prompt("Enter first number") 
let num2 = prompt("Enter second number") 
if (num1 != num2) {
    console.log("These are two different things")
}
else {
    console.log("You have written the same thing twice")
}

//Task 9
if (num === 1) {
    console.log("I am 1")
} else {
    console.log("I am NOT 1")
}

// Task 10
if (foo === true) {
    console.log("I am true")
} else {
    console.log("I am false")
}

// Task 11
if (foo === false) {
    console.log("I am false")
} else {
    console.log("I am true")
}

// Task 12
if (foo > 5) {
    console.log("I am greater than 5")
} 
if (foo < 5) {
    console.log("I am lesser than 5")
}

// Task 13
let bar = 100;
if (bar < 100) {
console.log('I lesser than 100');
} else {
console.log('I am 100 or greater than 100');
}

// Task 14
if (5 === 6) {
    console.log("You will never see that ha ha ha...")
}

// Task 15
if (5 === 5) {
    console.log("great job")
}

// Task 16
if ( num % 2 == 0) {
	console.log('I am even');
}else{
	console.log('I am odd');
}

// Task 17
let num1 = 8
let num2 = prompt("Enter some number: ")
if (num1 == num2) {
    console.log("The numbers is equals")
} else if (num1 < num2) {
    console.log("Your number is greater")
} else {
    console.log("Your number is lesser")
}
console.log("סיימתי את הבדיקה")

// Task 18
let num1 = prompt("Enter number 1: ")
let num2 = prompt("Enter number 2: ")
let num3 = prompt("Enter number 3: ")
let max 
if (num1 >= num2 && num1 >= num3) {
    max = num1
}
if (num2 >= num1 && num2 >= num3) {
    max = num2
}
if (num3 >= num1 && num3 >= num2) {
    max = num3
}
console.log(max)

// Task 19
let x = prompt("Who's there? ")
if (x == '') {
    console.log("Canceld")
} else if (x == "Admin") {
let pass = prompt("Password? ")
if (pass == '') {
    console.log("Canceld")
} else if (pass == "TheMaster") {
    console.log("Welcome!")}
    else {
        console.log("Wrong password")
    }
} else {console.log("I don't know you")}

// Task 20
let cost = prompt("How much did the meal cost?")
numCost = parseInt(cost)
let tip= 0
if (numCost >= 50 && numCost <= 200) {
    tip = numCost * 0.15    
} else {
    tip = cost * 0.20
}
    let calc = numCost + tip
    console.log(`The bill was ${numCost}$, the tip was ${tip}$ and the total bill ${calc}$`)

// Task 21
let color = prompt("בחרו צבע- אדום, צהוב או ירוק")
if (color === "אדום") {
    console.log("עצור")
} else if (color === "צהוב") {

    console.log("האט")
} else if (color === "ירוק") {
    console.log("סע")
} else {
    console.log("אין צבע כזה ברמזור")
}

