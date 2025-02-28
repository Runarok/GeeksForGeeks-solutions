<h2><a href="https://www.geeksforgeeks.org/problems/sum-of-fai-aj-over-all-pairs-in-an-array-of-n-integers4057/1?page=3&category=Arrays&status=unsolved,attempted&sortBy=accuracy">Sum of f(a[i], a[j]) over all pairs in an array of n integers</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an array <strong>arr[]&nbsp;</strong>of positive integers, find the sum of <strong>f(a[i], a[j]) </strong>of all pairs (i, j) such that (1 &lt;= i &lt; j &lt;= n).</span></p>
<p><span style="font-size: 18px;"><strong>f(a[i], a[j]):</strong>&nbsp; &nbsp; &nbsp; &nbsp;<em>if</em>&nbsp;<strong>abs(a[j]-a[i])&nbsp;&gt; 1</strong></span></p>
<p><span style="font-size: 18px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;f(a[i], a[j]) = a[j] - a[i]</span></p>
<p><span style="font-size: 18px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<em>else &nbsp;if</em>&nbsp;<strong>abs(a[j]-a[i])</strong>&nbsp;&lt;= 1</span></p>
<p><span style="font-size: 18px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;f(a[i], a[j]) = 0&nbsp;</span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input :</strong> arr[] = [6, 6, 4, 4]
<strong>Output :</strong> -8
<strong>Explanation: </strong>All pairs are: (6 - 6) + (4 - 6) + (4 - 6) + (4 - 6) + (4 - 6) + (4 - 4) = -8 return -8.
</span></pre>
<pre><span style="font-size: 18px;"><strong>Input :</strong> arr[] = [1, 2, 3, 1, 3] <strong>
Output:</strong>  4
<strong>Explanation:</strong> All pairs are:(3-1) + (1-3) + (3-1) + (3-1) = 4 ,(1-2),(3-2),(1-1),(2-1),(3-3),(3-2) these pairs will give zero as their absolute difference is &lt;= 1</span></pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(n).<br><strong>Expected Auxiliary Space:</strong> O(n).</span><br><br><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ arr.size() ≤ 10<sup>6</sup><br>1 ≤ arr[i] ≤ 10<sup>6</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Hash</code>&nbsp;<code>Map</code>&nbsp;<code>Data Structures</code>&nbsp;