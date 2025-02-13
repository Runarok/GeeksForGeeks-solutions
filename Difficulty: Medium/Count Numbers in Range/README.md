<h2><a href="https://www.geeksforgeeks.org/problems/count-numbers-in-range5305/1?page=1&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Count Numbers in Range</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given two positive integers <strong>L</strong> and <strong>R</strong>, return count of numbers having exactly 3 divisors from L to R inclusive.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>L = </strong>1, <strong>R = </strong>10</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">2</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">4 and 9 are two numbers between 1 and 10
and have exactly 3 divisors.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>L = </strong>2, <strong>R = </strong>5</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">1</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">4 is the only number between 2 and 5
and have exactly 3 divisors.</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>count3DivNums()</strong> which takes 2 Integers L, and R as input and returns the count of numbers between L and R having exacly 3 divisors.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(sqrt(R)*log(R))<br>
<strong>Expected Auxiliary Space:</strong> O(sqrt(R))</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong></span><br>
<span style="font-size:18px">1 &lt;= L &lt;= R &lt;= 10<sup>9</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Numbers</code>&nbsp;<code>sieve</code>&nbsp;<code>Algorithms</code>&nbsp;