let arr = []              // פתיחת מערך בגודל הרצוי
arr[30] = 'dog'

console.log(arr[30]);

// for (i in arr) { }                //יודע לרוץ רק בתאים המלאים
// for (i of arr) { }                    //ירוץ על כל התאים במערך


//  חילוץ מספר וסטרינג דרך 1
// let d = 'dog12'                 
// let code, n;
// for (i in d) {
//     if (!isNaN(d[i])) {
//         n = d.slice(0, i)
//         code = d.slice(i)
//         break;
//     }
// }

//  (חילוץ מספר וסטרינג דרך 2- (יותר טובה
let code = n = "";
let d = "dolfin11"

// פונקציה שמחלצת שם וקוד
function splitAnimal(animal) {
    for (c of animal) {
        if (isNaN(c)) {
            n += c
        }
        else {
            code += c
        }
    }
    setNewAnimal(Number(code), n)
}


// מכניסה חיה למיקום
function setNewAnimal(code, n) {
    animals[code, n]
}