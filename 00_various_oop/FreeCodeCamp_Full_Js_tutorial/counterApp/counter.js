
class ButtonOperations {
    static count = 0;
    static previousEntries = "Previous Entries";

    static increment() {
        ButtonOperations.count++;
        document.querySelector("#count-el").innerText = ButtonOperations.count;
    }

    static save() {
        console.log(`Counter Value: ${ButtonOperations.count}`);
        ButtonOperations.previousEntries += ` - ${ButtonOperations.count}`;
        document.querySelector("#save-el").textContent = ButtonOperations.previousEntries;
        ButtonOperations.reset();
    }

    static reset() {
        ButtonOperations.count = 0;
        document.querySelector("#count-el").innerText = ButtonOperations.count;
    }

    static waitForIncrementButtonClick() {
        const incrementButton = document.querySelector("#increment-btn");
        incrementButton.addEventListener("click", ButtonOperations.increment);
    }

    static waitForSaveButtonClick() {
        const saveButton = document.querySelector("#save-btn");
        saveButton.addEventListener("click", ButtonOperations.save);
    }
}

class Main {
    static run() {
        ButtonOperations.waitForIncrementButtonClick();
        ButtonOperations.waitForSaveButtonClick();
    }
}

Main.run();
