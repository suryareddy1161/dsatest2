/* Q1) Given an array A of size N of integers. Your task is to find the minimum and maximum elements in the array. 
Example 1:
Input:
N = 6
A[] = {3, 2, 1, 56, 10000, 167}
Output:
min = 1, max =  10000
 */

function minmax(n,a){
    let min = a[0];
    let max= a[0];
    for(let i=0;i<n;i++){
        if(a[i]>max);
        max=a[i];
        if(a[i]<min){
            min=a[i];
        }
        
    }
    console.log("min = ", min,"max=",max)
    return min,max
}
minmax(6,[3,2,1,56,167,1000])