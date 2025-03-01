<h2><a href="https://www.geeksforgeeks.org/problems/distributing-question-papers2513/1?page=2&status=unsolved&sortBy=accuracy">Minimum Exchange</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a matrix of size n*m. Every cell of matrix contains either 'A' or 'B'. Exchange is defined as swaping the characters between two cells. Your task is to find the minimum number of exchange needed to rearrange the given matrix such that no adjacent cell contains the same characters.<br>
Two cells&nbsp;are adjacent if they share one of their common sides (left,right,front or back if exists).&nbsp;</span></p>

<p><strong><span style="font-size:18px">Note: </span></strong><span style="font-size:18px">There will not be any case that answer does not exist.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>matrix = {{A,A,B,A},{B,A,B,A},{B,B,A,B}}
<strong>Output: </strong>2
<strong>Explanation: </strong>Minimum number of students whose 
sets got changed are 4 (indexes: ((0,1),(0,2),
(0,3),(2,0))). The final alloted sets are:
A B A B
B A B A
A B A B
Here 2 exchange are done so answer is 2.</span>
</pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>matrix = {{A,B},{B,A}}
<strong>Output: </strong>0
<strong>Explanation: </strong>No two adjacent cell contains same
character.</span>
</pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don' t need to read or print anything. Your task is to complete the function&nbsp;<strong>MinimumExchange()&nbsp;</strong>which takes matrix as input parameter and returns minimum number of&nbsp; exchange needed.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(n*m</span><span style="font-size:18px">)</span><br>
<strong>Expected Space Compelxity:&nbsp;</strong><span style="font-size:18px">O(1)</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= n, m &lt;= 100</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Misc</code>&nbsp;