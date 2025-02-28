<h2><a href="https://www.geeksforgeeks.org/problems/repetition-of-k-length-substring/1?page=1&category=Strings&status=unsolved,attempted&sortBy=accuracy">Repetition of k length substring</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:20px">Given a string <strong>'s'</strong>, your task is to complete the function <strong>checkString</strong> which returns true&nbsp;if it is possible to convert<strong>&nbsp;'s'</strong>&nbsp;to a string that is repetition of a substring with 'k' characters else returns false, where in order to convert we can replace one substring of length k with k characters.</span><br>
&nbsp;</p>

<p><span style="font-size:20px">Examples:</span></p>

<pre><span style="font-size:20px">Input: str = "abcbedabcabc",  k = 3
Output: 1
Replace "bed" with "abc" so that the 
whole string becomes repetition of "abc".

Input: str = "bcacbcac", k = 2
Output: 0</span></pre>

<p><br>
<span style="font-size:20px"><strong>Input:</strong><br>
The first line of input contains an integer T denoting the no of test cases. Then T test cases follow. Each test case contains 2 lines. The first line of each test case contains a string s. The second line of each test case contains an integer n.<br>
<br>
<strong>Output:</strong><br>
For each test case in a new line output will be 1 if it is possible to convert the string else 0.<br>
<br>
<strong>Constraints:</strong><br>
1&lt;=T&lt;=100<br>
1&lt; |Length of string| &lt;=100<br>
1&lt;=N&lt;=10<br>
<br>
<strong>Example(To be used only for expected output):<br>
Input:</strong><br>
2<br>
abcbedabcabc<br>
3<br>
bcacbcac<br>
2<br>
<strong>Output:</strong><br>
1<br>
0</span><br>
&nbsp;</p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Hash</code>&nbsp;<code>Strings</code>&nbsp;<code>Data Structures</code>&nbsp;