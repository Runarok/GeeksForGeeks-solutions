<h2><a href="https://www.geeksforgeeks.org/problems/kronecker-product0918/1?page=1&category=Matrix,Graph&difficulty=Easy&status=unsolved&sortBy=accuracy">Kronecker Product</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a <strong>n*m</strong>&nbsp;matrix <strong>A</strong> and a <strong>p*q</strong>&nbsp;matrix <strong>B</strong>, their <strong>Kronecker product</strong> C = A tensor B, also called their matrix direct product, is an <strong>(np)*(mq)</strong>&nbsp;matrix.<br>
A tensor B<br>
=<br>
|a<sub>11</sub>B &nbsp; &nbsp;a<sub>12</sub>B|&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>
|a<sub>21</sub>B &nbsp; &nbsp;a<sub>22</sub>B|<br>
=&nbsp; &nbsp;<br>
|a<sub>11</sub>b<sub>11 &nbsp;&nbsp;</sub> a<sub>11</sub>b<sub>12 &nbsp;&nbsp;</sub> a<sub>12</sub>b<sub>11 &nbsp;&nbsp;</sub> a<sub>12</sub>b<sub>12</sub>|<br>
|a<sub>11</sub>b<sub>21 &nbsp;&nbsp;</sub> a<sub>11</sub>b<sub>22 &nbsp;&nbsp;</sub> a<sub>12</sub>b<sub>21 &nbsp;&nbsp;</sub> a<sub>12</sub>b<sub>22</sub>|<br>
|a<sub>11</sub>b<sub>31 &nbsp;&nbsp;</sub> a<sub>11</sub>b<sub>32 &nbsp;&nbsp;</sub> a<sub>12</sub>b<sub>31 &nbsp;&nbsp;</sub> a<sub>12</sub>b<sub>32</sub>|<br>
|a<sub>21</sub>b<sub>11 &nbsp;&nbsp;</sub> a<sub>21</sub>b<sub>12 &nbsp;&nbsp;</sub> a<sub>22</sub>b<sub>11 &nbsp;&nbsp;</sub> a<sub>22</sub>b<sub>12</sub>|<br>
|a<sub>21</sub>b<sub>21 &nbsp;&nbsp;</sub> a<sub>21</sub>b<sub>22 &nbsp;&nbsp;</sub> a<sub>22</sub>b<sub>21 &nbsp;&nbsp;</sub> a<sub>22</sub>b<sub>22</sub>|<br>
|a<sub>21</sub>b<sub>31 &nbsp;&nbsp;</sub> a<sub>21</sub>b<sub>32 &nbsp;&nbsp;</sub> a<sub>22</sub>b<sub>31 &nbsp; </sub>&nbsp;a<sub>22</sub>b<sub>32</sub>|</span></p>

<p>&nbsp;</p>

<p><strong><span style="font-size:18px">Example 1:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong> 
n = 2, m = 2 
p = 2, q = 2
A = {{1, 2}, 
&nbsp;    {3, 4}}
B = {{0, 5}, 
&nbsp;    {6, 7}}
<strong>Output:</strong> {{0, 5, 0, 10}, 
&nbsp;        {6, 7, 12, 14}, 
&nbsp;        {0, 15, 0, 20}, 
&nbsp;        {18, 21, 24, 28}}
<strong>Explaination:</strong> If the multiplication process 
is followed then this will be the answer.</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You do not need to read input or print anything. Your task is to complete the function <strong>kroneckerProduct()</strong> which takes n, m, p, q and A and B as input parameters and returns the resultant matrix.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(n*m*p*q)<br>
<strong>Expected Auxiliary Space:</strong> O(n*m*p*q)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ n, m, p, q ≤ 20<br>
1 ≤ A[i][j], B[i][j] ≤ 100&nbsp;</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Matrix</code>&nbsp;<code>Data Structures</code>&nbsp;