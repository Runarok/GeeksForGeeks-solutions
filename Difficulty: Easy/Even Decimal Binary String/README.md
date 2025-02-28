<h2><a href="https://www.geeksforgeeks.org/problems/even-decimal-binary-string4748/1?page=2&category=Strings&status=unsolved,attempted&sortBy=accuracy">Even Decimal Binary String</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a binary string of size <strong>N</strong>,&nbsp;you have to return the number of&nbsp;substrings that have&nbsp;even value in its decimal form.<br>
Note: Most significant bit is on the right end side. For example - binary representation of 6 is 011.&nbsp;</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>:
N = 3
</span><span style="font-size:18px">S = "101"
</span><span style="font-size:18px"><strong>Output:</strong> 2
</span><span style="font-size:18px"><strong>Explanation : 
</strong></span><span style="font-size:18px">Substrings in S: 
1, 10, 101, 0, 01, 1
</span><span style="font-size:18px">Corresponding decimal values:
1, 1, 5, 0, 2, 1
There are only 2 even decimal valued 
substrings.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>:</span>
<span style="font-size:18px">N = 5</span>
<span style="font-size:18px">S = "10010"</span>
<span style="font-size:18px"><strong>Output:</strong> 
8
<strong>Explanation:
</strong></span><span style="font-size:18px">Substrings in S:
1, 0, 0, 1, 0, 10, 00, 01, 10, 100, 
001, 010, 1001, 0010 and 10010
Corresponding decimal Values are:
1, 0, 0, 1, 0, 1, 0, 2, 1, 1, 4, 2,
9, 4 ans 9
There are 8 decimal values which are even.</span>
</pre>

<p><span style="font-size:18px"><strong>Your Task:&nbsp;&nbsp;</strong><br>
You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>evenDecimalSubStr()</strong>&nbsp;which takes the string S, its size N<strong>&nbsp;</strong>as input parameters&nbsp;and returns&nbsp;the number of&nbsp;substrings&nbsp;that has even value in its decimal form.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong>&nbsp;O(N)<br>
<strong>Expected Auxiliary Space:</strong>&nbsp;O(1)</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ T ≤&nbsp;1000<br>
1 ≤&nbsp;N ≤&nbsp;10<sup>5</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>Binary Representation</code>&nbsp;<code>Data Structures</code>&nbsp;