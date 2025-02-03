<h2><a href="https://www.geeksforgeeks.org/problems/make-matrix-beautiful-1587115620/1?page=1&category=Matrix&difficulty=Easy,Medium,Hard&status=unsolved,attempted&sortBy=accuracy">Make Matrix Beautiful</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">A beautiful matrix is a matrix in which the sum of elements in each row and column is equal. Given a square matrix&nbsp;<strong>mat[][]</strong>. Find the&nbsp;minimum number of operation(s) that are required to make the matrix beautiful.&nbsp;In one operation you can&nbsp;<strong>increment</strong>&nbsp;the&nbsp;value of any one&nbsp;<strong>cell by 1</strong>.</span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input</strong>: mat[][] = [[1, 2], [3, 4]]
<strong>Output</strong>: 4
<strong>Explanation</strong>: Increment value of cell(0, 0) by 3 and increment value of cell(0, 1) by 1. Hence total 4 operation are required. Such that all rows and columns have sum of 7.
</span></pre>
<pre><span style="font-size: 18px;"><strong>Input</strong>: mat[][] = [[1, 2, 3], [4, 2, 3], [3, 2, 1]]
<strong>Output</strong>: 6
<strong>Explanation</strong>: Increment value of cell(0, 0) by 1, increment value of cell(0, 1) by 2, </span><span style="font-size: 14pt;">increment value of cell(2, 1) by 1, increment value of cell(2, 2) by 2. Such that all rows and columns have sum of 9.</span></pre>
<pre><span style="font-size: 18px;"><strong>Input</strong>: mat[][] = [[0, 2], [3, 4]]
<strong>Output</strong>: 5
<strong>Explanation</strong>: Increment value of cell(0, 0) by 4, increment value of cell(0, 1) by 1. Hence total 5 operation are required.</span></pre>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 &lt;= mat.size(), mat[0].size() &lt;= 500<br>1 &lt;= mat[i][j] &lt;= 10<sup>6</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Matrix</code>&nbsp;<code>Data Structures</code>&nbsp;