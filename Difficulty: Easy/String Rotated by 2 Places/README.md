<h2><a href="https://www.geeksforgeeks.org/problems/check-if-string-is-rotated-by-two-places-1587115620/1?page=1&status=unsolved&sprint=a663236c31453b969852f9ea22507634&sortBy=accuracy">String Rotated by 2 Places</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 14pt;">Given two strings <strong>s1 </strong>and <strong>s2</strong>. Return true if the string <strong>s2</strong> can be obtained by rotating&nbsp;(<strong>in any direction</strong>) string <strong>s1</strong> by <strong>exactly 2</strong> places, otherwise, false.</span></p>
<p><span style="font-size: 14pt;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>s1 = "amazon", s2 = "azonam"
<strong>Output: </strong>true<strong>
Explanation: "</strong>amazon" can be rotated anti-clockwise by two places, which will make it as "azonam".
</span></pre>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>s1 = "geeksforgeeks", s2 = "geeksgeeksfor"
<strong>Output: </strong>false<strong>
Explanation: </strong>If we rotate "geeksforgeeks" by two place in any direction, we won't get "geeksgeeksfor".<br></span></pre>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>s1 = "ab", s2 = "ab"
<strong>Output: </strong>false</span></pre>
<p><span style="font-size: 14pt;"><strong>Challenge: </strong>Try doing it in O(1) space complexity</span></p>
<p><span style="font-size: 14pt;"><strong>Constraints:</strong><br>1 ≤ s1.length, s2.length ≤ 10<sup>5</sup></span></p></div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Accolite</code>&nbsp;<code>Amazon</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>Data Structures</code>&nbsp;