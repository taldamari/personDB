//array= מערכים
let animal = ["lion", "bear", "cat", "dog", "cow", "donky"]

animal[0]                             //>> נותן את החיה שבמיקום 0
animal[animal.length - 1]              //>> נותן את החיה שבמיקום ה

// new array
let x = []
let arr2 = new Array(20);

//add to array
animal.push('bee')                   //הכנסת תא נוסף למערך במיקום אחרון(משנה את המערך המקורי)
animal.unshift('tiger')               //מכניס למיקום ראשון ודוחף את השאר

//remove
animal.pop("")                  // מחליף את האחרון
animal.shift("")                //מחליף את המיקום הראשון

delete animal[3]                //מסיר את הערך במיקום 3

animal.concat()                    //מכניס מערכים אך לא משנה את המערך המקורי (מעתיק את המערך). אם נרצה לשמור אותו נצטרך לפתוח משתנה חדש

animal.push("aaa", ...["bbb", "ccc"])  // שלוש נק' מורידות את המערך הנוסף ומכניס אותו למערך הקיים

//exrecise
// מערך מספרים
// נתון מערך [ 8, 1.6, 0.1, 22, 15,8.8, 54.1, 1000 ]
// 1. הסירו מהמערך את המספרים השלמים והשאירו רק את העשרוניים.
// 2. הציגו מה היה סכום המספרים שהוסרו.
// 3. הדפיסו את המספר הגדול והקטן.

let num = [8, 1.6, 0.1, 22, 15, 8.8, 54.1, 1000]
let sum = 0
const x = num.length
for (i = 0; i < x; i++) {
    if (Number.isInteger(num[i])) {
        sum = sum + num[i]
        num.splice(i, 1)
        i--
    }

}
console.log(num)
console.log(sum);
console.log("max: " + Math.max(...num))
console.log("min: " + Math.min(...num))

// ציונים
// 1. כתבו תוכנית שמבקשת מהמשתמש ציון עד שיתקבל ציון שלילי.
// הוסיפו את הציונים למערך. 

// 2. הדפיסו:
// בכיתה יש ___ תלמידים.
// ממוצע ציונים : ______
// הציון הגבוהה : ______
// הציון הנמוך : _______"

// 3. הדפיסו את רשימת הציונים מהגבוה לנמוך.
let grade = Number(prompt("Enter your grade: "))
let arr = []
let sum = 0

while (grade >= 0 && grade <= 100) {
    x.push(grade)
    sum += grade
    grade = Number(prompt("Enter your grade: "))
}

console.log('In the class there are: ' + x.length + " students");
console.log('The average is: ' + sum / x.length);
console.log('Max grades: ' + Math.max(...x));
console.log('Min grades: ' + Math.min(...x));

console.log(x.sort((a, b) => b - a))


// מתודה - reverse :
// כתבו קוד שמדמה את פונקציית reverse.

let arr = [1, 2, 3, 4, 5]
let arr2 = []
for (i = x.length - 1; i >= 0; i--) {
    arr2.push(x[i])
}
console.log(arr2);



// איבר פופולרי:
// נתון מערך
//  let arr=[8, 'a', 'a', 'a', 12, 8, 'a', 3, 'a', 12, 4, 9, 3]
// עליכם למצוא את האיבר שמופיע הכי הרבה פעמים ולהדפיס בסוף מי האיבר וכמה פעמים מופיע.




//loops

let arr = [a, b, c, d, e, f]

for (i = 0; i < x.length; i++) {
    console.log(x[i]);
}

for (i in x) {                    //נותן את מיקום המערך
    console.log(x[i]);
}

for (v of x) {                    //נותן את הערך בתוך התא לפי ה I
    console.log(v);
}