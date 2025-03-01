<h2><a href="https://www.geeksforgeeks.org/problems/largest-power-of-prime4416/1?page=3&status=unsolved&sortBy=accuracy">Largest power of prime</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a positive integer <strong>N</strong> and a prime <strong>p</strong>, the task is to&nbsp;print the largest power of prime <strong>p</strong> that divides <strong>N!</strong>. Here N! means the factorial of N = 1 x 2 x 3 . . (N-1) x N.<br>
Note that the largest power may be 0 too.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>N = </strong>5 , <strong>p = </strong>2</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">3</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">5! = 120. The highest x for which 2<sup>x</sup>
divides 120 is 3, as 120%8 = 0.
So, the Output is 3.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>N = </strong>3 , <strong>p = </strong>5</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">0</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">3! = 6. The highest x for which 5<sup>x</sup>
divides 6 is 0, as 6%1 = 0.
So, the Output is 0.</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>largestPowerOfPrime()</strong> which takes 2 Integers N and p as input and returns the answer.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(log<sub>p</sub>(N))<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong></span><br>
<span style="font-size:18px">1 &lt;=&nbsp;N &lt;= 10<sup>5</sup></span><br>
<span style="font-size:18px">2 &lt;= p &lt;= 5000</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;