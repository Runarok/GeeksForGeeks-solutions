<h2><a href="https://www.geeksforgeeks.org/problems/recursively-find-sum-of-digits3558/1?page=15&status=unsolved&sortBy=accuracy">Recursively find sum of digits</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given two numbers A and B, the task is to find f(A<sup>B</sup>). f(n) which takes a positive integer n as input and does the following:</span></p>
<p><span style="font-size: 18px;"><em>f(n):</em></span></p>
<p><span style="font-size: 18px;"><em>if n <span style="font-family: arial,helvetica,sans-serif;">&lt; 10 </span><span style="font-family: arial,helvetica,sans-serif;"> </span></em></span></p>
<p><span style="font-size: 18px;"><em><span style="font-family: arial,helvetica,sans-serif;">&nbsp;&nbsp;&nbsp; return n</span></em></span></p>
<p><span style="font-size: 18px;"><em><span style="font-family: arial,helvetica,sans-serif;">else return f( sum_of_digits(n) )</span></em></span></p>
<p>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Example 1:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>A = 6, B = 6
<strong>Output: </strong>9
<strong>Explanation: </strong>
f(6<sup>6</sup>) = f(46656) = f(27) = f(9) = 9</span>
</pre>
<p><span style="font-size: 18px;"><strong>Example 2:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>A = 7, B = 3
<strong>Output: </strong>1
<strong>Explanation: </strong>
f(7<sup>3</sup>) = f(343) = f(10) = f(1) = 1</span>
</pre>
<p>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Your Task:</strong><br>You don't need to read or print anything. Your task is to complete the function&nbsp;<strong>SumofDigits()</strong> which takes A and B as input parameters and returns f(A<sup>B</sup>).</span><br>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity: </strong>O(Log(B))<br><strong>Expected Space Complexity:&nbsp;</strong>O(1)</span><br>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 &lt;= A, B &lt;= 10<sup>9</sup>&nbsp;</span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;