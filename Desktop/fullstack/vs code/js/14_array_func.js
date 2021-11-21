let names = ['neriel', 'avia', 'eli', 'tal']


// פונקציה שמבקשת פונקציה

// Find
// let result = names.find(value => value.length == 3)

let result = names.find((value, index) => (value.length == 3 && index % 2 !== 0))
console.log(result);


// ימשיך לרוץ רק כאשר התשובה פולס, אם יוצא טרו- יצא מהפונקציה


//Filter
let char = 'i'
let result2 = names.filter((v) => v.includes(char))
console.log(result2);

//Map
let res = names.map((v, i, arr) => v.toUpperCase())
console.log(res);

// צרו מערך עם מספרים.
// 1. הדפיסו את המספרים שגדולים מ-150.
// 2. הדפיסו מערך ובה אורך כל המספרים בצורה הבאה :   מספר | אורך
// 3. להדפיס את המספרים שאורכם גדול מ-2
// 4. להדפיס האם קיים מס' 770.
// 5. אם המספר המקורי היה זוגי הכפילו ב 2 אי זוגי הכפילו ב 3

//1
let num = [-5, 0, 1, 5, 10, 15, 30, 60, 100, 140, 200, 220, 300, 770, 1000]
console.log(num);
// num.filter(v => v > 150).forEach(v => console.log(`~~~ ${v} ~~~`))


// //2
// num.forEach(v => console.log(`$$$ ${v} | ${String(v).length} $$$ `));

// //3
// num.filter(v => String(v).length > 2).forEach(v => console.log(`## ${v} ##`))

// //4
// // num.some(v => v == 770)
// console.log((num.some(v => v == 770)) ? `Found` : `Dosn't found`);

//5
console.log(num.map(v => v % 2 == 0 ? v * 2 : v * 3))


// console.log(num.every(v => v >= 1))