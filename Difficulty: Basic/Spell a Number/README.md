<h2><a href="https://www.geeksforgeeks.org/problems/different-ways-to-spell-a-number4014/1?page=11&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">Spell a Number</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a&nbsp; number <strong>N </strong>such that it&nbsp;may contain many&nbsp;continuous digits. Find the&nbsp;number of ways to spell the number.<br>
For example, consider 8884441100, one can spell it simply as triple eight triple four double two and double zero. One can also spell as double eight, eight, four, double four, two, two, double zero.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
<strong>N</strong> <strong>=</strong> 100
<strong>Output:</strong>
2
<strong>Explanation:</strong>
The number 100 has only 2 possibilities, 
1) one zero zero 
2) one double zero.
</span></pre>

<p><br>
<span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
<strong>N</strong> <strong>=</strong> </span><span style="font-size:20px">11112</span><span style="font-size:18px">
<strong>Output:</strong>
8
<strong>Explanation:</strong>
</span><span style="font-size:18px">1 1 1 1 2, 11 1 1 2, 1 1 11 2, 1 11 1 2,
11 11 2, 1 111 2, 111 1 2, 1111 2</span>
</pre>

<p><br>
<span style="font-size:18px"><strong>Example 3:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
<strong>N</strong> <strong>=</strong> 12345
<strong>Output:</strong>
1
<strong>Explanation:</strong>
The number 12345 has only 1 possibility, 
one two three four five</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>differentWaysToSpell()</strong> which takes a <strong>String N </strong>as input and returns the number of possible ways.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(|N|)<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong></span><br>
<span style="font-size:18px">1 &lt;= |N| &lt;= 10<sup>50</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Numbers</code>&nbsp;<code>Combinatorial</code>&nbsp;