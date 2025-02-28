<h2><a href="https://www.geeksforgeeks.org/problems/cba-subsequence--170645/1?page=1&category=Strings&status=unsolved,attempted&sortBy=accuracy">CBA Subsequence</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a string, rearrange it in such a way that it has no subsequence as cba. If there are multiple answers return the lexicographically smallest one.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N=6
S="aaaaab"</span>
<span style="font-size:18px">
<strong>Output:</strong>
aaaaab</span>

<span style="font-size:18px"><strong>Explanation:</strong> "aaaaab" has no subsequence as cba and is 
lexicographically the smallest one.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong> 
N=3 
S="cba"</span>

<span style="font-size:18px"><strong>Output:</strong></span> 
<span style="font-size:18px">abc.</span>

<span style="font-size:18px"><strong>Explanation:</strong> "abc" has no subsequence as cba and is
lexicographically the smallest one.</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>cbaSubsequence()</strong>&nbsp;which takes the string S,&nbsp;its size N<strong>&nbsp;</strong>as input parameters&nbsp;and returns the rearranged string.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(NLogN)<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1&lt;=N&lt;=10<sup>5</sup><br>
S contains only lowercase English alphabets.</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>Sorting</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;