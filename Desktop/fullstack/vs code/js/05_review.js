//task 1
let color = prompt("Enter color: ")

let msg = (color == "red") ? "Stop" :
    (color == "green") ? "Go" :
        (color == "orange") ? "Slowly" :
            "error color"

console.log(msg);


//task 2
// 2. כתבו תוכנית המדמה חיישן מהירות.
// קלטו מהירות של המכונית והדפיסו:
// עד 40 - סע כבר!
// עד 80 - נסיעה טובה!
// עד 120 - האט!
// מעל - עצור מיד!


let speed = Number(prompt("Enter speed:"));
let msg = (speed <= 40) ? "סע כבר" :
    (speed > 40 && speed <= 80) ? "נסיעה טובה" :
        (speed > 80 && speed <= 120) ? "האט" :
            (speed > 120) ? "עצור מיד" :
                "Error"

console.log(msg);

//task 3
let num1 = Number(prompt("Enter number 1:"))
let num2 = Number(prompt("Enter number 2:"))
let num3 = Number(prompt("Enter number 3:"))

let max = (num1 >= num2 && num1 >= num3) ? num1 :
    (num2 >= num1 && num2 >= num3) ? num2 :
        (num3 >= num1 && num3 >= num2) ? num3 :
            "Error"

console.log(max)


//task
// קלטו שם משתמש, שם פרטי ושם משפחה (אופציונלי).


// הדפיסו "שלום ___________" >> 
// הסדר : 
// שם משתמש >> שם פרטי >> שם משפחה >> "anonymous"


// אתגר
// ---------------
// להקפיץ פלט (alert) של 1 ואז 2 ואז 3 בשורת קוד אחת.

let user_name = prompt("הזן שם משתמש:")
let first_name = prompt('הזן שם פרטי:')
let last_name = prompt('הזן שם משפחה:')

console.log(`Hello ${user_name || first_name || last_name || 'Anonymous'} `)

//הוא מחזיר את הערך הראשון שהוא true
// אם עושים && יחזיר את ההערך פולס הראשון

alert(1) || alert(2) || alert(3)

//loops
let num;
for (i = 0; i < 1000; i++) {
    num = Number(prompt)
    if (num == 'exit') {
        break;
    }
    if (!isNaN(num)) {
        continue;
    }
}
console.log('END');

//נבדוק האם יש בתוך המחרוזת מספר

//'AVIAD'[2] >> מיקום המילה בשרשור
// קלטו מחרוזת מהמשתמש.


// בנו תפריט :
// (1) - הדפיסו אות אות.
// (2) - הדפיסו את המחרוזת הפוך.


// (3) - הדפיסו אם המחרוזת היא פלינדרום. (בונוס)


// (4) - הדפיסו האם המחרוזת מכילה מספר כלשהו.

let word = prompt('Enter some word: ')

let choose = prompt(`Choose option
(1)
(2)
(3)
(4)`)

let n = word.length
if (choose == 1) {
    for (i = 0; i < word.length; i++) {
        console.log(word[i]);
    }
}
else if (choose == 2) {
    let x = "";
    for (n; n > 0; n--) {
        x += word[n - 1];
    }
    console.log(x);
}
else if (choose == 3) {
    let x = "";
    for (n; n > 0; n--) {
        x += word[n - 1];
    }
    if (x == word) {
        console.log("It's palindrom");
    } else {
        console.log("Not palindrom");
    }
}
else if (choose == 4) {
    let ans = "The word dosn't includes number"
    for (i = 0; i < n; i++) {
        if (!isNaN(word.charAt(i))) {
            ans = 'The word includes number'
            break;
        }
    }
    console.log(ans)


} else {
    console.log('Error');
}








