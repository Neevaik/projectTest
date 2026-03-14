export function plus(operator, firstValue, secondValue, setResult) {
    if (operator === "+") {
        setResult(firstValue + secondValue)
    }
}
export function multiply(operator, firstValue, secondValue, setResult) {
    if (operator === "*") {
        setResult(firstValue * secondValue)
    }
}
export function divide(operator, firstValue, secondValue, setResult) {
    if (operator === "/") {
        setResult(firstValue / secondValue)
    }
}
export function minus(operator, firstValue, secondValue, setResult) {
    if (operator === "-") {
        setResult(firstValue - secondValue)
    }
    return;
}
export function isArray(param) {
  return Array.isArray(param) && param.length > 0;
}
