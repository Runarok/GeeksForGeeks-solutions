<h2><a href="https://www.geeksforgeeks.org/problems/minimum-cost-to-cut-a-board-into-squares/1?page=2&difficulty=Medium&status=unsolved,attempted&sprint=94ade6723438d94ecf0c00c3937dad55&sortBy=accuracy">Minimum Cost to cut a board into squares</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">A board of length <em>m</em>&nbsp;and width <em>n</em>&nbsp;is given.&nbsp;The task is&nbsp;to break this board into <em>m*n</em> squares such that cost of breaking is minimum. The cutting cost for each edge will be given for the board in two arrays x[]&nbsp;and y[]. In short, you&nbsp;need to choose such a sequence of cutting such that cost is minimized. Return the minimized cost.</span></p>
<p><span style="font-size: 18px;"><strong>Examples <br></strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong>m = 6, n= 4, x[] = {2, 1, 3, 1, 4}, y[] = {4, 1, 2}
<strong>Output: </strong>42
<strong>Explanation:</strong> 
<img style="height: 200px; width: 300px;" src="https://media.geeksforgeeks.org/img-practice/board-1646284249.png" alt="">
For above board optimal way to cut into square is:
Total minimum cost in above case is 42. It is 
evaluated using following steps.
Initial Value : Total_cost = 0
Total_cost = Total_cost + edge_cost * total_pieces
Cost 4 Horizontal cut:      Cost = 0 + 4*1 = 4
Cost 4 Vertical cut:        Cost = 4 + 4*2 = 12
Cost 3 Vertical cut:        Cost = 12 + 3*2 = 18
Cost 2 Horizontal cut:      Cost = 18 + 2*3 = 24
Cost 2 Vertical cut:        Cost = 24 + 2*3 = 30
Cost 1 Horizontal cut:      Cost = 30 + 1*4 = 34
Cost 1 Vertical cut:        Cost = 34 + 1*4 = 38
Cost 1 Vertical cut:        Cost = 38 + 1*4 = 42
</span></pre>
<pre>&nbsp;</pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>m = 4, n = 4 x[] = {1, 1, 1} y[] = {1, 1, 1}
<strong>Output: 15
Explanation:</strong> 
<img style="height: 209px; width: 300px;" src="https://media.geeksforgeeks.org/img-practice/board-1646284249-1661926688.png" alt="">
For above board optimal way to cut into square is:
Total minimum cost in above case is 15.
It is evaluated using following steps.
Initial Value : 
Total_cost = 0 Total_cost = Total_cost + edge_cost * total_pieces
Cost 1 Horizontal cut: Cost = 0 + 1*1 = 1
Cost 1 Horizontal cut: Cost = 1 + 1*1 = 2
Cost 1 Horizontal cut: Cost = 2 + 1*1 = 3
Cost 1 Vertical cut:   Cost = 3 + 1*4 = 7
Cost 1 Vertical cut:   Cost = 7 + 1*4 = 11
Cost 1 Vertical cut:   Cost = 11 + 1*4 = 15</span>
</pre>
<p><span style="font-size: 18px;"><strong>Your Task:&nbsp;&nbsp;</strong><br>You don't need to read input or print anything. Your task is to complete the function <em>minimumCostOfBreaking()</em> which takes a&nbsp;string s and returns an integer as output.</span></p>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(NlogN + MlogM)<br><strong>Expected Auxiliary Space:</strong> O(1)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br></span><span style="font-size: 18px;">m &lt;= 10<sup>5, </sup></span><span style="font-size: 18px;">2 &lt;= n<br></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Greedy</code>&nbsp;<code>Algorithms</code>&nbsp;