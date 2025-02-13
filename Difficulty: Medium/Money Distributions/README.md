<h2><a href="https://www.geeksforgeeks.org/problems/money-distributions5924/1?page=1&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Money Distributions</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Find the number of ways in which <strong>n</strong> coins can be distributed among <strong>k</strong> pupils such that each pupil receives at least one coin each.&nbsp;Two distributions are said to be different only if they have at least one pupil who got a different number of coins.<br></span><strong>Note:</strong> returns the number of possible distributions modulo 10^9+7.<br>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Example 1:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: n</strong> = 7, k = 3
<strong>Output: </strong>15
<strong>Explanation: 
</strong>Coin distribution can be any of the following 15 ways. 
{1,1,5}, {1,5,1}, {5,1,1}, {2,1,4}, {1,2,4}, {1,4,2}
{2,4,1}, {4,1,2}, {4,2,1}, {3,1,3}, {1,3,3}, {3,3,1}
{2,2,3}, {2,3,2}, {3,2,2}
</span>

</pre>
<p><span style="font-size: 18px;"><strong>Example 2:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: n</strong> = 5, k = 5
<strong>Output: </strong>1
<strong>Explanation: </strong>{1, 1, 1, 1, 1} is the only way.</span>
</pre>
<p>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Your Task:</strong></span><br><span style="font-size: 18px;">You don't need to read or print anything. Your task is to complete the function&nbsp;<strong>totalWays()</strong> which takes n and k as input parameters and returns the number of possible distributions modulo 10^9+7<strong>.</strong></span><br>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:&nbsp;</strong>O(n)<br><strong>Expected Space Complexity:&nbsp;</strong>O(n)</span><br>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 &lt;= n, k &lt;= 10<sup>5</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>number-theory</code>&nbsp;<code>Combinatorial</code>&nbsp;