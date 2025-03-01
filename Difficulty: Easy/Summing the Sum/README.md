<h2><a href="https://www.geeksforgeeks.org/problems/summing-the-sum2105/1?page=11&status=unsolved&sortBy=accuracy">Summing the Sum</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given three integers N, M, and K. Lets Sum(N) be a function that calculates twice the sum of first N natural numbers. Calculate Sum(K+Sum(K+Sum(K+....+Sum(N+K) up to M terms.</span></p>

<p><strong><span style="font-size:18px">Example 1:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N=1, M=2, K=3
<strong>Output:</strong>
552
<strong>Explanation:</strong>
Sum(3+Sum(3+1))=Sum(3+Sum(4)) 
=Sum(3+20)=Sum(23)=Sum(552)</span></pre>

<p><strong><span style="font-size:18px">Example 2:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N=2, M=2, K=2
<strong>Output:</strong>
506
<strong>Explanation:</strong>
Sum(2+Sum(2+2))=Sum(2+Sum(4))
Sum(2+20)=506</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input&nbsp;or print anything. Your task is to complete the function <strong>modifiedSum()</strong> which takes three integers N, M, and K as input parameters and returns the required sum.&nbsp;</span></p>

<p><span style="font-size:18px"><strong>Note:&nbsp;</strong>Since the answer can be very large, return the answer modulo 10^9 + 7.</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity:</strong>O(M)<br>
<strong>Expected Auxillary Space:</strong>O(1)</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1&lt;=N,M,K&lt;=10<sup>6</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>series</code>&nbsp;