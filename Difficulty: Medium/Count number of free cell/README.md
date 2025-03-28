<h2><a href="https://www.geeksforgeeks.org/problems/count-number-of-free-cell--170646/1?page=1&category=Matrix&difficulty=Easy,Medium,Hard&status=unsolved,attempted&sortBy=accuracy">Count number of free cell</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Suppose you have a Matrix size <strong>n*n</strong>, and given an integer <strong>k</strong> and a set of coordinates <strong>arr</strong>&nbsp;of size&nbsp;<strong>k*2</strong>. Initially, the matrix contains only 0. You are given k tasks and for each task, you are given two coordinates (r = arr[i][0],c = arr[i][1]) [1 based index r and c]. Where coordinates (r,c) denotes r<sup>th&nbsp;</sup>row and c<sup>th&nbsp;</sup>column of the given matrix.</span></p>

<p><span style="font-size:18px">You have to perform each task sequentially in the given order. F</span><span style="font-size:18px">or each task, You have to put 1 in all cells of r<sup>th</sup> row&nbsp; and all cells of c<sup>th</sup> column.</span></p>

<p><span style="font-size:18px">After each task, You have to calculate the number of 0 present in the matrix and return it.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>n = 3, k= 3
arr =
{{2, 2},
 {2, 3},
 {3, 2}}
<strong>Output: </strong>4 2 1<strong>
Explanation: 
</strong>After 1st Operation, all the 2nd row
and all the 2nd column will be filled by
1. So remaning cell with value 0 will be 4
After 2nd Operation, all the 2nd row and all
the 3rd column will be filled by 1. So 
remaning cell with value 0 will be 2<strong>.
</strong>After 3rd Operation cells having value 0 will
be 1.</span>
</pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>n = 2, k = 2
arr = 
{{1, 2},
 {1, 1}}
<strong>Output: </strong>1 0
<strong>Explanation: 
</strong>After 1st Operation, all the 1st row and 
all the 2nd column will be filled by 1. 
So remaning cell with value 0 will be 1.
After 2nd Operation, all the 1st row and 
all the 1st column will be filled by 1. 
So remaning cell with value 0 will be 0<strong>. </strong></span>
</pre>

<p><span style="font-size:18px"><strong>Your&nbsp;Task:</strong><br>
The task is to complete the function <strong>countZero</strong>(), which takes parameter&nbsp;<strong>n,&nbsp;</strong>size of<br>
the matrix, k no of operation and array <strong>arr[][],&nbsp;</strong>which denotes the position of the cells.</span><br>
<span style="font-size:18px">You have to return an array that contains all the results.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity: </strong>O( k ).<br>
<strong>Expected Auxiliary Space:</strong> O( n+n+k ).</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= n, k &lt;= 10<sup>5</sup></span><br>
<span style="font-size:18px">1 &lt;= r, c&nbsp;&lt;= n</span></p>
</div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Intuit</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Hash</code>&nbsp;<code>Matrix</code>&nbsp;<code>Data Structures</code>&nbsp;