const addition = (number1, number2) => {
    if (typeof number1 === 'undefined') {
        throw new Error('Parameter "number1" not set!');
    }
    if (typeof number2 === 'undefined') {
        throw new Error('Parameter "number2" not set!');
    }
    return (parseInt(number1, 10) + parseInt(number2, 10));
}


const substraction = (number1, number2) => {
    if (typeof number1 === 'undefined') {
        throw new Error('Parameter "number1" not set!');
    }
    if (typeof number2 === 'undefined') {
        throw new Error('Parameter "number2" not set!');
    }
    return (parseInt(number1, 10) - parseInt(number2, 10));
}

const division = (number1, number2) => {
    if (typeof number1 === 'undefined') {
        throw new Error('Parameter "number1" not set!');
    }
    if (typeof number2 === 'undefined') {
        throw new Error('Parameter "number2" not set!');
    }
    if (number2 == 0) {
        throw new Error('Not even God can divide by 0!');
    }
    return (parseInt(number1, 10) / parseInt(number2, 10));
}

const multiplication = (number1, number2) => {
    if (typeof number1 === 'undefined') {
        throw new Error('Parameter "number1" not set!');
    }
    if (typeof number2 === 'undefined') {
        throw new Error('Parameter "number2" not set!');
    }
    return (parseInt(number1, 10) * parseInt(number2, 10));
}

const calc = (action, number1, number2) => {
    if (action == "add") {
        return addition(number1, number2);
    }
    if (action == "sub") {
        return substraction(number1, number2);
    }
    if (action == "div") {
        return division(number1, number2);
    }
    if (action == "mult") {
        return multiplication(number1, number2);
    }
}

module.exports =
    function(context, cb) {
        const result = calc(context.data.action, context.data.number1, context.data.number2);
        cb(null, "You successfully tried serverless calculator. Your result is: " + (result || "I can't show your result, because you gave me an invalid values."));
    }