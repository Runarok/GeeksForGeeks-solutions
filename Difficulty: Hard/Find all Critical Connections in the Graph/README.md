<h2><a href="https://www.geeksforgeeks.org/problems/critical-connections/1?page=3&difficulty=Hard&status=unsolved&sortBy=accuracy">Find all Critical Connections in the Graph</a></h2><h3>Difficulty Level : Difficulty: Hard</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">A <strong>critical connection </strong>refers to an edge that, upon removal, will make it impossible for certain nodes to reach each other through any path. You are given an <strong>undirected connected graph </strong>with <strong>v</strong> vertices and <strong>e</strong> edges where each vertex is distinct and ranges from <strong>0 to v-1</strong>, and you have to find all <strong>critical connections </strong>in the graph. It is ensured that there is at least one such edge present.</span></p>
<p><span style="font-size: 18px;">Note: You can return connections in any order.</span></p>
<p><strong style="font-size: 18px;">Example :</strong></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong>
</span><img src="https://media.geeksforgeeks.org/img-practice/PROD/addEditProblem/706303/Web/Other/bbe726f7-e9f7-4a0c-b9fa-c649299d9784_1685087730.png" alt=""><span style="font-size: 18px;">
<strong>Output: </strong>
0 1
0 2
<strong>Explanation</strong>: 
On removing edge (0, 1), you will not be able to reach node 0 and 2 from node 1. Also, on removing edge (0, 2), you will not be able to reach node 0<br>and 1 from node 2.</span></pre>
<pre><span style="font-size: 18px;"><strong>Input:</strong>
</span><img src="https://media.geeksforgeeks.org/img-practice/PROD/addEditProblem/706303/Web/Other/730505a5-24f6-41de-bd11-84a0a9e56d49_1685087731.png" alt=""><span style="font-size: 18px;">
<strong>Output:</strong>
2 3
<strong>Explanation</strong>:
The edge between nodes 2 and 3 is the only Critical connection in the given graph.</span>
</pre>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ v, e ≤ 10<sup>4<br></sup></span></p></div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Amazon</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Graph</code>&nbsp;<code>Data Structures</code>&nbsp;