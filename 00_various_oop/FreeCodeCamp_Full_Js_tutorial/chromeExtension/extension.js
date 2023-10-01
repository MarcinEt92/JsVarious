class Program {

    static myLeads = Program.loadFromLocalStorage();

    static save(value) {
        Program.updateMyLeadsIfValid(value);
        Program.clearContent();
        window.localStorage.setItem("myLeads", JSON.stringify(Program.myLeads));
        Program.renderItems();
    }

    static saveInput() {
        const inputValue = document.querySelector("#input-el").value;
        Program.save(inputValue);
    }

    static saveTab() {
        // this works only only as an extension
        // chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        //     Program.save(tabs[0].url);
        // });
        const locationUrl = window.location.href;
        Program.save(locationUrl);
    }

    static deleteAll() {
        window.localStorage.clear();
        Program.myLeads = [];
        Program.renderItems();
    }

    static updateMyLeadsIfValid(value) {
        if (!value == ""){
            Program.myLeads.push(value);
        }
    }

    static clearContent() {
        const element = document.querySelector("#ul-el");
        element.value = "";
        element.innerHTML = "";
    }

    static renderItems() {
        const myLeadsStorageArray = Program.loadFromLocalStorage();
        const ulEl = document.querySelector("#ul-el");
        Program.clearContent(ulEl);
        
        for (let item of myLeadsStorageArray) {
            let listItem = document.createElement("li");
            let linkElement = Helpers.createLinkTag(item);
            listItem.appendChild(linkElement);
            ulEl.appendChild(listItem);
        }
    }

    static loadFromLocalStorage() {
        let data = JSON.parse(window.localStorage.getItem("myLeads"));
        if (data === null) {
            return [];
        }
        return data;
    }

    static saveOnClick() {
        document.querySelector("#input-btn").addEventListener("click", Program.saveInput);
    }

    static saveOnTabClick() {
        document.querySelector("#tab-btn").addEventListener("click", Program.saveTab);
    }

    static deleteOnDbClick() {
        document.querySelector("#delete-btn").addEventListener("dblclick", Program.deleteAll);
    }
}

class Helpers {
    static createLinkTag(title) {
        let linkTag = document.createElement("a");
        let link = document.createTextNode(title);
        linkTag.appendChild(link);
        linkTag.title = title;
        linkTag.href = title;
        linkTag.target = '_blank';
        
        return linkTag;
    }
}

class Main {
    static run() {
        Program.renderItems();
        Program.saveOnClick();
        Program.deleteOnDbClick();
        Program.saveOnTabClick();
    }
}


Main.run();
