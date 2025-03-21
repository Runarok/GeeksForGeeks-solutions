<h2><a href="https://www.geeksforgeeks.org/problems/mother-vertex/1?page=2&category=Graph&difficulty=Easy,Medium,Hard&status=unsolved,attempted&sortBy=accuracy">Mother Vertex</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given a Directed Graph, find a Mother Vertex in the Graph (<strong>if present</strong>).&nbsp;<br>A Mother Vertex is a vertex through which we can reach all the other vertices of the Graph.</span></p>
<p><span style="font-size: 18px;"><strong>Example 1:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: 
</strong></span><img src="https://media.geeksforgeeks.org/img-practice/PROD/addEditProblem/701116/Web/Other/a5cc2f40-e569-4761-b6df-16b72658a270_1685086764.png" alt="">
<span style="font-size: 18px;"><strong>Output: </strong>0
<strong>Explanation: </strong>According to the given edges, all 
nodes can be reached from nodes from 0, 1 and 2. 
But, since 0 is minimum among 0,1 and 2, so 0 
is the output.</span>
</pre>
<p><span style="font-size: 18px;"><strong>Example 2:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>
</span><img src="https://media.geeksforgeeks.org/img-practice/PROD/addEditProblem/701116/Web/Other/5e3e183b-258d-4f95-9c5d-83eb5f5549ef_1685086764.png" alt="">
<strong><span style="font-size: 18px;">Output: </span></strong><span style="font-size: 18px;">-1
<strong>Explanation: </strong>According to the given edges, 
no vertices are there from where we can 
reach all vertices. So, output is -1.</span>
</pre>
<p><span style="font-size: 18px;"><strong>Your Task:</strong><br>You don't need to read or print anything. Your task is to complete the function&nbsp;<strong>findMotherVertex()&nbsp;</strong>which takes V denoting the number of vertices and adjacency list as input parameter and returns the vertices from through which we can traverse all other vertices of the graph. If there is more than one possible nodes then return the node with minimum value. If not possible returns -1.<br><br></span><span style="font-size: 18px;"><strong>Expected Time Complexity: </strong>O(V + E)<br><strong>Expected Space Complexity: </strong>O(V)<br></span><br><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ V ≤ 10<sup>5</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>DFS</code>&nbsp;<code>Graph</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;