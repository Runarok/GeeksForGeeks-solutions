<h2><a href="https://www.geeksforgeeks.org/problems/find-x5215/1?page=16&status=unsolved&sortBy=accuracy">Find X</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a value <strong>N</strong>. Find number of values X (1&lt;=X&lt;=N)&nbsp;which satisfy the equation.<br>
X + S(F(X)) + S(F(S(F(X)))&nbsp;= N, where F(X) is a function which returns the product of digits of X, and S(X) is a function which returns sum of digits of X.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>N = </strong>6</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">1</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">There is only one solution when N = 6,
i.e. X = 2. F(X) = 2, S(F(X)) = 2,
F(S(F(X))) = 2, S(F(S(F(X))) = 2. Therefore,
X + S(F(X)) + S(F(S(F(X))) = 2+2+2 = 6</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>N = </strong>2</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">0</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">There are no possible solutions for N = 2.
</span></pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>findX()</strong> which takes an Integer N as input and returns the count of numbers satisfying the given equation.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(log<sub>10</sub>N)<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong></span><br>
<span style="font-size:18px">1 &lt;= N &lt;= 10<sup>5</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;