<h2><a href="https://www.geeksforgeeks.org/problems/nikits-problem1028/1?page=14&status=unsolved&sortBy=accuracy">Nikit's Problem</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Nikit has to give a short contest of duration "n" minutes. The contest is divided into 2&nbsp;sections-Easy&nbsp;and Hard. x&nbsp;and y&nbsp;marks will be awarded per problem for Easy&nbsp;and Hard respectively. Assume that he will take p&nbsp;minutes to solve an Easy problem and q&nbsp;minutes to solve a Hard problem successfully.<br>
There are a&nbsp;and b&nbsp;number of Easy and&nbsp; Hard problems respectively.&nbsp;Calculate how many problems of a particular section&nbsp;should he perform to get the maximum score in time.<br>
Note: Assume he will always try to solve the easiest problem.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>n = 180, x = 2, y = 5, a = 4
b = 6,p = 20, q = 40
<strong>Output: </strong>1 4
<strong>Explanation: </strong>Maximum marks get scored 
when he solves 1 easy and 4 hard problems.</span>
</pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>n = 50, x = 5, y = 10, a = 5 
b = 3, p = 10, q = 20
<strong>Output: </strong>5 0
<strong>Explanation : </strong>Maximum marks gets scored 
when he solves 5 easy problems or 1 easy 
and 2 hard problems or 3 easy and 1 hard 
problem. But he always try to solve the 
easiest problem therefore solves 5 easy 
problems.</span>
</pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read or print anything. Your task is to complete the function&nbsp;<strong>maximumScore()</strong>&nbsp;which takes n, x, y, a, b, p, and q as input parameter and returns a list which contains the total number of easy problems and hard problems required to solve to get the maximum score.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(a * b)<br>
<strong>Expected Space Complexity:&nbsp;</strong>O(1)</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= n &lt;= 1000</span><br>
<span style="font-size:18px">1 &lt;= x &lt; y &lt;= 100</span><br>
<span style="font-size:18px">1 &lt;= a, b &lt;= 100<br>
1 &lt;= p &lt; q &lt;= 100</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Misc</code>&nbsp;<code>logical-thinking</code>&nbsp;<code>Algorithms</code>&nbsp;