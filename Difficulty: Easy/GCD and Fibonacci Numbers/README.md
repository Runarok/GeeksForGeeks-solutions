<h2><a href="https://www.geeksforgeeks.org/problems/gcd-and-fibonacci-numbers4351/1?page=14&status=unsolved&sortBy=accuracy">GCD and Fibonacci Numbers</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">You will be given two positive numbers <strong>M</strong> and <strong>N</strong>. Your task is to print the greatest common divisor of Fib(<strong>M</strong>) and Fib(<strong>N</strong>) where Fib(x) means the x'th Fibonacci numbers defined as:</span></p>

<p><span style="font-size:18px">Fib(0) = 0<br>
Fib(1) = 1<br>
for n &gt; 1, Fib(n) = Fib(n-1) + Fib(n-2)</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong> M = 3, N = 6
<strong>Output:</strong> 2
<strong>Explanation</strong>: Fib(3) = 2 and Fib(6) = 8
So, GCD(2,8)%100 = 2</span></pre>

<p><span style="font-size:18px">â€‹<strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>: M = 7, N = 8
<strong>Output:</strong> 1
<strong>Explanation</strong>: Fib(7) = 13 and Fib(8) = 21
So, GCD(13,21)%100 = 1</span></pre>

<p><span style="font-size:18px"><strong>Your Task:&nbsp;&nbsp;</strong><br>
You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>fibGcd()</strong>&nbsp;which takes<strong> M</strong> and <strong>N&nbsp;</strong>as inputs and returns the answer.The answer may be very large, compute the answer modulo 100</span><span style="font-size:18px">.</span><br>
<br>
<span style="font-size:18px"><strong>Expected Time Complexity:</strong>&nbsp;O(min(M, N))<br>
<strong>Expected Auxiliary Space:</strong>&nbsp;O(1)<br>
<br>
<strong>Constraints:</strong><br>
1 ≤ M, N ≤ 10<sup>3</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Fibonacci</code>&nbsp;<code>Algorithms</code>&nbsp;