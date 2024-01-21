function twoSum(nums, target) {
    // your code here

    let answer = [];

    for (let index = 0; index < nums.length; index++) {
        const num = nums[index];
        const pair = target - num; // 對數

        //如果對數有在陣列 (-1 為不在陣列的返回值)
        if (nums.indexOf(pair) != -1) {
            // console.log(index, num, nums.indexOf(pair));
            answer.push(index, nums.indexOf(pair));
            break; // 停止迴圈
        }
    }

    return answer;
}

const answer = twoSum([2, 7, 11, 15], 9);
const answer1 = twoSum([2, 7, 11, 15], 26);
const answer2 = twoSum([2, 7, 11, 15], 18);

console.log(answer);
console.log(answer1);
console.log(answer2);

/*
For example:
twoSum([2, 7, 11, 15], 9);
Should returns:
[0, 1]
Because:
nums[0] + nums[1] is 9

*/
