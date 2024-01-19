function calculate(args) {
    let value = Object.values(args);

    switch (value[2]) {
        case "+":
            return value[0] + value[1];
        case "-":
            return value[0] - value[1];
        case "*":
            return value[0] * value[1];
        case "/":
            return value[0] / value[1];
        default:
            return `Not supported`;
    }
}
console.log(calculate({ n1: 2, n2: 3, op: "+" })); // expected output: 5
console.log(calculate({ n1: 5, n2: 2, op: "-" })); // expected output: 3
console.log(calculate({ n1: 5, n2: 2, op: "/" })); // expected output: 3
console.log(calculate({ n1: 5, n2: 2, op: "-" })); // expected output: 3
console.log(calculate({ n1: 5, n2: 2, op: "*" })); // expected output: 3
console.log(calculate({ n1: 1, n2: 6, op: "x" })); // expected output: 'Not supported'
