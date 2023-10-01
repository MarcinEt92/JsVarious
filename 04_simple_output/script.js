(function() {
    "use strict";

    document.querySelector(".equation").innerHTML = "some Text";

    // another way of writing the output
    //document.write(5 + 6);

    document.querySelector(".button").addEventListener("click", () => {
        document.write("New content");
        // alert(1 == "1"); true
        // alert(1 === "1"); false
    });
})();

