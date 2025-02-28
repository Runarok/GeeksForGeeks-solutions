<h2><a href="https://www.geeksforgeeks.org/problems/naive-pattern-search-1587115620/1?page=1&category=Strings&status=unsolved,attempted&sortBy=accuracy">Naive Pattern Search</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a string <strong>S</strong> and a pattern <strong>P</strong> both of lowercase characters. The task is to check if the given pattern exists in the given string or not. </span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>S = aabaacaadaabaaabaa
P = aaba
<strong>Output: </strong>Yes<strong>
Explanation: </strong>Given pattern aaba is found
in the string at index 0.</span>
<span style="font-size:18px"><strong>Example 2:</strong></span></pre>

<pre><span style="font-size:18px"><strong>Input:
</strong>S = aabaacaadaabaaabaa
P = ccda
<strong>Output: </strong>No<strong>
Explanation: </strong>Given pattern ccda doesn't
exists in the string at all.</span>
</pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
The task is to complete the function <strong>search</strong>() which finds the pattern in the given string. The function takes pattern and string as parameters and returns either<strong> true or false</strong>. Return true if pattern exists else return false.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(N*M).<br>
<strong>Expected Auxiliary Space:&nbsp;</strong>O(1).<br>
Note: N = |S|, M = |P|.</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= |S|, |P| &lt;= 10<sup>3</sup></span></p>

<p>&nbsp;</p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>Data Structures</code>&nbsp;