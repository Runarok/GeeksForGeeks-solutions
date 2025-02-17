<h2><a href="https://www.geeksforgeeks.org/problems/sum-of-digit-modified1409/1?page=4&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">Sum of Digit Modified</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a number N. Check whether it is a magic number or not.<br>
Note:- A number is said to be a magic number, if the sum of its digits are calculated till a single digit recursively by adding the sum of the digits after every addition and&nbsp;the single digit comes out to be 1.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong> N = 1234
<strong>Output:</strong> 1
<strong>Explanation:</strong> 1 + 2 + 3 + 4 = 10, 
Again 1 + 0 = 1. Thus, 1234 is a magic 
number. </span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong> N = 1235
<strong>Output:</strong> 0
<strong>Explanation:</strong> 1 + 2 + 3 + 5 = 11. Again, 
1 + 1 = 2. Thus, 1235 is not a magic number.</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything.Your task is to complete the function <strong>isMagic()</strong> which takes a number N as input parameter and returns 1 if the number is a magic number.Otherwise, it returns 0.</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity:</strong>O(LogN)<br>
<strong>Expected Auxillary Space:</strong>O(1)</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1&lt;=N&lt;=10<sup>9</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;