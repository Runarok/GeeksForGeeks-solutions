<h2><a href="https://www.geeksforgeeks.org/problems/base-conversion0924/1?page=13&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">Base Conversion</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given four&nbsp;numbers convert:</span></p>
<ul>
<li><span style="font-size: 18px;">a, a decimal number to the binary equivalent</span></li>
<li><span style="font-size: 18px;">b, a binary to decimal equivalent</span></li>
<li><span style="font-size: 18px;">c, decimal to hexadecimal equivalent</span></li>
<li><span style="font-size: 18px;">d, hexadecimal to decimal equivalent</span></li>
</ul>
<p><strong><span style="font-size: 18px;">Example 1:</span></strong></p>
<pre><span style="font-size: 18px;"><strong>Input :</strong>
a = 6
b = 110
c = 20
d = 2A
<strong>Output:</strong>
110, 6, 14, 42
<strong>Explanation:</strong>
(6)<sub>10</sub>&nbsp;= (110)<sub>2
</sub>(110)<sub>2</sub>&nbsp;= (6)<sub>10</sub>
(20)<sub>10</sub>&nbsp;= (14)<sub>16</sub>
(2A)<sub>16</sub>&nbsp;= (42)<sub>10</sub>
</span></pre>
<p><span style="font-size: 18px;"><strong>Example 2:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:
</strong>a = 10 
b = 111 
c = 25 
d = FA
<strong>Output:
</strong></span><span style="font-size: 20px;"><span style="font-size: 18px;">1010, 7, 19, 250
</span><strong><span style="font-size: 18px;">Explanation:
</span></strong></span><span style="font-size: 18px;">(10)<sub>10</sub>&nbsp;= (1010)<sub>2</sub>
(111)<sub>2</sub>&nbsp;= (7)<sub>10</sub>
(25)<sub>10</sub>&nbsp;= (19)<sub>16</sub>
(FA)<sub>16</sub>&nbsp;= (250)<sub>10</sub></span>
</pre>
<p><br><span style="font-size: 18px;"><strong>Your Task:</strong><br>You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>convert()</strong>&nbsp;which takes three integers a, b, c, and string d<strong> </strong>as input parameters and returns the converted numbers as an array of four strings.</span></p>
<p>&nbsp;</p>
<p><br><span style="font-size: 18px;"><strong>Expected Time Complex</strong><strong>ity: </strong>O(log(max(a,b,c)) + |d|)<br><strong>Expected Auxiliary Space: </strong>O(1)<br><br><strong>Constraints:</strong><br>1 &lt;= a,c &lt;= 500<br>1 &lt;= b &lt;= 100000(base 2)<br>1 &lt;= d &lt;= 100000(base 16)</span></p></div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Paytm</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;