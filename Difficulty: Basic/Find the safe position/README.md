<h2><a href="https://www.geeksforgeeks.org/problems/search-for-traitor5950/1?page=29&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">Find the safe position</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">There was a group of Jewish soldiers who were surrounded by Roman Army in a circular fence. They decided not to get captured by the brutal Roman Army. So, they made a plan.<br>
They planned to kill each other. The soldier would kill the fellow soldier next to him on left. They would do so till only one soldier is left and in the last the remained soldier would kill themselves. But there was a problem, soldier A didn’t want to die he want to stay alive so he wanted to stand a position where he could stand till last. After all his fellow soldiers died he would simple surrender himself rather then killing himself. So,&nbsp;given N i,e number of Jewish soldiers, find the safe_position of soldier A.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>N = 10
<strong>Output: </strong>5
<strong>Explanation: </strong>1 kills 2 : 3 kills 4 : 
5 kills 6 : 7 kills 8 : 9&nbsp;kills 10
Now 1 kills 3 : 5&nbsp;kills 7 : 9 kills 1&nbsp;
Now 5 kills 9&nbsp;</span>
</pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>N = 3
<strong>Output: </strong>3
<strong>Explanation: </strong></span><span style="font-size:18px">1 kills 2 :&nbsp;3 kills 1
Safe_Position &nbsp;: 3</span>
</pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read or print anything. Your task is to complete the function&nbsp;<strong>find_pos()&nbsp;</strong>which takes N as input parameter and returns the safe position for soldier A.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(log(N))<br>
<strong>Expected Space Complexity:&nbsp;</strong>O(1)</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= N &lt;= 100000</span><br>
&nbsp;</p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;