<h2><a href="https://www.geeksforgeeks.org/problems/decode-it1646/1?page=2&company=Amazon&status=unsolved,attempted&sortBy=accuracy">Decode It</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">An encoded string S consisting of alphabets(lowercase) and integers(1&lt;=<strong>num</strong>&lt;=9) is given, the task is to decode it and print the character at the '<strong>K</strong>'th position in the string. The pattern in which the strings were encoded were as follows :<br>
original string: jonjonsnowjonjonsnowjonjonsnow<br>
encoded string: jon2snow3</span></p>

<p><span style="font-size:18px">Note: encoded string will always start with an alphabet and end with a number.</span></p>

<p><strong><span style="font-size:18px">Example 1:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
str = "jon2snow3"
k = 8</span>

<span style="font-size:18px"><strong>Output:</strong>
n</span>

<span style="font-size:18px"><strong>Explanation:</strong>
The given string after decoding it will be 
as such: jonjonsnowjonjonsnowjonjonsnow. 
8th character in the string after decoding is:'n'.</span></pre>

<p><strong><span style="font-size:18px">Example 2:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
str = "q3"
k = 3</span>

<span style="font-size:18px"><strong>Output:</strong>
q

<strong>Explanation:
</strong>The given string after decoding it will be
as such: qqq. 3rd character in the string 
after decoding is:'q'.</span>
</pre>

<p><span style="font-size:18px"><strong>Your Task:&nbsp;&nbsp;</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>decodeIt()</strong>&nbsp;which takes the string str and an integer <strong>k&nbsp;</strong>as input parameters&nbsp;and returns the kth character of the mentioned string.</span><br>
<br>
<span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(N), Where N is the size of the original&nbsp;string.<br>
<strong>Expected Auxiliary Space:</strong> O(N)<br>
<br>
<strong>Constraints:</strong><br>
2 &lt;= |str|&nbsp;&lt;= 35<br>
1 &lt;= k&nbsp;&lt;= N</span></p>

<p>&nbsp;</p>
</div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Amazon</code>&nbsp;<code>National Instruments</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>Data Structures</code>&nbsp;