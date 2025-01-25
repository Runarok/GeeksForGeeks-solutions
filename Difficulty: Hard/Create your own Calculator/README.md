<h2><a href="https://www.geeksforgeeks.org/problems/create-your-own-calculator4308/1?page=5&difficulty=Hard&status=unsolved&sortBy=accuracy">Create your own Calculator</a></h2><h3>Difficulty Level : Difficulty: Hard</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given the co-effecients of X,Y and Z in&nbsp;a system of simultaneous equations. Find the values of X,Y and Z.</span></p>

<p><span style="font-size:18px"><strong>&nbsp;a1X + b1Y + c1Z = d1</strong></span><br>
<span style="font-size:18px"><strong>&nbsp;a2X + b2Y + c2Z = d2</strong></span><br>
<span style="font-size:18px"><strong>&nbsp;a3X + b3Y + c3Z = d3</strong><br>
<br>
<strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>: 
Arr = {{5, 4, 2, 0},
       {1, 4, 2, 0},
&nbsp;      {4, 2, 9, 0}}
<strong>Output: </strong>{0, 0, 0}&nbsp;
<strong>Explanation</strong>: After calculating with these
given coefficient the value of X, Y, Z is
0, 0, 0.</span>
</pre>

<p><br>
<span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: 
</strong>Arr = {{4.2, 6, 7, 10},
       {1, 2, 3, 12},
&nbsp;      {3, 2, 2, 20}}
<strong>Output:&nbsp;</strong>{3, 4, -1}
<strong>Explanation</strong>: After calculating with these
given coefficient the value of X, Y, Z is
3, 4, -1. 
</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:&nbsp;&nbsp;</strong><br>
You dont need to read input or print anything. Complete the function <strong>myCalculator()&nbsp;</strong>which takes Arr&nbsp;as input parameter and returns <strong>0</strong> in case the system is inconsistent and <strong>1</strong> in case the system is consistent and has infinitely many solutions.</span>&nbsp;<span style="font-size:18px">In&nbsp;case the system is consistent and has a unique solution, return&nbsp;3 space separated integers denoting the floor values of X, Y and Z respectively.</span><br>
<br>
<span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(1)<br>
<strong>Expected Auxiliary Space:</strong> O(1)<br>
<br>
<strong>Constraints:</strong><br>
-100 &lt;= Arr[i][j]&nbsp;&lt;=100</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;