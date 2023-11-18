/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
const answerQueries = (nums, queries) => {
    const arr = []
    let sum = 0
    let check = 0
    nums.sort((a, b) => a - b)
    for (let i = 0; i < queries.length; i++) { 
        sum = 0; check = 0
        for (let j = 0; j < nums.length; j++) { 
            sum += nums[j]
            if (sum <= queries[i]) check += 1
            else break
        }
        arr.push(check)
    }
    return arr
};