// Task 1 שיעור
let name1 = prompt("Enter your name: ")

while (name1.length < 2 || name1.length > 7) {
    console.log("Name length not valid")
    name1 = prompt("Please try again")
}

console.log("Hello " + name1)


// Task 2 שיעור
let grades = prompt("Enter number:")

let num = 0
let sum = 0

while (grades != 'exit') {
    grades = Number(grades)
    num++
    sum += grades
    grades = prompt("Enter number:")
}

console.log(`הוזנו סך הכל: ${num} ציונים`)
console.log(" סך כל הציונים: " + sum)

// Task 3- guss שיעור
let guss = 'tal damari'
let counter = 0
let counterTru = 0
let input = prompt('נחש תוים מתוך המחרוזת')

while (counter < 3) {
    if (input.length <= 1 && input.length > 0) {
        if (guss.includes(input)) {
            counterTru++
        }
        counter++

        input = prompt('נחש את התו הבא')
    } else {
        input = prompt('תקן את הניחוש')
    }
}

console.log(`ניחשת ${counterTru} מתוך 4`)

// H.M 3
//Task 1

let num_loop = 0

while (num_loop < 9) {
    num_loop = num_loop + 1
    if (num_loop != 5) {
        console.log(num_loop)
    }
}

//Task 2
let num_loop = -1

while (num_loop < 10) {
    num_loop = num_loop + 1
    if (num_loop % 2 == 0) {
        console.log(num_loop)
    }
}

//Task 3
let num_loop = 0

while (num_loop < 78) {
    num_loop = num_loop + 7
    console.log(num_loop)
}

//Task 4
let num_loop = -3

while (num_loop < 300) {
    num_loop = num_loop + 3
    console.log(num_loop)
}

//Task 5
console.log('*\n* *\n* * *\n* * * *\n* * * * *')

// Bonus 5
var n = prompt('enter')
var i = 1
while (i <= n) {
    console.log("*".repeat(i));
    i = i + 1;
}

//tAsk 6
let num = prompt('Enter number with 3 digits:')

while (num.length != 3) {
    num = prompt('Try again:')
}
console.log('You did it')

//Task 7
let i = 0;
while (i < 9) {
    i = i + 1;
    console.log(i);
}

//Task 8

let num1 = prompt('Enter first number:');
let num2 = prompt('Enter second number:');
let prevNum = 0;

num1 = Number(num1);
num2 = Number(num2);
let sum = num1 + num2;
console.log('Sum of numbers: ' + sum);
if (sum < prevNum) {
    console.log('smaller')
}
prevNum = sum;
while (num1 != 0 || num2 != 0) {
    num1 = prompt('Enter first number:');
    num2 = prompt('Enter second number:');
    num1 = Number(num1);
    num2 = Number(num2);
    sum = num1 + num2;
    console.log('Sum of numbers: ' + sum);
    if (sum < prevNum) {
        console.log('smaller');
    }
    prevNum = sum;

}
console.log('End');



// console.log('Sum of numbers: ' + sum)
// if (sum < min) {
//     console.log('smaller')
//     num1 = prompt('Enter first number again:')
//     num2 = prompt('Enter second number again:')
// } else {
//     num1 = prompt('Enter first number again:')
//     num2 = prompt('Enter second number again:')
// }





// for loops
//1
for (i = 0; i <= 100; i++) {
    console.log(i)
}
//2
for (i = 4; i <= 120; i += 4) {
    console.log(i)
}
//2.2
for (i = 4; i <= 120; i = i++) {
    if (i % 4 === 0) {
        console.log(i)
    }
}

//3
let sum = 0, num;
for (i = 0; i < 5; i++) {
    num = prompt('Enter number:')
    if (isNaN(num) == false) {  //כדי ליצור הפוך על הפוך שאם זה כן מספר נקבל true
        sum += Number(num)
    } else {
        console.log('Erorr')
        break;  //שובר את הלולאה והיא יוצאת
    }
}
console.log('End')


