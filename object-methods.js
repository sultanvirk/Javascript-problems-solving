var person = {
    name: "xyz",
    age: 12
}

// To access key values from an object we need to use objName.keyName
// Example :-
console.log(person.name) // To get the name property

// If we need to change the values of some property
// Example :-

person.name = 'abc' // reassiogning values
console.log(person.name) // Now the name is equals to abc

// to print all data of object
for (let key in person) {
    console.log(key + ' : ' + person[key])
}

// *** Important *** : When we declare a variable using const, it becomes a constant (non-changeable) variable. However, if we use const to declare an array or object, the variable itself remains constant, but its properties can still be modified. This is because the constancy applies to the variable declaration, not necessarily to the values contained within arrays or objects.


// Delete a key value from object\

delete person.age // age is deleted
console.log(person.age) // It will return undefined

// if we want the value in true/false
console.log('age' in person)  // It will return true false values

// Create an array in an object
var person = {
    name: "xyz",
    age: 12,
    hobbies: ['Football', 'Planting', 'Programming',
        'Reading Marvel Comics'
    ],
    living: { // when we need to declare an object into an object we need to use quots for keys also.
        'city': 'Okara',
        'country': 'Pakistan'
    },
    // Declearing function in key
    salary : function(){
        return this.name+ " " +2000
    }
}

//  to access specific value from array we use indexing
console.log(person.hobbies[2])
console.log(person.hobbies.filter((val) => val))

// Accessing object values
console.log(person.living.country)
const internalObjectValues = person.living
// Access all properties of internal object
for(let key in internalObjectValues){
    console.log(`key ${key} = ${internalObjectValues[key]}`)
}

// Access salary key
console.log(`salary : ${person.salary()}`)

// Access all properties of person object
for(let key in person){
    console.log(`Parent Object : ${key} = ${person[key]}`)
}

//  How to takel nested object [object, object] and function problems
for (let key in person) {
    if (typeof person[key] === 'function') {
        console.log(`key ${key} = ${person[key]()}`);
    } else if (typeof person[key] === 'object' && !Array.isArray(person[key])) {
        console.log(`key ${key} = ${JSON.stringify(person[key])}`);
    } else {
        console.log(`key ${key} = ${person[key]}`);
    }
}