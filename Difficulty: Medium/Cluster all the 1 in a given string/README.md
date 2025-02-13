<h2><a href="https://www.geeksforgeeks.org/problems/cluster-all-the-1-in-a-given-string5323/1?page=2&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Cluster all the 1 in a given string</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a binary string S which only contains '0' and '1' such that the '0' or '1' at the 1<sup>st&nbsp;</sup>position is just next to '0' or '1' at the last position i.e. string is cyclic. Your task is to re arrange the string such that all the '1' in the string are next to each other (Note : the string is cyclic ).&nbsp;<br>
You can choose any '1' in the string&nbsp;and swap its position with the first '1'&nbsp;in any of the two direction.<br>
Find the minimum number of moves in which the task can be done.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>S = "010110101"
<strong>Output: </strong>3
<strong>Explanation: </strong>In the first move 01011010<strong>1&nbsp;</strong>&nbsp;
is changed to&nbsp;0101101<strong>1</strong>0.In the second move&nbsp;
0101101<strong>1</strong>0 is changed to 01011<strong>1</strong>100. In the 
third move 0<strong>1</strong>0111100 is change to&nbsp;00<strong>1</strong>111100.</span>
</pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>S = "111"
<strong>Output: </strong>0
<strong>Explanation: </strong>All one's are clustred. So answer will
be zero.</span>
</pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong></span></p>

<p><span style="font-size:18px">You don't need to read or print anything. Your task is to complete the function&nbsp;<strong>minimumMoves()</strong>&nbsp;which takes string S as input parameter and returns the minimum number of moves.<br>
<br>
<strong>Expected Time Complexity:&nbsp;&nbsp;</strong>O(|S|)<br>
<strong>Expected Space Complexity:&nbsp;</strong>O(1)</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ |S| ≤ 100000</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;