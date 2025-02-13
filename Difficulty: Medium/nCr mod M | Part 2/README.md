<h2><a href="https://www.geeksforgeeks.org/problems/ncr-mod-m-part-20611/1?page=1&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">nCr mod M | Part 2</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given 3&nbsp;integers n, r and m. You task is to calculate <sup>n</sup>Cr%m.<br><strong>Note:&nbsp;</strong>m is a square free number and largest prime factor of m &lt;= 50.</span></p>
<p>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Example 1:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>n = 5, r = 2, m = 98697
<strong>Output: </strong>10
<strong>Explanation: </strong><sup>5</sup>C2 = 5!/(2!*3!) = 10%98697 = 10
</span></pre>
<p><span style="font-size: 18px;"><strong>Example 2:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>n = 3, r = 2, m = 98697
<strong>Output: </strong>3
<strong>Explanation: </strong><sup>3</sup>C2 = 3!/(2!*1!) = 3%98697 = 3
</span></pre>
<p>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Your Task:</strong><br>You don't need to read or print anything. Your task is to complete the function&nbsp;<strong>nCrModM()&nbsp;</strong>which takes n, r and m as input parameter and returns nCr modulo m.</span><br>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:&nbsp;</strong>O(m +&nbsp;log<sub>m</sub>n)&nbsp;<br><strong>Expected Space Complexity:&nbsp;</strong>O(m)</span><br>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 &lt;= r&nbsp;&lt;= n&nbsp;&lt;= 10<sup>9</sup><br>1 &lt;= m &lt;= 10<sup>5</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Combinatorial</code>&nbsp;<code>Modular Arithmetic</code>&nbsp;<code>Algorithms</code>&nbsp;