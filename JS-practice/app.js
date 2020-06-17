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



