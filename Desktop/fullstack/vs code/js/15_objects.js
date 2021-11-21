let person = {
    fullName: 'tal damari',
    age: 34,
    isFather: true,
    childrens: [aa, ff, gg],
}

//ימצא לי מה ממופיע בתוך הערך 
person.age
person['age']
person['childrens'][0]

// הכנסת ערך נוסף
person.city = 'jerusalem'
person["city"] = 'jerusalem'


function createPerson(fname, age, isfather) {
    let person = {
        fullName: fname,
        age: age,
        isFather: isfather,
    }
    return person
}
let p1 = createPerson('omer adam', 20, false)


function Person(fname, age, isfather) {
    this.fullName = fname;
    this.age = age;
    this.isFather = isfather;
}

let p3 = new person('name', 'age', true)

