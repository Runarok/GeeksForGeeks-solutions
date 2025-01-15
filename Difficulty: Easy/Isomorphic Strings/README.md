<h2><a href="https://www.geeksforgeeks.org/problems/isomorphic-strings-1587115620/1?page=1&company=Google&difficulty=Basic,Easy&status=unsolved&sortBy=submissions">Isomorphic Strings</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given two strings <strong>s1</strong>&nbsp;and <strong>s2</strong>, check if these two&nbsp;strings are <strong>isomorphic </strong>to each other.<br></span></p>
<p><span style="font-size: 18px;">If the characters in s1 can be changed to get s2, then two strings, s1 and s2, are isomorphic. </span><span style="font-size: 18px;">A character must be completely swapped out for another character while maintaining the order of the characters. A character may map to itself, but no two characters may map to the same character.</span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>s1 = "aab", s2 = "xxy"
<strong>Output: </strong>true<strong>
Explanation: </strong>There are two different characters in aab and xxy, i.e a and b with frequency 2 and 1 respectively.</span>
</pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>s1 = "aab", s2 = "xyz"
<strong>Output: </strong>false<strong>
Explanation:  </strong>There are two different characters in aab but there are three different charactersin xyz. So there won't be one to one mapping between s1and s2.<br></span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>s1 = "aac", s2 = "xyz"
<strong>Output: </strong>false<strong>
Explanation: </strong>There are two different characters in aab but there are three different charactersin xyz. So there won't be one to one mapping between s1and s2.</span></pre>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 &lt;= |s1|, |s2| &lt;= 10<sup>5</sup></span></p></div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Google</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>Data Structures</code>&nbsp;