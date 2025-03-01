<h2><a href="https://www.geeksforgeeks.org/problems/good-pairs4519/1?page=4&status=unsolved&sortBy=accuracy">Good Pairs</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given an array of positive integers of size N. Count the number of good&nbsp;pairs (i,j) such that:</span></p>

<ul>
	<li><span style="font-size:18px">1≤ i ≤ N,</span></li>
	<li><span style="font-size:18px">1≤ j ≤ N</span></li>
	<li><span style="font-size:18px">and <strong>arr<sub>i</sub> &lt; arr<sub>j</sub></strong>.</span></li>
</ul>

<p><span style="font-size:18px"><strong>Example 1</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N = 2
arr[] = {2, 1}  
<strong>Output: </strong>1
<strong>Explanation : </strong>The only good pair is (2,1). 
</span></pre>

<p><span style="font-size:18px"><strong>Example 2</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N = 3
arr[] = {2 ,3, 2}</span><span style="font-size:18px"><strong>
Output</strong>: 2</span><span style="font-size:18px"><strong>
Explanation</strong>: The two good pairs are (2,3) 
and (3,2).
</span></pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>solve()</strong>&nbsp;which takes the array arr[] and its size N as inputs and returns the count of good&nbsp;pairs as described in the problem description.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity</strong>:&nbsp;O(N log N)<br>
<strong>Expected Auxiliary Space</strong>:&nbsp;O(1)</span></p>

<p><span style="font-size:18px"><strong>Constraints</strong>:<br>
1 &lt;= N &lt;= 10^5<br>
1 &lt;= a[i] &lt;= 10^3</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Searching</code>&nbsp;<code>Sorting</code>&nbsp;<code>Algorithms</code>&nbsp;