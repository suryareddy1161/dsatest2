/* Q5) Given two strings 'str1' and 'str2', check if these two strings are isomorphic to each other.
Two strings str1 and str2 are called isomorphic if there is a one to one mapping possible for every character of str1 to every character of str2 while preserving the order.
Note: All occurrences of every character in str1 should map to the same character in str2
Example 1:
Input:
str1 = aab
str2 = xxy
Output: 1
 */

 function isomorphic(str1, str2) {
    function patter(str) {
        let newStr = "";
        for (let i = 0; i < str.length; i++) {
            newStr += str.indexOf(str[i]);
        }
       // console.log(newStr)
        return newStr;
    }
    if (patter(str1) == patter(str2)) {
        console.log(1);
    } else console.log(0);
}



isomorphic("aab", "xxy"); 
//isomorphic("aab", "xyz");
