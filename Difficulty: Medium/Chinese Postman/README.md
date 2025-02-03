<h2><a href="https://www.geeksforgeeks.org/problems/chinese-postman/1?page=1&category=Graph&difficulty=Easy,Medium,Hard&status=attempted&sortBy=accuracy">Chinese Postman</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given a graph find the shortest cyclic path or circuity that visits every edge of the graph at least once.</span></p>
<p><span style="font-size: 18px;"><strong>Example 1:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong>
N=3
M=3
edges[][]={{1,2,1},{2,3,1},{3,1,4}}
<strong>Output:</strong>
6
<strong>Explanation:</strong>
We can go from 1-&gt;2-&gt;3-&gt;1 visiting every 
edge at least once and hence the minimum 
cost is 6.</span></pre>
<p><span style="font-size: 18px;"><strong>Example 2:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong>
N=6
M=8
edges[][]={{1,2,3},{2,6,6},{2,4,1},{4,6,1}
,{6,5,4},{5,1,5},{5,3,2},{3,1,1}}
<strong>Output:</strong>
28
<strong>Explanation:</strong>
The path is 1-&gt;3-&gt;5-&gt;1-&gt;3-&gt;5-&gt;6-&gt;2-&gt;4-&gt;6-&gt;4
-&gt;2-&gt;1,which sum to 28.It can be shown that 
28 is the optimal answer.</span>

</pre>
<p>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Your Task:&nbsp;&nbsp;</strong><br>You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>chinesePostmanProblem()</strong>&nbsp;which takes the edge list e[][], number of nodes<strong>&nbsp;</strong>as input parameters&nbsp;and returns the length of the shortest path that visits each edge at least once. Return -1 if it is not possible to visit every edge once.</span><br>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong>&nbsp;O(sqrt(N!))<br><strong>Expected Auxiliary Space:</strong>&nbsp;O(N*N)</span><br><br>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 &lt;= N &lt;= 15.<br>1&lt;=edges[I][0],edges[I][1]&lt;=N.<br>1&lt;=edges[I][2]&lt;=25.</span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Graph</code>&nbsp;<code>Data Structures</code>&nbsp;