<h2><a href="https://www.geeksforgeeks.org/problems/help-nobita0532/1?page=2&category=Strings&status=unsolved,attempted&sortBy=accuracy">Odd Even Problem</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given a string <strong>s</strong>&nbsp;of&nbsp;<strong>lowercase English </strong>characters, determine whether the summation of <strong>x</strong> and&nbsp;<strong>y</strong>&nbsp;is<strong> <em>EVEN</em>&nbsp;</strong>or<strong> <em>ODD.</em></strong><br></span><span style="font-size: 18px;">where:</span></p>
<ol>
<li><span style="font-size: 18px;"><strong><em>x</em></strong> is the count of distinct characters that occupy&nbsp;<strong>even </strong>positions in the English alphabet and have <strong>even </strong>frequency.&nbsp;</span></li>
<li><span style="font-size: 18px;"> <strong><em>y</em></strong> is the count of distinct characters that occupy&nbsp;<strong>odd </strong>positions in the English alphabet and have <strong>odd </strong>frequency.</span></li>
</ol>
<p><span style="font-size: 18px;"><strong>Ex:</strong> string = "ab" here 'a' has an odd(1) position in the English alphabet &amp; has an odd(1) frequency in the string so a is odd but b has an even(2) position in the English alphabet &amp; has odd(1) frequency so it doesn't count(since string doesn't have 2 b's) so the final answer x + y = 1+0 = 1(odd) would be "ODD".</span></p>
<p><span style="font-size: 18px;"><strong>Note</strong>: </span></p>
<ul>
<li><span style="font-size: 18px;">Return "<strong>EVEN</strong>" if the sum of x &amp; y is even otherwise return "<strong>ODD</strong>".</span></li>
<li><span style="font-size: 18px;">You need to find index of characters in the english alphabet <strong>"abcdefghijklmnopqrstuvwxyz".</strong></span></li>
</ul>
<p><span style="font-size: 18px;"><strong>Examples :</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>s = "abbbcc"
<strong>Output:</strong> ODD
<strong>Explanation: </strong>x = 0 and y = 1 so (x + y) is ODD. 'a' occupies 1st place(odd) in english alphabets and its frequency is odd(1), 'b' occupies 2nd place(even) but its frequency is odd(3) so it doesn't get counted and 'c' occupies 3rd place(odd) but its frequency is even(2) so it also doesn't get counted.
</span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>s = "nobitaa"
<strong>Output:</strong> EVEN
<strong>Explanation:</strong> Here n, b, t &amp; a would not count since doesn't match with the <strong>even</strong> condition but o &amp; i will be counted as it satisfies the <strong>odd</strong> conditions so x = 0 and y = 2 so (x + y) is EVEN.
</span></pre>
<p>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:&nbsp;</strong>O(|s|)<br><strong>Expected Auxiliary Space:&nbsp;</strong>O(1)&nbsp;</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ |s| ≤ 10<sup>5</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Hash</code>&nbsp;<code>Strings</code>&nbsp;<code>Bit Magic</code>&nbsp;<code>Data Structures</code>&nbsp;