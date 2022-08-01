

/* Q2) Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.
Example 1:
Input:
N = 5
Arr[] = {1,2,3,-2,5}
Output:
9 */


function maxsubarrsum(a, n) {
    let max = a[0]
    let current = 0;
    for (let i = 0; i < n; i++) {
        current = Math.max(a[i], current + a[i])
        max = Math.max(max, current)
    }

    return max
}
console.log(maxsubarrsum([-1,-2,-3,-4],4))

console.log(maxsubarrsum([1, 2, 3, -2, 5], 5)) 