<h2><a href="https://www.geeksforgeeks.org/problems/unique-substrings1418/1?page=3&category=Strings&status=unsolved,attempted&sortBy=accuracy">Unique substrings</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:20px">Given a string S, consisting only of ‘0’ and ‘1’, and also you are given an integer k. You are asked to find the sum of all unique substrings (in decimal notation) of length k in the string, such that string S is the repetition of these substrings. </span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>010100010010 3
<strong>Output:
 </strong>6
<strong>Exaplanation:
</strong>Unique substrings are “010” and “100”.
The required sum is 2+4=6.</span>
</pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>00100110 4
<strong>Output:
</strong></span><span style="font-size:18px">8</span>
</pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read or print anything. Your task is to complete the function&nbsp;<strong>unique_substring_sum()</strong>&nbsp;which takes the binary string S as first parameter and k as the second parameter and returns the sum of unique substring (In decimal notation).If the string S can’t be split into substrings of length k without leaving any characters in the string return -1.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;&nbsp;</strong>O(n)<br>
<strong>Expected Space Complexity:&nbsp;</strong>O(n)</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong></span><br>
<span style="font-size:18px">1 &lt;= length of string &lt;= 1000<br>
k will not exceed 20</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>STL</code>&nbsp;<code>Data Structures</code>&nbsp;