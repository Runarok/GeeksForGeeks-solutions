<h2><a href="https://www.geeksforgeeks.org/problems/sum-of-gcds1050/1?page=16&status=unsolved&sortBy=accuracy">Sum of GCDs</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:20px">Given an integer N, find the sum of GCD(i, N) where i = 1&nbsp;to N. GCD denotes the greatest common divisor. Provide the answer modulus 10<sup>9</sup> + 7.</span></p>

<p><br>
<span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>N = 2
<strong>Output:</strong> 3
<strong>Explanation</strong>:
GCD(1,2)+GCD(2,2) = 1 + 2 = 3
</span></pre>

<p><br>
<span style="font-size:18px">â€‹<strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>: N = 10
<strong>Output:</strong> 27
<strong>Explanation</strong>:
GCD(1,10)+GCD(2,10)+...
+GCD(9, 10)+GCD(10, 10)=1+2+..+1+10=27
</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:&nbsp;&nbsp;</strong><br>
You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>sumOfGCDofPairs()</strong>&nbsp;which takes&nbsp;<strong>N&nbsp;</strong>as inputs and returns the answer.<br>
<br>
<strong>Expected Time Complexity:</strong>&nbsp;O(sqrt(N))<br>
<strong>Expected Auxiliary Space:</strong>&nbsp;O(1)<br>
<br>
<strong>Constraints:</strong><br>
1 ≤ N ≤ 10<sup>6</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Numbers</code>&nbsp;<code>Algorithms</code>&nbsp;