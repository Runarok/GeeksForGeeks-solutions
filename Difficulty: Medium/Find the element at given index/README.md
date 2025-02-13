<h2><a href="https://www.geeksforgeeks.org/problems/find-the-element-at-given-index4630/1?page=1&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Find the element at given index</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an array <strong>arr[]</strong> of <strong>n</strong> elements. Perform <strong>k</strong> right circular rotations on given ranges [<strong>L...R</strong>]. After performing these rotations, we need to find element at a given index <strong>x</strong>.</span></p>
<p><span style="font-size: 18px;"><strong>Example 1:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:
</strong>n = 5, x = 1, k = 2
arr[] = {1, 2, 3, 4, 5}
ranges[][] = {{0, 2}, {0, 3}}
<strong>Output:</strong> 3
<strong>Explanation:</strong> Rotating the elements in range 
0-2 and 0-3, we have array as 4 3 1 2 5. 
Element at first position is 3.
</span></pre>
<p><span style="font-size: 18px;"><strong>Example 2:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:
</strong>n = 3, x = 2, k = 1
arr[] = {1, 2, 3}
ranges[][] = {{0, 1}}
<strong>Output:</strong> 3
</span></pre>
<p><span style="font-size: 18px;"><strong>Your Task:</strong><br>You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>findElement()</strong>&nbsp;which takes the array of integers&nbsp;<strong>arr, n, x, ranges</strong>&nbsp;and&nbsp;<strong>k&nbsp;</strong>as parameters and returns an integer&nbsp;denoting the answer.</span></p>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(k)<br><strong>Expected Auxiliary Space:</strong>&nbsp;O(1)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>2 &lt;= n &lt;= 10<sup>5</sup><br>1 &lt;= arr[i] &lt;= 10<sup>5</sup><br>1 &lt;= k &lt;= 10<sup>5</sup><br>x &lt; n<br>0 &lt;= L &lt;= R&lt;n</span></p>
<p>&nbsp;</p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Data Structures</code>&nbsp;