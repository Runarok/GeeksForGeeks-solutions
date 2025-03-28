<h2><a href="https://www.geeksforgeeks.org/problems/find-transpose-of-a-matrix/1?page=1&status=unsolved&sortBy=accuracy">Find Transpose of a Matrix</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a&nbsp;matrix <strong>mat[][]&nbsp;</strong>find the transpose of a square matrix&nbsp;of size N*N. Transpose of a matrix is obtained by changing rows to columns and columns to rows.<br>
<br>
<strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>:
N = 4
mat[][] = {{1, 1, 1, 1},
&nbsp;          {2, 2, 2, 2}
&nbsp;          {3, 3, 3, 3}
&nbsp;          {4, 4, 4, 4}}
<strong>Output</strong>: 
{{1, 2, 3, 4}, &nbsp;
&nbsp;{1, 2, 3, 4} &nbsp;
&nbsp;{1, 2, 3, 4}
&nbsp;{1, 2, 3, 4}} 
</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>:
N = 2
mat[][] = {{1, 2},
&nbsp;          {-9, -2}}
<strong>Output</strong>:
{{1, -9}, 
&nbsp;{2, -2}}

</span></pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You dont need to read input or print anything.&nbsp;Complete the function <strong>transpose</strong>() which takes matrix[][] and N as input parameter and&nbsp;finds the transpose of the input matrix. You need to do this in-place. That is you need to update the original matrix with the transpose.&nbsp;<br>
<br>
<strong>Expected Time Complexity:</strong> O(N * N)<br>
<strong>Expected Auxiliary Space:</strong> O(1)<br>
<br>
<strong>Constraints:</strong><br>
1 &lt;= N &lt;= 100<br>
-10<sup>3</sup> &lt;= mat[i][j] &lt;= 10<sup>3</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>CPP</code>&nbsp;