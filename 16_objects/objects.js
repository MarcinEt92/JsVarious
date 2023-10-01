function createCarObject() {
    const car = {
        brand: "Fiat",
        model: "500",
        year: 2018,
        color: "white",
        fullName: function() {
            return `${this.brand} ${this.model}`;
        }
    }

    return car;
}

function testCreateCarObject() {
    const car = createCarObject();
    carTemplate = `${car.color} ${car.fullName()}, built in ${car.year}`;
    console.log(carTemplate);
}


console.log("\n========== testCreateCarObject ==========\n");
testCreateCarObject();
