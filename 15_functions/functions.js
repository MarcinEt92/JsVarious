(function() {
    "use strict";

    function addNumbers() {
        return 0;
    }

    function changeHtml() {
        document.querySelector("#representation").innerHTML = addNumbers;

        let resultTemplate = `Result of a function call: ${addNumbers()}`;
        document.querySelector("#result").innerHTML = resultTemplate;
    }

    changeHtml();
    
})();