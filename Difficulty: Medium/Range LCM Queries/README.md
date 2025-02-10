<h2><a href="https://www.geeksforgeeks.org/problems/range-lcm-queries3348/1?page=1&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Range LCM Queries</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">You are given an array&nbsp;of size <strong>N&nbsp;</strong>and<strong>&nbsp;Q</strong>&nbsp;queries. Solve the queries to find LCM for the given range alongside the queries to update the array values.</span></p>

<p><span style="font-size:18px"><strong>Note:</strong> 0-based indexing is used.</span></p>

<p><strong><span style="font-size:18px">Example 1:</span></strong></p>

<pre><strong><span style="font-size:18px">Input:
</span></strong><span style="font-size:18px">N = 6, Q = 3
arr[] = {2,3,4,6,8,16}
Queries: getLCM(0,2)
&nbsp;        updateValue(3,8)
&nbsp;        getLCM(2,5)
<strong>Output:
</strong>12
16<strong>
Explanation: </strong>There are 3 queries:&nbsp;
Query 1 :&nbsp; lcm(2, 3, 4) = 12
Query 2&nbsp;:&nbsp; 6&nbsp;changes to 8
Query 3&nbsp;:&nbsp; lcm(4, 8, 8, 16) = 16</span>
</pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
Complete <strong>updateValue()</strong> and <strong>getLCM()</strong> function. The <strong>segment tree array has been prebuilt for you</strong>. You only need to use it to complete the queries.<br>
<strong>getLCM()&nbsp;</strong>returns the LCM of elements in range [L,R].<br>
<strong>updateValue()&nbsp;</strong>processes the point update query.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(Q*Log(N)*Log(N) ).<br>
<strong>Expected Auxiliary Space:&nbsp;</strong>O(1).</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= <strong>N</strong> &lt;= 10<sup>4</sup><br>
1 &lt;= <strong>Q</strong> &lt;= 10<sup>5</sup><br>
0 &lt;= <strong>L, R, index</strong> &lt;= N-1<br>
1 &lt;= <strong>arr[i], value&nbsp;</strong>&lt;= 10<sup>4</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Segment-Tree</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Advanced Data Structure</code>&nbsp;