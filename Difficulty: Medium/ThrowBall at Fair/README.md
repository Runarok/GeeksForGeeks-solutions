<h2><a href="https://www.geeksforgeeks.org/problems/throwball-at-fair3939/1?page=27&difficulty=Medium&status=unsolved&sortBy=accuracy">ThrowBall at Fair</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">There are N identical balls into K distinct boxes, such that there is at least one ball in each box. What is the distinct number of ways in which you could throw those balls into the boxes?</span></p>

<p><span style="font-size:18px">As the answer could be very large, print it modulo M, where M is a prime number.<br>
<br>
<strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N = 13
K = 9
M = 7
<strong>Output:
</strong>5<strong>
Explanation:
</strong>distinct number of ways of 
throwing 13 identical balls 
into 9 distinct boxes is&nbsp; 495.
So the answer modulo 7 is 5
</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N = 5
K = 5
M = 7
<strong>Output:
</strong>1<strong>
Explanation:
</strong>distinct number of ways of
throwing 5 identical balls
into 5 distinct boxes is&nbsp; 1.
So the answer modulo 7 is 1
</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>count()</strong>&nbsp;which takes integers N, K and M as input parameters and returns the output as the distinct number of ways in which you could throw those balls into the boxes modulo M.&nbsp;</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity: </strong>O(log<sup>2</sup>N + M)<br>
<strong>Expected Auxilliary Space:</strong>&nbsp;O(M)</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1&lt;= K &lt;= N &lt;= 10<sup>18</sup><br>
1&lt;= M &lt;= 10<sup>6</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Combinatorial</code>&nbsp;