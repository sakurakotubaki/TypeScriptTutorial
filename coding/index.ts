let nums = [1, 1, 2];

function removeDuplicates(nums: number[]): number {
    // out put: 1, 2
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1; 
}

console.log(removeDuplicates(nums)); // 2