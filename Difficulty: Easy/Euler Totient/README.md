<h2><a href="https://www.geeksforgeeks.org/problems/euler-totient2036/1?page=14&status=unsolved&sortBy=accuracy">Euler Totient</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Consider Ø(n) as the <a href="http://www.geeksforgeeks.org/eulers-totient-function/">Euler Totient Function</a> for n. You will be given a positive integer <strong>N</strong> and you have to find the smallest positive integer<strong> n</strong>, n &lt;= N for which the ratio n/Ø(n) is maximized.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>:</span>
<span style="font-size:18px"><strong>N = </strong>6</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">6</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">For n = 1, 2, 3, 4, 5 and 6 the values of
the ratio are 1, 2, 1.5, 2, 1.25 and 3
respectively. The maximum is obtained at 6.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>:</span>
<span style="font-size:18px"><strong>N = </strong>50</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">30</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">For n = 1 to 50, the maximum value of the
ratio is 3.75 which is obtained at n = 30.</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>maximizeEulerRatio()</strong> which takes an Integer N as input and returns the smallest positive integer (&lt;= N) which maximizes </span><span style="font-size:18px">the ratio n/Ø(n) is maximized.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(constant)<br>
<strong>Expected Auxiliary Space:</strong> O(constant)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong></span><br>
<span style="font-size:18px">1 &lt;= N &lt;= 10<sup>12</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;