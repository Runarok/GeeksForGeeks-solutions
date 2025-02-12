<h2><a href="https://www.geeksforgeeks.org/problems/cricket-average2031/1?page=30&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">Cricket Average</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">It’s time to find out which player is consistent in cricket. You need to calculate the average of a player based on his score. Player average is defined as total runs scored by a player in N matches divided by the number of matches in which he gets out.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>run = {10, 101, 49}, 
status = {"out", "notout", "out"}
<strong>Output: </strong>80
<strong>Explanation: </strong>Total run = 10 + 101 + 49 = 160.
2 times the player gets out.
So, Average = 160 / 2 = 80.</span>
</pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>run = {6, 67, 5}, status = {"notout", 
"notout", "notout"}.
<strong>Output: </strong>-1
<strong>Explanation: </strong>Not possible to determine average.</span>
</pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong></span></p>

<p><span style="font-size:18px">You don't need to read or print anything. Your task is to complete the function&nbsp;<strong>Average()</strong>&nbsp;which takes a list of runs and a list of status of the player in every match and retruns ceil value of the average. If not possible returns -1.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(n) where n is the number of matches&nbsp;<br>
<strong>Expected Space Complexity:&nbsp;</strong>O(1)</span><br>
&nbsp;</p>

<p><span style="font-size:18px">Constraints:<br>
1 &lt;= No. of matches &lt;= 500<br>
1 &lt;= run scored in every match &lt;= 300</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;