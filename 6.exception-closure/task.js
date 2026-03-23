function parseCount(value) {
    if (isNaN(parseFloat(value))) {
        throw new Error("Невалидное значение");
    } else {
        return parseFloat(value);
    }
}
function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(firstSide, secondSide, thirdSide) {
        if (firstSide + secondSide > thirdSide && secondSide + thirdSide > firstSide &&
            thirdSide + firstSide > secondSide) {
            this.firstSide = firstSide;
            this.secondSide = secondSide;
            this.thirdSide = thirdSide;
        } else {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    get perimeter() {
        return this.firstSide + this.secondSide + this.thirdSide;
    }
    get area() {
        let semiperimeter = this.perimeter / 2;
        return Number(Math.sqrt(semiperimeter * (semiperimeter - this.firstSide) * 
            (semiperimeter - this.secondSide) * (semiperimeter - this.thirdSide)).toFixed(3));
    }
}

function getTriangle(firstSide, secondSide, thirdSide) {
    try {
        return new Triangle(firstSide, secondSide, thirdSide);
    } catch (error) {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
            get area() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}