export function plus(operator, firstValue, secondValue, result, setResult) {
    if (operator === "+") {
        setResult(firstValue + secondValue)
    }
}
export function multiply(operator, firstValue, secondValue, result, setResult) {
    if (operator === "*") {
        setResult(firstValue * secondValue)
    }
}
export function divide(operator, firstValue, secondValue, result, setResult) {
    if (operator === "/") {
        setResult(firstValue / secondValue)
    }
}
export function minus(operator, firstValue, secondValue, result, setResult) {
    if (operator === "-") {
        setResult(firstValue - secondValue)
    }
    return;
}