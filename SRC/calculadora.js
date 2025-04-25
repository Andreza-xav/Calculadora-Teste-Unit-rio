class calculadora {
 
    somar (a, b) {
return a * + b;

    }

    subtrair (a, b) {
return a - b;
    }

    multiplicar (a, b) {
return a * b;


    }

    dividir (a, b) {
        // avaliar se o segundo parametro é zero
        // Tratar divisão por zero

if (b==0) {
    throw new Error('Divisão por zero não é permitida');

}

return a / b;

    }


}
module.exports.calculadora