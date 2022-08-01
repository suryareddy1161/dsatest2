/* Q3) Given a sorted array arr[] of size N and a number X, find a pair in array whose sum is closest to X.
Example 1:
Input:
N = 6, X = 54
arr[] = {10, 22, 28, 29, 30, 40}
Output: 22 30
 */


let arr = [10, 22, 28, 29, 30, 40], x = 54;
let n = arr.length;
function printClosest(arr, n, x) {

    let resl = 0, resr = 0;


    let l = 0, r = n - 1, diff = Number.MAX_VALUE;

    while (r > l) {
        if (Math.abs(arr[l] +arr[r] - x) < diff) {
            resl = l;
            resr = r;
           diff = Math.abs(arr[l] + arr[r] - x);
        }

        if (arr[l] + arr[r] > x)
            r--;
        else
            l++;
    }

    console.log(" The closest pair is " + arr[resl] + " and " + arr[resr]);
}
printClosest(arr, n, x);  