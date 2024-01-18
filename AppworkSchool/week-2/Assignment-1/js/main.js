function max(numbers) {
    // your code here
    let maxNum = 0;

    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] > maxNum) {
            maxNum = numbers[index];
        }
    }

    return maxNum;
}
console.log(max([1, 2, 4, 5])); // expected output: 5
console.log(max([5, 2, 7, 1, 6])); // expected output: 7
