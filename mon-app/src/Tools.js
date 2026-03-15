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

export function isObject(x) {
    if (!Array.isArray(x)) return;
    for (let element of x) {
    if (
        typeof element === "object" && 
        element !== null &&
        Object.keys(element).length > 0 &&
        !Array.isArray(element)
            ) {
                console.log("Objet:", element);
            }
  }
  return false;
}