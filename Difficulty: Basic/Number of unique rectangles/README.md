<h2><a href="https://www.geeksforgeeks.org/problems/number-of-unique-rectangles1849/1?page=30&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">Number of unique rectangles</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">You are given <strong>N </strong>unit squares (squares with side length 1 unit), the task is to make rectangles using these squares and to count the number of rotationally unique rectangles. Two rectangles are rotationally unique if one can’t be rotated to become equivalent to the other one.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>N = </strong>4</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">5</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">Total rectangles we can make from 4
unit squares are: 1x1, 1x2, 1x3, 2x2,
1x4, 2x1, 3x1, and 4x1.
But we can get 2x1, 3x1, 4x1
by rotating 1x2, 1x3, 1x4.
So these five rectangles are rotationally unique.
1x1, 1x2, 2x2, 1x3 and 1x4.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>N = </strong>5</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">6</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">We can make only 6 rotationally unique
rectangles from 5 unit squares.</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>noOfUniqueRectangles()</strong> which takes an Integer N as input and returns the answer.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(N*sqrt(N))<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong></span><br>
<span style="font-size:18px">1 &lt;= N &lt;= 10<sup>6</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;