<h2><a href="https://www.geeksforgeeks.org/problems/largest-square-in-a-binary-matrix-with-at-most-k-1s-for-multiple-queries/1?page=1&category=Binary%20Search&difficulty=Medium,Hard&status=unsolved,attempted&sortBy=accuracy">Binary Matrix with at most K 1s</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given a binary matrix <strong>M</strong> with <strong>R </strong>rows and <strong>C</strong> columns, where each element of the matrix will be 0 or 1. Find the largest square that can be formed with center <strong>(i, j)</strong> and contains atmost <strong>K</strong> 1s. There are Q queries, a single query has two integers denoting the centre (i,j) of the square.</span></p>
<p>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Example 1:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:
</strong>R = 4, C = 5
M = {{1, 0, 1, 0, 0}&nbsp;
     {1, 0, 1, 1, 1}&nbsp;
     {1, 1, 1, 1, 1}&nbsp;
     {1, 0, 0, 1, 0}}
K = 9, Q = 1
q_i[] = {1}
q_j[] = {2}
<strong>Output:
</strong>3
<strong>Explanation:</strong>
Maximum length square with center
at (1, 2)&nbsp;that can be formed is of
3 length from (0, 1) to (2, 3).</span>
</pre>
<div><span style="font-size: 18px;"><strong>Example 2:</strong></span></div>
<pre><span style="font-size: 18px;"><strong>Input:
</strong>R = 3, C = 3
M = {{1, 1, 1}&nbsp;
     {1, 1, 1}&nbsp;
     {1, 1, 1}}
K = 9, Q = 2
q_i[] = {1, 2}
q_j[] = {1, 2}
<strong>Output :</strong>
3 1</span>
</pre>
<p><br><span style="font-size: 18px;"><strong>Your Task:&nbsp;&nbsp;</strong><br>You don't need to read input or print anything. Your task is to complete the function <strong>largestSquare()</strong>&nbsp;which takes 2 integers R, and C followed by a list of lists M denoting the binary matrix and then three integers i,j, and K as input and returns a list of integers denting the largest Square possible for each query.</span></p>
<p><br><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(R*C + Q*log(MIN_DIST)), <br></span><span style="font-size: 18px;"><strong>Expected Auxiliary Space:</strong> O(R*C)</span></p>
<p><br><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ R,C ≤ 500<br>1 ≤ Q ≤ 10<sup>4</sup><br>0 ≤ K ≤ R*C<br>0 ≤ i &lt; R<br>0 ≤ j &lt; C</span></p></div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Directi</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Searching</code>&nbsp;<code>Dynamic Programming</code>&nbsp;<code>Divide and Conquer</code>&nbsp;<code>Matrix</code>&nbsp;<code>Binary Search</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;