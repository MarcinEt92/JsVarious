class ListBinding {
    constructor(listElement) {
        this.listElement = listElement;
        this.textList = [
            "first element",
            "second element"
        ];

    }

    static createListItem(text) {
        const li = document.createElement("li");
        li.textContent = text;
        return li;
    }

    update() {
        // remove all existing elements
        while(this.listElement.firstChild) {
            this.listElement.removeChild(this.listElement.firstChild);
        }
        
        // fill order list with elements
        for(const text of this.textList) {
            this.listElement.appendChild(ListBinding.createListItem(text));
        }
    }

    add(text) {
        this.textList.push(text);
        this.update();
    }

    remove(index) {
        const howManyToRemove = 1
        this.textList.splice(index, howManyToRemove);
        this.update();
    }
}

const myList = document.querySelector("#myList");
const listBinding = new ListBinding(myList);
