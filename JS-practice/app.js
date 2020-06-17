//ES6
class Sapien {
    gender = 'male';

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Sapien {
        name = 'Max';
        gender = 'female';


    printMyName = () => {
        console.log(this.name);
    }
}

const p = new Person();
p.printMyName();
p.printGender();


//Spread Operator
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5, 6];
console.log(newArray);

const oldObj = {
    fieldOne: 1,
    fieldTwo: 2,
    fieldThree: 3
}

const newObj = {...oldObj, fieldFour: 4};
console.log(newObj);

//Rest Operator
const filter = (...args) => {
    return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3, 1, 2, 2, 1));

//Destructuring
const [a, ,b] = ['Bob', 'Neat', 'Cool'];
console.log(a);
console.log(b);

const obj = {id: 1, userName: 'scooby', password: 'password'};
const {id, userName, password} = obj;
console.log(id);
console.log(userName);
console.log(password);


//Copy values
const num = 1;
const num2 = num;
console.log(num2);

//Reference
const person = {
    name: 'Bob'
};

// const secondPerson = person;
// person.name = 'Pierce';
// console.log(secondPerson);
console.log(person);

const secondPerson = {
    ...person
}

console.log(secondPerson);

//Array function
const numbers = [1, 2, 3];

const doubleNumArray = numbers.map( (num) => {
    return num * num;
}) // return new array

console.log(doubleNumArray);
