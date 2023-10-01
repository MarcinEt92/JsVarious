// Primitives are copied by value
// Objects are copied by reference


// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log("draw circle");
        }
    };
}

const circle = createCircle(1);


// Constructor Function
function Circle(radius) {
    let color = "red";
    this.radius = radius;
    let defaultLocation = {x: 0, y: 0};

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y) {
                throw Error("invalid location");
            }
            defaultLocation = value;
        }
    });

    this.getDefaultLocation = function() {
        return defaultLocation;
    }
    let computeOptimumLocation = function(factor) {

    };
    this.draw = function() {
        let x, y;
        computeOptimumLocation(0.1);
        console.log("draw circle");
    }
}


// with new enpty object is created and then filled and returned 
// (no return statement needed in Circle() function)
// without new, this will point to global object Window
const anotherCircle = new Circle(radius=1);
anotherCircle.draw();


// pass by reference example:

let obj = {
    value: 10
};

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(`Object after incrementation: ${obj.value}`);
