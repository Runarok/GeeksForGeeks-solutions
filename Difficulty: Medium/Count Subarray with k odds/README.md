<h2><a href="https://www.geeksforgeeks.org/problems/count-subarray-with-k-odds/1?page=1&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Count Subarray with k odds</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">You are given array <strong>nums</strong> of <strong>n</strong> elements and integer <strong>k</strong>, count the number of subarrays that has k odd numbers.</span></p>
<p><strong><span style="font-size: 18px;">Example1:</span></strong></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong>
n = 5
nums = [1,1,2,1,1]
k = 3
<strong>Output:</strong>
2</span><span style="font-size: 18px;">
<strong>Explanation:
</strong>There are 2 subarrays with k odds </span><span style="font-size: 18px;">[1,1,2,1] and [1,2,1,1]</span></pre>
<p><span style="font-size: 18px;"><strong>Example 2:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong></span>
<span style="font-size: 18px;">n=3
nums = [2,4,6]
k = 1
<strong>Output:
</strong>0</span></pre>
<p><strong><span style="font-size: 18px;">Your Task:</span></strong><br><span style="font-size: 18px;">You don't have to read input or print anything. Your task is to complete the function <strong>countSubarray()&nbsp;</strong>which takes the integer <strong>n</strong> and array nums and integer <strong>k</strong>&nbsp;as input and returns the count of subarray having k odds number.</span></p>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(n)<br><strong>Expected Space Complexity:</strong> O(n)</span></p>
<p><strong><span style="font-size: 18px;">Constraint:</span></strong><br><span style="font-size: 18px;">1 &lt;= n &lt;= 10<sup>5</sup><br>1 &lt;= nums &lt;= 10<sup>9</sup></span><sup><span style="font-size: 18px;"><br>1 &lt;= k &lt;=n</span></sup></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>prefix-sum</code>&nbsp;<code>Hash</code>&nbsp;<code>Algorithms</code>&nbsp;