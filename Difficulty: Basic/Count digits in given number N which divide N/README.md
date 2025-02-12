<h2><a href="https://www.geeksforgeeks.org/problems/count-digits-in-given-number-n-which-divide-n3331/1?page=31&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">Count digits in given number N which divide N</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a number S(in the form of a string). Count all the digits in S&nbsp;which divide S. Divisibility by 0 is not allowed. If any digit in S&nbsp;which is repeated divides S, then all repetitions of that digit should be counted.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
S = "35"
<strong>Output:</strong>
1
<strong>Explanation:</strong>
Only 5 digits 35,thus the answer is 1.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
S = "1122324"
<strong>Output:</strong>
7
<strong>Explanation:</strong>
All the digits divide 1122324, therefore,
the answer is 7.</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything.Your task is to complete the function <strong>divisibleByDigits()</strong>&nbsp; which takes the number S(in the form of a string) as input parameter and returns the number of digits of S that divide S.</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(N)<br>
<strong>Expected Auxillary S</strong></span><span style="font-size:18px"><strong>pace:</strong> O(constant)</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1&lt;=|S|&lt;=10<sup>6</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;