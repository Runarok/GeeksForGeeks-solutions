<h2><a href="https://www.geeksforgeeks.org/problems/find-the-distance-between-two-nodes4402/1?page=3&category=Tree&difficulty=Easy,Medium&status=unsolved,attempted&sortBy=accuracy">Shortest distance in infinite tree</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Consider you have an infinitely long binary tree having the&nbsp;pattern as below<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1</span></p>
<p><span style="font-size: 18px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /&nbsp; &nbsp; &nbsp;\<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;2 &nbsp; &nbsp; &nbsp;3&nbsp;&nbsp;</span></p>
<p><span style="font-size: 18px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;/&nbsp; \&nbsp; &nbsp; &nbsp;/&nbsp; &nbsp;\<br>&nbsp; &nbsp; &nbsp; &nbsp; 4&nbsp; 5 &nbsp; &nbsp;6 &nbsp;7<br>&nbsp; &nbsp; .&nbsp; . &nbsp;. &nbsp;. &nbsp; . &nbsp;. &nbsp;.&nbsp; .&nbsp;<br>Given two nodes with values x and y,&nbsp;the task is to find the length of the shortest path between the two nodes.</span></p>
<p><span style="font-size: 20px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>x = 1, y = 3
<strong>Output: </strong>1
<strong>Explanation: </strong>3 is the child of 1 so, distance between them is 1.</span>
</pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>x = 2, y = 2
<strong>Output: </strong>0
<strong>Explanation: </strong>As the given node x and y are same so the length is 0.</span>&nbsp;</pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>x = 5, y = 9
<strong>Output: </strong>3
<strong>Explanation: </strong>There are three edges between 5 and 9.</span> </pre>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1&lt;= x, y &lt;=10<sup>7</sup></span></p></div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>PlaySimple</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Tree</code>&nbsp;<code>Data Structures</code>&nbsp;