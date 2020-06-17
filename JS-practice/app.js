class Sapien {
    constructor() {
        this.gender = 'male';
    }

    printGender() {
        console.log(this.gender);
    }
}

class Person extends Sapien {
    constructor() {
        super();
        this.name = 'Max';
        this.gender = 'female';
    }

    printMyName() {
        console.log(this.name);
    }
}

const p = new Person();
p.printMyName();
p.printGender();