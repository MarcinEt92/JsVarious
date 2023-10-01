class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    getArea() {
        return this.height * this.width;
    }

    printDescription() {
        console.log(`${this.color} rectangle: width: ${this.width}, height: ${this.height} `);
    }
}

class Square {
    constructor(width) {
        this.width = width;
        this.height = width;
        this.color = undefined;
    }

    static equals(s1, s2) {
        return s1.width * s1.height === s2.width * s2.height;
    }

    static areDimensionsValid(width) {
        return width > 0;
    }

    get area() {
        return this.width * this.height;
    }

    set area(value) {
        this.width = Math.sqrt(value);
        this.height = this.width;
    }

    get colour() {
        return this.color;
    }

    set colour(value) {
        this.color = value;
    }

}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    toString() {
        return `${this.name}, age: ${this.age}`;
    }
}

class Programmer extends Person {
    constructor(name, age, yearsOfExperience) {
        super(name, age);
        this.yearsOfExperience = yearsOfExperience;
    }

    toString() {
        return `${super.toString()} working for ${this.yearsOfExperience} years`;
    }

    code () {
        console.log("Code in progress");
    }

    static developSoftware(programmers) {
        programmers.forEach(programmer => programmer.code());

        for (let programmer of programmers) {
            programmer.code();
        }
    }
}

class Program{
    run() {
        this.testRectangleClass();
        this.testSquareClass();
        this.testStaticSquareEquals();
        this.testPersonAndProgrammer();
        this.testDevelop();
    }

    testRectangleClass() {
        console.log("\n\n-------------------- testRectangleClass --------------------\n");
        let rectangle = new Rectangle(1, 2, "red");
        console.log(`Rectangle area is ${rectangle.getArea()}`)
        rectangle.printDescription();
    }

    testSquareClass() {
        console.log("\n\n-------------------- testSquareClass --------------------\n");
        let square = new Square(3);
        square.colour = "red";
        console.log(`Square area: ${square.area}, color: ${square.colour}`);
    }

    testStaticSquareEquals() {
        console.log("\n\n-------------------- testSquareClass --------------------\n");
        let square1 = new Square(3);
        let square2 = new Square(3);
        console.log(`Are squares equal: ${Square.equals(square1, square2)}`);
    }

    testPersonAndProgrammer() {
        console.log("\n\n-------------------- testPersonAndProgrammer --------------------\n");
        const markPerson = new Person("Mark", 34);
        const steveProgrammer = new Programmer("Steve", 43, 3);
        console.log(`Display Mark: ${markPerson.toString()}`);
        console.log(`Display Steve: ${steveProgrammer.toString()}`);
    }

    

    testDevelop() {
        console.log("\n\n-------------------- testDevelop --------------------\n");
        let programmers = [
            new Programmer("Steve", 33, 1),
            new Programmer("Mark", 34, 2)
        ];

        Programmer.developSoftware(programmers);
    }
}

program = new Program();
program.run();


