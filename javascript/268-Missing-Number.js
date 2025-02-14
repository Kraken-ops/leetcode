/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a,b) => {return a-b});
    
    if (nums[nums.length - 1] !== nums.length) {
        return nums.length;
    } else if (nums[0] !== 0) {
        return 0;
    }
    
    for (let i = 0; i < nums.length; i++) {
        if(nums[i + 1] !== nums[i] + 1) {
            return nums[i] + 1;
        }
    }
    
    return -1;
    
    
    
};
