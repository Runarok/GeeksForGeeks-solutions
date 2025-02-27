<h2><a href="https://www.geeksforgeeks.org/problems/find-equal-point-in-string-of-brackets2542/1?page=2&company=Amazon&status=unsolved,attempted&sortBy=accuracy">Equal point in a string of brackets</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given a string <strong>str</strong> of opening and closing brackets '(' and ')' only. The task is to find an equal point. An <strong>equal point</strong> is an index (0-based) such that the number of closing brackets on the right from that point must be equal to the number of opening brackets before that point.</span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>str = "(())))("
<strong>Output: </strong>4
<strong>Explanation: </strong>After index 4, string splits into (()) and ))(. Number of opening brackets in the first part is equal to number of closing brackets in the second part.</span>
</pre>
<pre><span style="font-size: 18px;"><strong>Input :</strong> str = "))"
<strong>Output:</strong> 2
<strong>Explanation: </strong>As after 2nd position i.e. )) and "empty" string will be split into these two parts: So, in this number of opening brackets i.e. 0 in the first part is equal to number of closing brackets in the second part i.e. also 0.</span></pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(n)<br><strong>Expected Auxiliary Space:</strong> O(n)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br><span style="font-size: 14pt;">1 ≤ str.size() ≤ 10<sup>6<br>str consists of only '(' and ')' brackets.</sup></span></span></p></div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Amazon</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Strings</code>&nbsp;<code>Data Structures</code>&nbsp;