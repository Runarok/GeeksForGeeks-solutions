<h2><a href="https://www.geeksforgeeks.org/problems/find-the-smallest-root-of-the-equation-x2-sxx-n0-where-sx-is-the-sum-of-digits-of-root-x2219/1?page=16&status=unsolved&sortBy=accuracy">Find the smallest root</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">You are given an integer n, find the smallest positive integer root of equation x, or else print -1 if no roots are found.<br>Equation: x^2+s(x)*x-n=0<br>where x, n are positive integers, s(x) is the function, equal to the sum of digits of number x in the decimal number system.</span><br>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Example 1:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>n = 110
<strong>Output: </strong>10
<strong>Explanation: </strong>x=10 is the minimum root. 
As s(10)=1+0=1 and 100+1*10-110=0.
</span></pre>
<p><span style="font-size: 18px;"><strong>Example 2:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>n = 5
<strong>Output: </strong>-1
<strong>Explanation: </strong>There is no x possible which
satisfy the above equation.
</span></pre>
<p>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Your Task:</strong><br>You don't need to read or print anything. Your task is to complete the function&nbsp;<strong>Root()</strong>&nbsp;which takes n as input parameter and retuns the minimum root of the given equation. If not possible returns -1.</span><br>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:&nbsp;</strong>O(k) where k is constant<br><strong>Expected Space Complexity:&nbsp;</strong>O(1)</span><br>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 &lt;= n &lt;= 10<sup>18</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;