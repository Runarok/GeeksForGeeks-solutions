<h2><a href="https://www.geeksforgeeks.org/problems/sum-triangle-for-given-array1159/1?page=1&difficulty=Basic&status=unsolved,attempted&sortBy=latest">Sum Triangle for given array</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an array, write a program to construct a triangle where the last row contains elements of the given array, every element of the second last row contains the sum of the below two elements with modulo 10 <sup>9</sup>+7, and so on.</span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [4, 7, 3, 6, 7]
<strong>Output: </strong>[81, 40, 41, 21, 19, 22, 11, 10, 9, 13, 4, 7, 3, 6, 7]
<strong>Explanation:</strong>
       81
     40  41
   21  19  22
 11  10   9   13
4   7   3   6    7 </span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [1, 2, 4]
<strong>Output: </strong>[9, 3, 6, 1, 2, 4] <br><strong>Explanation:<br>   </strong>9<strong><br> </strong>3   6<strong><br></strong>1  2  3</span></pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(n<sup>2</sup>)<br><strong>Expected Auxiliary Space:</strong> O(n<sup>2</sup>)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1&lt;=arr.size()&lt;=10<sup>3</sup><br>1&lt;=arr[i]&lt;=10<sup>2</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Data Structures</code>&nbsp;