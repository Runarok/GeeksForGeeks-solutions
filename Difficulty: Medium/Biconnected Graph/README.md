<h2><a href="https://www.geeksforgeeks.org/problems/biconnected-graph2528/1?page=2&category=Graph&difficulty=Easy,Medium,Hard&status=unsolved,attempted&sortBy=accuracy">Biconnected Graph</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given a graph with <strong>n</strong> vertices, <strong>e</strong> edges and an array <strong>arr[] </strong>denoting the edges connected to each other, check whether it is <a href="https://en.wikipedia.org/wiki/Biconnected_graph">Biconnected</a> or not.<br><strong>Note: </strong>The given graph is Undirected.</span></p>
<p>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Examples :</strong></span></p>
<pre><span style="font-size: 18px;"><strong style="font-size: 18px;">Input:</strong> </span><span style="font-size: 18px;"><strong>n = </strong>2, <strong>e = </strong>1</span><span style="font-size: 18px;">, </span><span style="font-size: 18px;"><strong>arr = </strong>{0, 1}</span>
<span style="font-size: 18px;"><strong><span style="font-size: 18px;">Output:</span> </strong></span><span style="font-size: 18px;">1</span>
<span style="font-size: 18px;"><strong>Explanation:</strong></span>
<span style="font-size: 18px;">       0
      /
     1
The above graph is Biconnected.</span></pre>
<pre><span style="font-size: 18px;"><strong style="font-size: 18px;">Input:</strong> </span><span style="font-size: 18px;"><strong>n = </strong>3, <strong>e = </strong>2</span><span style="font-size: 18px;">, </span><span style="font-size: 18px;"><strong>arr = </strong>{0, 1, 1, 2}</span>
<span style="font-size: 18px;"><strong><span style="font-size: 18px;">Output:</span> </strong></span><span style="font-size: 18px;">0</span>
<span style="font-size: 18px;"><strong>Explanation:</strong></span>
<span style="font-size: 18px;">       0
      /
     1
      \
       2
The above graph is not Biconnected.</span></pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(n+e)<br><strong>Expected Auxiliary Space:</strong> O(n)</span></p>
<p>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong></span><br><span style="font-size: 18px;">1 &lt;= e &lt;= 100<br>2 &lt;= n &lt;= 100</span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Graph</code>&nbsp;<code>Data Structures</code>&nbsp;