//Menu
function menu(animal) {

    let menu_choice = prompt("Welcome to the zoo's database.\nchoose your option: \n [1] search animal by code number. \n [2] Search animal by name \n [3] Enter new animal to the list \n [4] Delete animal from list \n [5] exit")
    switch (menu_choice) {
        case '1':
            console.log("Search animal by code");
            codeAnimal(animal)
            break;
        case '2':
            console.log("Search animal by name");
            nameAnimal(animal)
            break;
        case '3':
            console.log('Enter new animal to the list');
            newAnimal(animal)
            break;
        case '4':
            console.log('Delete animal from list');
            deleteAnimal(animal)
            break;
        case '5': //exit
            console.log("Bye bye");
            return
            break;
        default:
            console.log("Error! wrong number.");
            break;
    }
    menu(animal)
}

//search by codeS
function codeAnimal(animal) {
    let code_output = "Animal dosn't found"
    let code = Number(prompt('Enter animal code: '))

    for (i = 0; i < animal.length; i++) {

        if (animal[i].endsWith(code)) {
            let animal2 = animal[i].replace(code, "")
            code_output = ("Animal code: " + code + ".  \nAnimal name:" + animal2 + ".");
            break;
        }
    }
    console.log(code_output)
}

//search by name
function nameAnimal(animal) {
    let name_output = ""
    let animal_name = prompt('Enter name of animal for search:')
    animal_name = animal_name.toLowerCase()
    console.log(`Name for search: ${animal_name}. `)

    for (i = 0; i < animal.length; i++) {
        if (animal[i].includes(animal_name)) {
            let cut_code = animal[i].replace(animal[i].match(/\d+/), "")
            name_output += (`Animal that found: ${cut_code}. code: ${animal[i].match(/\d+/)}. \n`);
        }
    }
    console.log(name_output)
}

// Add animal
function newAnimal(animal) {
    let new_animal = prompt("Enter new animal to the list:")
    let new_code = prompt("Enter new code to the animal:")
    new_animal = new_animal.toLowerCase()

    for (i = 0; i < animal.length; i++) {
        let cut_num = animal[i].match(/\d+/)
        if (new_code == cut_num) {
            console.log("Error, code animal exist already");
            return
        }
    }
    animal.push(new_animal + new_code)
    console.log("The new animal got in to the list.")
}

// delete animal
function deleteAnimal(animal) {
    let new_code = prompt("Enter code to delete animal:")

    for (i = 0; i < animal.length; i++) {
        let cut_num = animal[i].match(/\d+/)
        if (new_code == cut_num) {
            console.log(`${animal[i]} deleted`);
            delete animal[i]
            return
        }
    }
    console.log("Error, code animal dosn't exist")

}
// Start menu
let txt1 = "Dog12, CAT3, LiOn7, DolphiN11, fish6";
let txt2 = "PIG17, bear29, BiRd8, SNAKE39, donkey14";
let animal = (txt1 + "," + txt2).toLowerCase().split(",")
menu(animal)