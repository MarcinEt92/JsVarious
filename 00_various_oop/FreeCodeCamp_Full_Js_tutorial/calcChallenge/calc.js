
class ProgramOperations {
    static num1 = document.querySelector("#num1-el");
    static num2 = document.querySelector("#num2-el");

    static fillWithDefaultValues() {
        this.num1.textContent = 10;
        this.num2.textContent = 5;
    }

    static add(number1, number2) {
        let result = number1 + number2;
        document.querySelector("#sum-el").textContent = result;
    }

    static subtract(number1, number2) {
        let result = number1 - number2;
        document.querySelector("#sum-el").textContent = result;
    }

    static divide(number1, number2) {
        let result = number1 / number2;
        document.querySelector("#sum-el").textContent = result;
    }

    static multiply(number1, number2) {
        let result = number1 * number2;
        document.querySelector("#sum-el").textContent = result;
    }

    static clicked(button) {
        let number1 = parseFloat(this.num1.textContent);
        let number2 = parseFloat(this.num2.textContent);

        switch(button.innerText) {
            case "Add":
                ProgramOperations.add(number1, number2);
                break;
            case "Subtract":
                ProgramOperations.subtract(number1, number2);
                break;
            case "Divide":
                ProgramOperations.divide(number1, number2);
                break;
            case "Multiply":
                ProgramOperations.multiply(number1, number2);
                break;
        }
    }

    static WaitForButtonsClick() {
        const buttons = document.querySelectorAll("button");
        for(let button of buttons) {
            button.addEventListener("click", () => {
                ProgramOperations.clicked(button);
            });
        }
    }
}


class Main {
    static run() {
        ProgramOperations.fillWithDefaultValues();
        ProgramOperations.WaitForButtonsClick();
    }
}

Main.run();