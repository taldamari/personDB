// function tal() {
//     return 'tal';
// }

// console.log(tal());


//return //שובר פונקציה ומחזיר מה שהתבקש

// צרו פונקציות :
// 1. מקבלת מס' מינ' ומס' מקסימום ומחזירה מספר רנדומלי שלם בטווח.


// 2. מקבלת גודל, מס' מינ' ומס' מקסימלי ומחזירה מערך בגודל שקיבלה עם מספרים רנדומליים לפי הטווח.


// 3. שמקבלת 2 מספרים ומחזירה את הסכום שלהם


// 4. פונקציה שמקבלת מערך ומחזירה את סכום כל המספרים שבתוכה.


// פלט: 
// סכום כל המספרים במערך הוא _______.

function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function getArr(len, min, max) {
    let arr2 = []
    for (i = 0; i < len; i++) {
        arr2.push(rand(min, max))
    }
    return arr2

}

function sum(a, b) {
    return (a + b)
}

function sumAll(x) {
    let sum2 = x[0] + x[1]
    for (i = 2; i < x.length; i++) {
        sum2 = sum(sum2, x[i])
    }
    return sum2

}

let arr1 = getArr(5, 1, 10)
let total = sumAll(arr1)
console.log(arr1);
console.log(`total: ${total}`);

