function calculateHypotenuse(base, perpendicular) {

    function calculateSquare(num) {
        return num * num;
    }

    var hypotenuse = Math.sqrt(
        calculateSquare(base) + calculateSquare(perpendicular)
    );

    return hypotenuse;
}

document.write("Hypotenuse = " + calculateHypotenuse(3, 4));