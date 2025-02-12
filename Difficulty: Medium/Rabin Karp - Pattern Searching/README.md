<h2><a href="https://www.geeksforgeeks.org/problems/rabin-karp-pattern-searching/1?page=4&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Rabin Karp - Pattern Searching</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a string <strong>S</strong> and a pattern <strong>P</strong> of lowercase characters. The task is to check if the pattern is present in string or not.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>S = aabaacaadaabaaba
P = aaba
<strong>Output: </strong>Yes<strong>
Explanation: </strong>You can find the patter at
starting at index 12.</span>
</pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>S = aabaacaadaabaaba
P = asdfa
<strong>Output: </strong>No<strong>
Explanation: </strong>Pattern doesn't exist in
the given string S.</span>
</pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You need to complete the function<strong> search </strong>which takes 3 arguments(S, P and prime q) and <strong>returns true </strong>if the pattern is found else returns <strong>false</strong>.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(N + M).<br>
<strong>Expected Auxiliary Space:&nbsp;</strong>O(1).<br>
Note: N = |S|, M = |P|.</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= |S|, |P| &lt;= 10<sup>4</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>Data Structures</code>&nbsp;