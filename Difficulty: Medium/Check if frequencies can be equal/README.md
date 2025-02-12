<h2><a href="https://www.geeksforgeeks.org/problems/check-frequencies4211/1?page=18&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Check if frequencies can be equal</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 14pt;">Given a string <strong>s</strong> which contains only lower alphabetic characters, check if it is possible to remove <strong>at most one</strong> character from this string in such a way that frequency of each distinct character becomes same in the string. Return <strong>true</strong> if it is possible to do else return <strong>false</strong>.</span></p>
<p><span style="font-size: 14pt;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>s = "xyyz"
<strong>Output:</strong> true 
<strong>Explanation:</strong> Removing one 'y' will make frequency of each character to be 1.</span></pre>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>s = "xxxxyyzz"
<strong>Output: </strong>false
<strong>Explanation:</strong> Frequency can not be made same by removing at most one character.</span></pre>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>s = "aabbccc"
<strong>Output: </strong>true
<strong>Explanation:</strong> Removing one 'c' will make the frequencies 2 for each distinct character ('a', 'b', and 'c').</span></pre>
<p><span style="font-size: 14pt;"><strong>Constraints:</strong><br>1 &lt;= s.size() &lt;= 10<sup>5</sup></span></p></div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Zoho</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Hash</code>&nbsp;<code>Strings</code>&nbsp;<code>Data Structures</code>&nbsp;