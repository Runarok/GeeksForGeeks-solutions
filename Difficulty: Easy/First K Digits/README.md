<h2><a href="https://www.geeksforgeeks.org/problems/first-k-digits2512/1?page=5&status=unsolved&sortBy=accuracy">First K Digits</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a positive integer n, find first k digits after the decimal in the value of 1/n and return it as a string. </span></p>

<p><span style="font-size:18px"><strong>Note:&nbsp;</strong>Your program should avoid overflow and floating-point arithmetic.&nbsp;</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>n = 3, k = 3
<strong>Output:</strong> 333
<strong>Explanation</strong>: 1/3=0.33333, so
after point 3 digits are 3,3,3.</span></pre>

<p><span style="font-size:18px">â€‹<strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>: n = 50, k = 4
<strong>Output:</strong> 0200
<strong>Explanation</strong>: 1/50=0.020000, so 
after point 4 digits are 0,2,0,0.</span></pre>

<p><span style="font-size:18px"><strong>Your Task:&nbsp;&nbsp;</strong><br>
You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>Kdigits()</strong>&nbsp;which takes&nbsp;<strong>n, k&nbsp;</strong>as inputs and returns the string.<br>
<br>
<strong>Expected Time Complexity:</strong>&nbsp;O(k)<br>
<strong>Expected Auxiliary Space:</strong>&nbsp;O(1)<br>
<br>
<strong>Constraints:</strong><br>
1 ≤ n, k ≤ 10<sup>5</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;