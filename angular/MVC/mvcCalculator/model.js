app.factory("factory", () => {
    console.log("in factory");
    var object = {
        addition(num1, num2) {
            var result = parseInt(num1) + parseInt(num2);
            console.log("in addition", result)
            return result;
        },
        subtraction(num1, num2) {
            var result = parseInt(num1) - parseInt(num2);
            return result;
        },
        multiplication(num1, num2) {
            var result = parseInt(num1) * parseInt(num2);
            return result;
        },
        division(num1, num2) {
            var result = parseInt(num1) / parseInt(num2);
            return result;
        },
    }
    return object;
});
