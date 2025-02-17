<h2><a href="https://www.geeksforgeeks.org/problems/c-nega-bit2019/1?page=2&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">C++ Nega Bit</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given two integer numbers, <strong>F </strong>and <strong>S.&nbsp;</strong>In binary form of the numbers, for every i<sup>th&nbsp;</sup>set bit in <strong>F, negate&nbsp;</strong>the i <sup>th&nbsp;</sup>bit in&nbsp;<strong>S.</strong></span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>F = </strong>2 , <strong>S = </strong>5</span>
<span style="font-size:18px"><strong>Output:
</strong>7</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">2 is represented as 10 in binary and
5 is represented as 101. Hence negating
the 2nd bit of 5 from right, thus the
new number becomes 7 i.e. 111. </span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>F = </strong>1 , <strong>S = </strong>3</span>
<span style="font-size:18px"><strong>Output:
</strong>2</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">1-1 and 3-11 in binary, thus negating
1st bit of 3 from right we get 10 i.e. 2. </span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>negaBit()</strong> which takes 2 Integers F and S as input and returns the modified <strong>S</strong>.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(1)<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong></span><br>
<span style="font-size:18px">1 &lt;= F,S &lt;= 10<sup>6</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>CPP</code>&nbsp;<code>Binary Representation</code>&nbsp;<code>Operators</code>&nbsp;<code>Algorithms</code>&nbsp;