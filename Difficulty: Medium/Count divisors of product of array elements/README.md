<h2><a href="https://www.geeksforgeeks.org/problems/count-divisors-of-product-of-array-elements0244/1?page=26&difficulty=Medium&status=unsolved&sortBy=accuracy">Count divisors of product of array elements</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-family: arial, helvetica, sans-serif; font-size: 14pt;">Given an array <strong>arr</strong>, the task is to find the count of factors of a number x which is a product of all array elements</span></p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 14pt;"><strong>Examples:</strong></span></p>
<pre><span style="font-family: arial, helvetica, sans-serif; font-size: 14pt;"><strong>Input: </strong>arr[] = [2, 4, 6]
<strong>Output: </strong>10
<strong>Explanation: </strong>2 * 4 * 6 = 48, the factors of 48 are 1, 2, 3, 4, 6, 8, 12, 16, 24, 48 whose count is 10.</span></pre>
<pre><span style="font-family: arial, helvetica, sans-serif; font-size: 14pt;"><strong>Input: </strong>arr[] = [3, 5, 7]
<strong>Output: </strong>8
<strong>Explanation: </strong>3 * 5 * 7 = 105, the factors of 105 are 1, 3, 5, 7, 15, 21, 35, 105 whose count is 8.</span></pre>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 14pt;"><strong>Expected Time Complexity:</strong> O(n. sqrt(n))<br><strong>Expected Auxiliary Space:</strong> O(n)</span></p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 14pt;"><strong>Constraints:</strong><br>2&lt;= arr.size() &lt;=10<sup>4</sup><br>1&lt;= arr[i] &lt;=10<sup>2</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Prime Number</code>&nbsp;<code>Data Structures</code>&nbsp;