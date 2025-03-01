<h2><a href="https://www.geeksforgeeks.org/problems/possible-pairs1550/1?page=2&status=unsolved&sortBy=accuracy">Possible Pairs</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given X and Y as the GCD and LCM of two numbers A and B. Find all possible pairs of (A,B).<br>
<strong>Note:</strong> (a, b) and (b, a) are considered as two different pairs.</span></p>

<p><strong><span style="font-size:18px">Example 1:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong> x = 2, y = 12
<strong>Output:</strong> 4
<strong>Explaination:</strong> The pairs are (2, 12), 
(4, 6), (6, 4) and (12, 2).</span></pre>

<p><br>
<strong><span style="font-size:18px">Example 2:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong> x = 3, y = 6
<strong>Output:</strong> 2
<strong>Explaination:</strong> The pairs are (3, 6) and 
(6, 3).</span></pre>

<p><br>
<strong><span style="font-size:18px">Example 3:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong> x = 6, y = 4
<strong>Output:</strong> 0
<strong>Explaination:</strong> There is no such pair such 
that gcd is 6 and lcm is 4.</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
You do not need to read input or print anything. Your task is to complete the function <strong>pairCount()</strong> which takes x&nbsp;and y&nbsp;as input parameters and returns the number of possibe pairs.</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(sqrt(N)*LogN)&nbsp; &nbsp; [N is maximum of x&nbsp;and y]<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ x, y&nbsp;≤ 10<sup>4</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Factorization</code>&nbsp;<code>Algorithms</code>&nbsp;