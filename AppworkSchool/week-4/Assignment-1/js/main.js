// Assignment 1: Callback Function
// Complete the function below to show a delayed result in the console.

function delayedResult(n1, n2, delayTime, callback) {
    // your code here
    const sum = n1 + n2;

    setTimeout(() => {
        callback(sum);
    }, delayTime);
}

delayedResult(4, 5, 3000, function (result) {
    console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds
delayedResult(-5, 10, 2000, function (result) {
    window.alert(result);
}); // 5 (-5+10) will be shown in an alert dialog after 2 seconds

// Hint: You should use window.setTimeout() for time scheduling.
