<h2><a href="https://www.geeksforgeeks.org/problems/matrix-game-10229/1?page=2&category=Matrix,Graph&difficulty=Easy&status=unsolved&sortBy=accuracy">Matrix Game - 1</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given <strong>N</strong> and&nbsp;a <strong>N*N matrix</strong> containing 0’s and 1’s. Group all the row numbers (starting index 0) which are having 1’s at same position.</span></p>

<p><strong>Example 1:</strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N=4
matrix= [0010</span>
            <span style="font-size:18px">0100</span>
            <span style="font-size:18px">0010</span>
            <span style="font-size:18px">0000]
<strong>Output:</strong>
0 1</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">In the above test case, 1st and 3rd row have
the 1's at same column,i.e., 2(starting index 
from 0) so group first and third row. And print 
the index of first row, i.e., 0 (starting index 
from 0).</span>
<span style="font-size:18px">For second row, as it is the only row with same 
indexing of 1's so print it's index , i.e., 1.</span>
<span style="font-size:18px">For forth row, 1 is not present in this row so 
didn't print anything.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N=1
matrix = [0]
<strong>Output:</strong>
-1
<strong>Explanation:</strong>
There is no row containing 1.</span></pre>

<p>&nbsp;</p>

<div><strong><span style="font-size:18px">Your task:</span></strong></div>

<div><span style="font-size:18px">You don't need to read input or print anything. Your task is to complete the function</span><strong><span style="font-size:18px"> groupRows(), </span></strong><span style="font-size:18px">which takes &nbsp;the <strong>matrix</strong>&nbsp;and an integer <strong>N</strong> as input parameters and returns a list of row numbers after grouping. If there is no row containing 1, return&nbsp;<strong>-1</strong>.</span></div>

<div>&nbsp;</div>

<div><span style="font-size:18px"><strong>Expected Time Complexity: </strong>O(n*n)</span></div>

<div><span style="font-size:18px"><strong>Expected Auxiliary Space: </strong>O(n*n)</span></div>

<div>&nbsp;</div>

<div><strong><span style="font-size:18px">Constraints:</span></strong></div>

<div><span style="font-size:18px">1&lt;=N&lt;=20</span></div>

<div>&nbsp;</div>
</div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Ola Cabs</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Matrix</code>&nbsp;<code>Data Structures</code>&nbsp;