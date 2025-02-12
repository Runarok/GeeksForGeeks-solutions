<h2><a href="https://www.geeksforgeeks.org/problems/frobenius-coin-problem5532/1?page=1&difficulty=Basic&status=attempted&sortBy=accuracy">Frobenius coin problem</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given two coins of denominations X and Y respectively, find the largest amount that cannot be obtained using these two coins (assuming infinite supply of coins) followed by the total number of such non obtainable amounts.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>X = 2, Y = 5
<strong>Output: </strong>3 2
<strong>Explanation: </strong>3 is the largest amount that
can not be formed using 2 and 5. And there 
are only 2 such non obtainable amounts and 
they are 1 and 3.
</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>5 10
<strong>Output: </strong>-1
<strong>Explanation: </strong>Using 5 and 10 there can be 
infinite number of amounts that cannot be
formed.
</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read or print anything. Your task is to complete the function&nbsp;<strong>frobenius()</strong>&nbsp;which takes X and Y as input parameters and returns a list of two numbers in which first number should be maximum amount that cannot be obtained and the second number should be total number of non-obtainable amounts. If no such value exist then returns&nbsp;a list containing -1.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(log<sub>2</sub>(max(X, Y)))<br>
<strong>Expected Space Complexity:&nbsp;</strong>O(1)</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
2 &lt;= X, Y &lt;= 10000</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;