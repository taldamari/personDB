// פתרון לש.ב בתרגול

let arrAnimalName = []
let arrAnimalCode = []
let code, name1;
let txt1 = "Dog12, CAT3, LiOn7, DolphiN11, fish6 ";
let txt2 = "PIG17, bear29, BiRd8, SNAKE39, donkey14";

formatAnimal(txt1)
formatAnimal(txt2)

let isSuccess = false
let choice = prompt(`Welcome to the zoo data, please choose an option:
1. Search animal by code.
2: Search animal by name.
3: Add animals.
4: Delete animals.`)

switch (choice) {
    case "1":
        code = prompt('Enter code:')
        isSuccess = searchAnimalByCode(code, true)
        break;
    case "2":
        name1 = ('Enter name of animal:')
        isSuccess = searchAnimalByName(name1)
        break;
    case "3":
        code = prompt('Enter code:')
        name1 = ('Enter name of animal:')
        isSuccess = addAnimal(name1, code)
        break;
    case "4":
    case "5":
        isSuccess = true;
        break;
    default:
        console.log('Error');
}

function formatAnimal(inputStr) {
    let strArr = inputStr.split(`, `)
    for (i = 0; i < strArr.length; i++) {
        let str = (strArr[i].slice(0, strArr[i].search(/\d/)))
        let strCode = strArr[i].replace(str, "")
        arrAnimalName.push(str)
        arrAnimalCode.push(strCode)
    }
}

function printToScreen(index) {
    console.log("Animal code: " + arrAnimalCode[index]);
    console.log("Animal name: " + arrAnimalName[index]);
}

function searchAnimalByCode(code, ifPrint) {
    for (i = 0; i < arrAnimalCode.length; i++) {
        if (arrAnimalCode[i] == code) {
            if (ifPrint) {
                printToScreen(i);
            }
            return true
        }
    }
    return false
}

function searchAnimalByName(str) {
    let isFind = false
    for (i = 0; i < arrAnimalName.length; i++) {
        if (String(arrAnimalName[i]).toLowerCase().includes(str.toLowerCase())) {
            printToScreen[i]
            isFind = true
        }
    }
    return isFind
}



function addAnimal(name, code) {
    if (searchAnimalByCode(code)) {
        return false
    }
    arrAnimalName.push(name)
    arrAnimalCode.push(code)
    return true
}

function deleteAnimal() {
    for (i = 0; i < arrAnimalCode.length; i++) {
        if (arrAnimalCode[i] == code) {
            arrAnimalCode.splice(i, 1)
            arrAnimalName.splice(i, 1)
            printToScreen(i);

            return true
        }
    }
    return false
}

