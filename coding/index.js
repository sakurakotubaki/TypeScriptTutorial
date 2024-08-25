var nums = [1, 1, 2];
function removeDuplicates(nums) {
    // out put: 1, 2
    var i = 0;
    for (var j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}
console.log(removeDuplicates(nums)); // 2
