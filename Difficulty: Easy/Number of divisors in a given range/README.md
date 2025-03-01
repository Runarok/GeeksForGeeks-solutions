<h2><a href="https://www.geeksforgeeks.org/problems/number-of-divisors-in-a-given-range3738/1?page=2&status=unsolved&sortBy=accuracy">Number of divisors in a given range</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a range [<strong>m..n</strong>]. You task is to find the number of integers divisible by either <strong>a</strong> or <strong>b</strong> in the given range. </span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>m = </strong>5, <strong>n = </strong>11, <strong>a = </strong>4, <strong>b = </strong>6</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">2</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">6 and 8 lie in the range and are also
either divisible by 4 or 6.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>m = </strong>1, <strong>n = </strong>3, <strong>a = </strong>2, <strong>b = </strong>3</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">2</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">2 and 3 lie in the range and are also
either divisible by 2 or 3.</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>numOfDiv()</strong> which takes 4 Integers m, n, a, b as input and returns the count of integers in the range m..n which are divisible by either a or b.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(log(max(a,b))<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong></span><br>
<span style="font-size:18px">1 &lt;= m &lt;= n &lt;= 10<sup>5</sup><br>
1 &lt;= a,b &lt;= 500</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;