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

export function isObject(param) {

      if (!Array.isArray(param)) {
    return false;
  }

    for (let element of param) {
    if (typeof element === "object" && element !== null && !Array.isArray(element)) {
        console.log("Objet:", element);
     }

    }
  return true;
}