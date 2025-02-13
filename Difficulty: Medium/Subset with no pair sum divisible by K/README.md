<h2><a href="https://www.geeksforgeeks.org/problems/subset-with-no-pair-sum-divisible-by-k1105/1?page=1&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Subset with no pair sum divisible by K</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an array <strong>arr[] </strong>of integers. Your task is to find the maximum size of a subset such that the sum of each pair of this subset is not divisible by <strong>k</strong>.</span><br>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input :</strong> arr[] = [3, 7, 2, 9, 1] , k = 3
<strong>Output : </strong>3
<strong>Explanation:</strong>
Maximum size subset whose each pair sum
is not divisible by K is [3, 7, 1] because,
3+7 = 10,   
3+1 = 4,   
7+1 = 8 
These all are not divisible by 3.
It is not possible to get a subset of size
bigger than 3 with the above-mentioned property.<br></span></pre>
<pre><span style="font-size: 18px;"><strong>Input : </strong>arr[] = [3, 17, 12, 9, 11, 15] , k = 5
<strong>Output : </strong>4 </span></pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(n+k)<br><strong>Expected Auxiliary Space:</strong> O(k)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1&lt;= arr.size(), k &lt;=10<sup>6</sup><br>1&lt;= arr[] &lt;=10<sup>6</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Modular Arithmetic</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;