//Task 1

let fruit = 'applE, BanaNa, Kiwi, AvOCado, CheRry, FiGs, LeMon, GrapEs'
let lower_fruit = fruit.toLowerCase()
let final_fruit = lower_fruit.split(", ")
console.log(final_fruit);
let fruit_len = final_fruit.length

let ans = ""
for (i = 0; i < fruit_len; i++) {

    let word_fruit = final_fruit[i].charAt(0).toUpperCase() + final_fruit[i].slice(1);

    ans += `${word_fruit}|${word_fruit.length} `
}
console.log(ans);

//Task 2

let my_word = 'tal damari'
let i = 0
let sum_ans = 0
while (i < 4) {

    let guess = prompt('Enter one letter as your guess: ')

    if (guess.length != 1) {
        console.log("Error! you need to enter one letter, try again");
        continue;
    }
    guess = guess.toLowerCase();
    if (my_word.includes(guess)) {
        sum_ans++

    }
    i++
}
console.log('Your guess: ' + sum_ans + '/4 correct');

//Task 3

let row = ""
for (i = 1; i <= 10; i++) {
    for (j = 1; j <= 10; j++) {
        let num = String(i * j)
        if (num.length == 1) {
            row += i * j + "  "
        }
        else {
            row += i * j + " "
        }
    }
    console.log(row);
    row = ""
}
//Task 3 bonus

let row = ""
for (i = 1; i <= 100; i++) {
    for (j = 1; j <= 10; j++) {
        let num = String(i * j)
        if (num.length == 1) {
            row += i * j + "   "
        }
        else if (num.length == 2) {
            row += i * j + "  "
        } else {
            row += i * j + " "
        }
    }
    console.log(row);
    row = ""
}

//Task 4

let row = ""
for (i = 1; i <= 10; i++) {
    for (j = 1; j <= 10; j++) {
        let num = String(i * j)
        if (num.includes('8')) {
            num = 'boom'
        }
        if (num.length == 1) {
            row += i * j + "    "
        }
        else if (num.length == 2) {
            row += i * j + "   "
        } else {
            row += num + " "
        }
    }
    console.log(row);
    row = ""
}

//Math mision
let num = Number(prompt('Enter any number:'))
let max = Number(prompt('Enter a maximum number:'))
let min = Number(prompt('Enter a minimum number:'))

while (min > max || isNaN(num)) {
    console.log('Error: try again');
    num = prompt('Enter any number:')
    max = prompt('Enter a maximum number:')
    min = prompt('Enter a mini mum number:')
}

for (i = 0; i < num; i++) {
    let output = Math.floor(Math.random() * (max - min) + min)
    console.log(output);
}
