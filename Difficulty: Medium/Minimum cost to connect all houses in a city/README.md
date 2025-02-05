<h2><a href="https://www.geeksforgeeks.org/problems/minimum-cost-to-connect-all-houses-in-a-city/1?page=4&difficulty=Medium&status=unsolved&sortBy=accuracy">Minimum cost to connect all houses in a city</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given a 2D array of houses[][] consisting of n 2D coordinates {x, y} where each coordinate represents the <strong>location of each house</strong>, the task is to find the<strong> minimum cost to connect</strong> all the houses of the city.</span></p>
<p><span style="font-size: 18px;">The <strong>cost of connecting</strong> two houses is the <strong>Manhattan Distance</strong> between the two points (xi, yi) and (xj, yj) i.e., |xi – xj| + |yi – yj|, where |p| denotes the absolute value of p.</span></p>
<p><span style="font-size: 18px;"><strong>Examples :</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>n = 5 houses[][] = [[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]]
<strong>Output: </strong>20<br></span><span style="font-size: 18px;"><span style="font-size: 18px;"><strong>Explanation: </strong><br>Connect house 1 (0, 0) with house 2 (2, 2) with cost = 4
Connect house 2 (2, 2) with house 3 (3, 10) with cost =9 
Connect house 2 (2, 2) with house 4 (5, 2) with cost =3 
At last, connect house 4 (5, 2) with house 5 (7, 0) with cost 4.
All the houses are connected now.
The overall minimum cost is 4 + 9 + 3 + 4 = 20.<br></span></span><img src="https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/problem_desc/Web/Other/blobid0_1727719998.jpg" width="449" height="276"> </pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>n = 4 houses[][] = [[0, 0], [1, 1], [1, 3], [3, 0]]
<strong>Output: </strong>7<br></span><strong>Explanation:</strong> 
Connect house 1 (0, 0) with house 2 (1, 1) with cost = 2
Connect house 2 (1, 1) with house 3 (1, 3) with cost =2 
Connect house 1 (0, 0) with house 4 (3, 0) with cost =3 
The overall minimum cost is 3 + 2 + 2 = 7.
</pre>
<p><span style="font-size: 18px;"><strong>Constraint:</strong><br>1&lt;=n&lt;=10<sup>3</sup><br>0&lt;=</span><span style="font-size: 18px;">houses</span><span style="font-size: 18px;">[i][j]&lt;=</span><span style="font-size: 18px;">10</span><sup>3</sup></p>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:&nbsp;</strong>O(n<sup>2</sup>),</span><br><span style="font-size: 18px;"><strong>Expected Space Complexity:&nbsp;</strong>O(n<sup>2</sup>)</span></p></div>