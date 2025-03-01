<h2><a href="https://www.geeksforgeeks.org/problems/number-of-solutions4523/1?page=16&status=unsolved&sortBy=accuracy">Number of solutions</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given two integers <strong>b </strong>and <strong>p</strong>. Find the number of integral solutions to x<sup>2</sup> = 1 (mod p) in the closed interval [1, b].</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>b = </strong>5, <strong>p = </strong>7</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">1</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">1<sup>2</sup> = 1%7 = 1. 1 is the only possible
solution in the range [1,5].</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>b = </strong>8, <strong>p = </strong>6</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">3</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">There are 3 possible solutions.
1<sup>2</sup> = 1%6 = 1
5<sup>2</sup> = 25%6 = 1
7<sup>2</sup> = 49%6 = 1</span>
</pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>noOfSol()</strong> which takes 2 Integers b, and p as input and returns count of numbers in the range [1,b] that give a reamainder of 1 when the squared number is divided with p.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(p)<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong></span><br>
<span style="font-size:18px">1 &lt;= b &lt;= 10<sup>9</sup><br>
1 &lt;= p &lt;= 10<sup>5</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;