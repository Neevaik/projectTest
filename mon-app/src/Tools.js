export function calcul(operator, firstValue, secondValue, result, setFirstValue, setSecondValue, setResult) {

    if (operator === "+") {
        setResult(firstValue + secondValue)
        console.log("le résultat est : ", result)
    }

    if (operator === "*") {
        setResult(firstValue * secondValue)
        console.log("le résultat est : ", result)
    }

    if (operator === "/") {
        setResult(firstValue / secondValue)
        console.log("le résultat est : ", result)
    }

    if (operator === "-") {
        setResult(firstValue - secondValue)
        console.log("le résultat est : ", result)
    }
}