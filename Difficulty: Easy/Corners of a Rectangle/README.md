<h2><a href="https://www.geeksforgeeks.org/problems/corners-of-a-rectangle1848/1?page=11&status=unsolved&sortBy=accuracy">Corners of a Rectangle</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Consider a rectangle ABCD. Given the co-ordinates of the mid points of side AD and BC (p and q respectively) along with their length L (AD = BC = L). Find&nbsp;the co-ordinates of the 4 points A, B, C and D.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>L = 2, points = {{1,0},{1,2}}
<strong>Output: </strong>{{0,0},{0,2},{2,0},{2,2}}
<strong>Explanation: </strong>
</span>
</pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>L = 2.8284, points: {{1,1}, {-1,-1}}
<strong>Output: </strong>{{-2,0},{0,-2},{0,2},{2,0}}
<strong>Explanation: </strong></span>

</pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read or print anything. Your task is to compelete the function&nbsp;<strong>findCornerPoints()&nbsp;</strong>which takes a&nbsp;<strong>vector of two points </strong>(p and q),&nbsp;and <strong>length&nbsp;l </strong>as input parameters and&nbsp;returns a <strong>vector</strong> containing the floor value of the corner points of the rectangle in sorted order.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(1)<br>
<strong>Expected Space Complexity:&nbsp;</strong>O(1)</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= L &lt;= 10<sup>5</sup><br>
1 &lt;= p, q &lt;= L</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Geometric</code>&nbsp;