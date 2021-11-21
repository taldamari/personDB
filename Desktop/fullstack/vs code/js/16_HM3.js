
////////////////// first functions ///////////////////

function inputPerson() {
    return {
        firstName: first_name(),
        lastName: last_name(),
        id: id_number(),
        city: residence_city(),
        birthDay: birth_day(),
        idParents: id_parent(),
    }
}

function first_name() {
    let fName = prompt('Enter your first name: ').toLocaleLowerCase()
    if (fName.length == 0 || properName(fName)) {
        return first_name()
    } else {
        return fName
    }
}

function last_name() {
    let lName = prompt('Enter your last name: ').toLocaleLowerCase()
    if (lName.length == 0 || properName(lName)) {
        return last_name()
    } else {
        return lName
    }
}

function id_number() {

    let id = prompt('Enter your ID number: ')
    if (dataBasePerson.find(v => v.id == id)) {
        let msg = "ID number already exists"
        alert(msg)
        return id_number()
    } else {
        if (id.length == 9 && justNumber(id)) {
            return id
        } else {
            alert('Incorrect ID number')
            return id_number()
        }
    }
}

function residence_city() {
    let city = prompt('Enter a city of residence: ').toLocaleLowerCase()
    if (city.length == 0 || properName(city)) {
        return residence_city()
    } else {
        return city
    }
}

function birth_day() {
    let day = prompt('Enter your birth day (in format of two numbers): ')
    let month = prompt('Enter your birth month (in format of two numbers): ')
    let year = prompt('Enter your birth year (in format of four numbers): ')
    let fullDate;
    if (day.length == 2 && day <= 31 && day >= 1
        && month.length == 2 && month >= 1 && month <= 12
        && year.length == 4 && year <= new Date().getFullYear()
        && justNumber(day, month, year)) {
        fullDate = `${day}/${month}/${year}`
        return fullDate
    } else {
        alert("Date of birth must be entered in numbers only and in the following format- dd/mm/yyyy")
        return birth_day()
    }
}

function id_parent() {
    let id = prompt("Enter your parent's ID number: ")
    if (id.length == 9 && justNumber(id)) {
        if (dataBasePerson.some(v => v.idParents == id)) {
            return id
        } else {
            alert("Parents dosn't exict")
            id_parent()
        }
    }
    else if (id.length == 0) {
        let msg = "No parent's"
        return msg
    }
    else {
        alert('Incorrect ID number')
        return id_number()
    }
}

function addPerson(arr) {
    let person = inputPerson()
    arr.push(person)
    return alert("The person was inserted.")
}

////////////////// second functions//////////////
function justNumber(num) {
    let justNum = /^\d+$/.test(num);
    if (justNum) {
        return num
    }
}


// מחזירה true אם הסטרינג מכיל מספר
function properName(str) {
    return /\d/.test(str)
}

function today() {
    let today = new Date().toLocaleDateString()
    return today
}


// function correctID(input) {
//     if (input.value.length == 9) {
//         alert("Error value.");
//         return false;
//     }
//     return true;
// }


///////////////////// search functions ////////////////////////
// function required(input) {
//     if (input.length == 0) {
//         alert("Please enter the required value.");
//         return inputPerson();
//     }
//     return true;
// }


//פונקציה לבדיקה אם הערך קיים במאגר
// function ifItFind (value){
// dataBasePerson.filter((v) => v.includes(value))
// }




function delete_person() {
    let deletePerson = dataBasePerson.map(v => v.id).indexOf(user_id);
    if (deletePerson)
        dataBasePerson.splice[deletePerson]
}

// function ask(question, yes, no) {
//     let result = confirm(question)
//     if (result) {
//         yes()
//     } else {
//         no()
//     }
// }

/////////////////search////////////////////////////

function searchPersonByID() {
    let sID = prompt('Enter ID number for search: ')
    let searchPersonID = dataBasePerson.find(v => v.id == sID) //? alert(printPerson(searchPersonID)) : alert("dosn't found");
    if (searchPersonID) {
        printPerson(searchPersonID)
    } else {
        alert("dosn't found")
    }
}

function searchPersonByName() {
    let sName = prompt('Enter value for search: ').toLowerCase()
    let searchPerson = dataBasePerson.filter(v => (v.firstName.includes(sName)) || (v.lastName.includes(sName)))
    if (searchPerson) {
        let p = ""
        for (i = 0; i < searchPerson.length; i++) {
            p += printPerson(searchPerson[i])
        }
    } else {
        alert("dosn't found")
    }
}

function findChildren(question, yes, no) {
    let result = confirm(question)
    if (result) {
        yes()
    } else {
        no()
    }
}
////////////////// print person /////////////////////////
function capitlLetter(input) {
    let value = input.charAt(0).toUpperCase() + input.substring(1);
    return value
}

function age(searchResult) {
    let year = Number(searchResult.birthDay.slice(6, 10))
    let month = Number(searchResult.birthDay.slice(3, 4))
    let age = (`Year: ${(new Date().getFullYear()) - year} and month: ${(Math.abs(new Date().getMonth()) - month + 1)}`)
    return age
}

function printPerson(searchResult) {
    return alert
        (`Full name: ${capitlLetter(searchResult.firstName)} ${capitlLetter(searchResult.lastName)}.
    ID number: ${searchResult.id}
    Age: ${age(searchResult)}`)
}


//     let print = confirm("Do you want to print childrends?")? alert (printPerson(dataBasePerson.find(v => v.idParents == sID))): 
// }

///////////////////////////////////////////////////
let dataBasePerson = [
    { firstName: 'tal', lastName: 'damari', id: '123456789', city: 'kohav', birthDay: '22 / 11 / 1987', idParents: '369852147' },
    { firstName: 'ariel', lastName: 'damari', id: '135712345', city: 'kohav', birthDay: '29 / 05 / 1986', idParents: '147852369' },
    { firstName: 'dvir', lastName: 'damari', id: '567878945', city: 'kohav', birthDay: '16 / 12 / 2010', idParents: '123456789' },
    { firstName: 'ariel', lastName: 'damari', id: '135712345', city: 'kohav', birthDay: '29 / 05 / 1986', idParents: '147852369' },
    { firstName: 'or', lastName: 'damari', id: '159798745', city: 'kohav', birthDay: '19 / 05 / 2013', idParents: '135712345' },
    { firstName: 'malachi', lastName: 'damari', id: '114778965', city: 'kohav', birthDay: '05 / 04 / 2016', idParents: '135712345' },
    { firstName: 'shir', lastName: 'damari', id: '225412478', city: 'kohav', birthDay: '23 / 03 / 2021', idParents: '123456789' },
]

let choice = 0
while (choice != 4) {

    choice = prompt(`Welcome to the persons DB, please choose an option:
[1] Add person.
[2] Search person by ID.
[3] Search person by name
[4] Exit`)

    switch (choice) {
        case "1":
            addPerson(dataBasePerson);
            console.table(dataBasePerson)
            break;
        case "2":
            searchPersonByID()
            break;
        case "3":
            searchPersonByName()
        case "4":
            break;
        default: alert('Error')
    }
}


    // function creatPerson(f, l, id, c, b, idp) {
    //     return {
    //         firstName: f,
    //         lastName: l,
    //         id: id,
    //         city: c,
    //         birthDay: b,
    //         idParents: idp,
    //     }
    // }

    // let p1 = dataBasePerson.push(creatPerson("tal", 'damari', "1234", "kohav", '22 / 11 / 1987', '5678'))
    // let p2 = dataBasePerson.push(creatPerson("ariel", 'damari', "1357", "kohav", '29 / 05 / 1986', '2589'))
    // let p3 = dataBasePerson.push(creatPerson("dvir", 'damari', "5678", "kohav", '16 / 12 / 2010', '1234'))
    // let p4 = dataBasePerson.push(creatPerson("or", 'damari', "1597", "kohav", '19 / 05 / 2013', '1357'))
    // let p5 = dataBasePerson.push(creatPerson("malachi", 'damari', "1147", "kohav", '05 / 04 / 2016', '1357'))
    // let p6 = dataBasePerson.push(creatPerson("shir", 'damari', "2254", "kohav", '23 / 03 / 2021', '1357'))
