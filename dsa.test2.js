/* Q1) Given an array A of size N of integers. Your task is to find the minimum and maximum elements in the array. 
Example 1:
Input:
N = 6
A[] = {3, 2, 1, 56, 10000, 167}
Output:
min = 1, max =  10000
 */
/* 
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
minmax(6,[3,2,1,56,167,1000]) */



/* Q2) Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.
Example 1:
Input:
N = 5
Arr[] = {1,2,3,-2,5}
Output:
9 */


/* function maxsubarrsum(a,n){
    let max=a[0]
    let current =0 ;
    for(let i=0;i<n;i++){
        current = Math.max(a[i],current+a[i])
       max=Math.max(max,current)
    }
    
   return max
}
//console.log(maxsubarrsum([-1,-2,-3,-4],4))

console.log(maxsubarrsum([1,2,3,-2,5],5)) */


/* Q3) Given a sorted array arr[] of size N and a number X, find a pair in array whose sum is closest to X.
Example 1:
Input:
N = 6, X = 54
arr[] = {10, 22, 28, 29, 30, 40}
Output: 22 30
 */

 // Prints the pair with sum closest to x
 let arr = [10, 22, 28, 29, 30, 40], x = 54;
 let n = arr.length;
 function printClosest(arr,n,x)
 {
 
     let resl=0, resr=0;

     
     let l = 0, r = n-1, diff = Number.MAX_VALUE;

     while (r > l)
     {
         if (Math.abs(arr[l] +
             arr[r] - x) < diff)
         {
         resl = l;
         resr = r;
         diff = Math.abs(arr[l] + arr[r] - x);
         }

         if (arr[l] + arr[r] > x)
         r--;
         else 
         l++;
     }

 console.log(
 " The closest pair is "+arr[resl]+" and "+ arr[resr]
 );
}    
printClosest(arr, n, x);  

/* Q4) Given two strings denoting non-negative numbers X and Y. Calculate the sum of X and Y.
Example 1:
Input:
X = "25", Y = "23"
Output:
48 */


/*  function stringtwosum(x,y){
    let a=parseInt(x)
    let b=parseInt(y)
    let res= a+b
    console.log(res)

}

stringtwosum("25","23") 
stringtwosum("2500","23") */


/* Q5) Given two strings 'str1' and 'str2', check if these two strings are isomorphic to each other.
Two strings str1 and str2 are called isomorphic if there is a one to one mapping possible for every character of str1 to every character of str2 while preserving the order.
Note: All occurrences of every character in str1 should map to the same character in str2
Example 1:
Input:
str1 = aab
str2 = xxy
Output: 1
 */


/* function isomorphic(str1, str2) {
    function patter(str) {
        let newStr = "";
        for (let i = 0; i < str.length; i++) {
            newStr += str.indexOf(str[i]);
        }
        console.log(newStr)
        return newStr;
    }
    if (patter(str1) == patter(str2)) {
        console.log(1);
    } else console.log(0);
}



isomorphic("aab", "xxy"); */
//isomorphic("aab", "xyz");



/* Q6)  You have been given a head to a singly linked list of integers. Write a function check to see whether the list given is a 'Palindrome' or not.
 Input format :
The first line contains an Integer 't' which denotes the number of test cases or queries to be run. Then the test cases follow.

First and the only line of each test case or query contains the elements of the singly linked list separated by a single space.
Sample Input 1 :
1
9 2 3 3 2 9 -1
Sample Output 1 :
true
 */

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  class LL {
    constructor() {
      this.head = null;
      this.tail = null;
    }
    takeInput(ele) {
      var newnode = new Node(ele);
      if (this.head == null) {
        this.head = newnode;
        this.tail = newnode;
      } else {
        this.tail.next = newnode;
        this.tail = this.tail.next;
      }
    }
    findLength() {
      let curr = this.head;
      let count = 0;
      while (curr != null) {
        count++;
        curr = curr.next;
      }
      return count;
    }
    rev() {
      let arr = [];
      let curr = this.head;
      while (curr != null) {
        arr.push(curr.data);
        curr = curr.next;
      }
      arr.reverse();
      return arr;
    }
  
    checkPalindrome(rev, c) {
      let curr = this.head;
      let count = 0;
  
      for (let i = 0; i < rev.length; i++) {
        if (rev[i] == curr.data) {
          count++;
          curr = curr.next;
        }
      }
      if (count == c) console.log("the given ll is palindrome");
      else console.log("the given ll is not a palindrome");
    }
    printLL() {
      var temp = this.head;
      while (temp) {
        console.log(temp.data);
        temp = temp.next;
      }
    }
  }
  
  var ll = new LL();
  ll.takeInput(2);
  ll.takeInput(3);
  ll.takeInput(4);
  ll.takeInput(3);
  ll.takeInput(2);
  // ll.takeInput(7);
  //ll.printLL();
  // ll.deleteEle(3);
  let c = ll.findLength();
  let ll1 = ll.rev();
  ll.checkPalindrome(ll1, c);