<h2><a href="https://www.geeksforgeeks.org/problems/reversing-the-columns-of-a-matrix-1587115621/1?page=1&category=Matrix,Graph&difficulty=Easy&status=unsolved&sortBy=accuracy">Reversing the columns of a Matrix</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given a matrix of dimensions n1 x m1. Reverse its columns in-place such that the last column will become the first column and so on.&nbsp;</span></p>
<p><strong><span style="font-size: 18px;">Example 1:</span></strong></p>
<pre><span style="font-size: 18px;"><strong>Input:
</strong>n1 = 4, m1 = 3
matrix[][] = {{ 1,  2,  3},
              { 5,  6,  7},
              {11, 10,  9},
              {13, 14, 15}}
<strong>Output: </strong>3 2 1 7 6 5 9 10 11 15 14 13
<strong>Explanation:
</strong>Array after exchanging columns:
3 2 1
7 6 5
9 10 11
15 14 13</span></pre>
<p><strong><span style="font-size: 18px;">Example 2:</span></strong></p>
<pre><span style="font-size: 18px;"><strong>Input:
</strong>n1 = 2, m1 = 5
matrix[][] = {{ 1, 2, 3, 4, 5},
              { 6, 7, 8, 9, 10}}
<strong>Output:</strong> 5 4 3 2 1 10 9 8 7 6
<strong>Explanation:</strong>
After reversing the column of matrix
 5 4 3 2 1
10 9 8 7 6</span></pre>
<p><span style="font-size: 18px;"><strong>Your Task:</strong><br>You dont need to read input or print anything. Complete the function <strong>reverseCol()</strong> that takes matrix as input parameter and modifies it in-place such that the last column will become the first column and so on.&nbsp;</span></p>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(n1 * m1)<br><strong>Expected Auxiliary Space: </strong>O(1)&nbsp;</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 &lt;= n1, m1 &lt;= 100<br>0 &lt;= matrix[i][j] &lt;= 1000</span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Matrix</code>&nbsp;<code>Data Structures</code>&nbsp;