/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // let newArr = [];
    let k = 0;
    for (let i = 0; i < nums.length; i++){
        // if(nums[i]==val){
        //     continue;
        // }
        // else{
        //     newArr.push(nums[i]);
        // }
        if(nums[i]!=val){
            nums[k]=nums[i];
            k++;
        }
        
    }
    return k;
    
};