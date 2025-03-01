<h2><a href="https://www.geeksforgeeks.org/problems/modified-fibonacci4449/1?page=12&status=unsolved&sortBy=accuracy">Modified Fibonacci</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given 4 integers&nbsp;A, B, C and&nbsp;N,&nbsp;find the value of F(N) such that<br>
F(1) = A + B&nbsp;<br>
F(2) = B + C&nbsp;<br>
F(N) = F(N-1) - F(N-2),&nbsp;&nbsp;for N&nbsp;&gt; 2. </span><br>
&nbsp;</p>

<p><strong><span style="font-size:18px">Example 1:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong> N = 2, A = 2, B = 3, C = 4
<strong>Output:</strong> 7
<strong>Explaination:</strong> F(2) = B+C = 3+4 = 7</span></pre>

<p><br>
<strong><span style="font-size:18px">Example 2:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong> N = 3, A = 2, B = 3, C = 4
<strong>Output:</strong> 2
<strong>Explaination:</strong> F(3) = F(2)- F(1) = 7-5 = 2</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
You do not need to read input or print anything. Your task is to complete the function <strong>modifiedFib()</strong> which takes the values N, A, B and C as input parameters and returns F(N).&nbsp;Since F(N) modulo (10<sup>9</sup>+7).</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(1)<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ N ≤ 10<sup>12</sup><br>
1 ≤ A, B, C ≤ 10<sup>9</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Fibonacci</code>&nbsp;<code>Modular Arithmetic</code>&nbsp;<code>Algorithms</code>&nbsp;