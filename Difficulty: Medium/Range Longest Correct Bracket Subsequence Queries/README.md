<h2><a href="https://www.geeksforgeeks.org/problems/range-queries-for-longest-correct-bracket-subsequence4719/1?page=1&difficulty=Medium&status=unsolved&sortBy=accuracy">Range Longest Correct Bracket Subsequence Queries</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given a bracket sequence or in other words a string S of length&nbsp;N&nbsp;and queries&nbsp;Q, consisting of characters&nbsp;‘(‘&nbsp;and&nbsp;‘)’. Find the length of the maximum correct bracket subsequence of sequence for a given query range from L to R(L and R inclusive).</span></p>
<p><span style="font-size: 18px;"><em><strong>Note: </strong>A correct bracket sequence is the one that has matched bracket pairs or which contains another nested correct bracket sequence.</em></span></p>
<p><span style="font-size: 18px;"><strong>Example 1:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:
</strong>S = ())(())(())( , Q = 2
Queries = {(3,6), (0,11)}
<strong>Output:
</strong>4
10<strong>
Explanation: </strong>For query 1, Longest Correct
Bracket Subsequence is (()).Hence length=4
For query 2, Longest Correct Bracket
Subsequence is ()(())(()). Hence length=10</span>
</pre>
<p><span style="font-size: 18px;"><strong>Your Task:</strong><br>Complete&nbsp;<strong>getLongestSequence()</strong> function and return&nbsp;the maximum length of the correct bracket subsequence of the sequence. The segment tree array has been prebuilt and provided to you.</span></p>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:&nbsp;</strong>O(Q*Log(N)).<br><strong>Expected Auxiliary Space:</strong>&nbsp;O(1).</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 &lt;=&nbsp;N, Q&nbsp;&lt;= 10<sup>4</sup><br>0 &lt;=&nbsp;L&nbsp;&lt;=&nbsp;R&nbsp;&lt;= N-1</span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>Segment-Tree</code>&nbsp;<code>Range Minimum Query</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Advanced Data Structure</code>&nbsp;