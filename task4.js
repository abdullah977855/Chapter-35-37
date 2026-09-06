function calculator(num1, num2, operator){
    if(operator === "+"){
        let sum = num1 + num2;
        document.write("Sum: " + sum)
    }else if(operator === "-"){
        let subtract = num1 - num2;
        document.write("Subtract: " + subtract)
    }
}

calculator(20, 6, "-");
calculator(20, 6, "+");