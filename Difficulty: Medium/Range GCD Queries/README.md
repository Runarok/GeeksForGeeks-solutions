<h2><a href="https://www.geeksforgeeks.org/problems/range-gcd-queries3654/1?page=1&difficulty=Medium&status=unsolved&sortBy=accuracy">Range GCD Queries</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">You are given an array <strong>arr </strong>of size <strong>N, </strong>and<strong>&nbsp;Q</strong>&nbsp;queries.&nbsp; You have to find GCD of the elements in the given range alongside updating the value of the array as per query.</span><br>
<strong>Note:</strong><span style="font-size:18px"> 0-based indexing is used.</span></p>

<p><strong><span style="font-size:18px">Example 1:</span></strong></p>

<pre><strong><span style="font-size:18px">Input:
</span></strong><span style="font-size:18px">N = 6, Q = 3
arr[] = {2,3,4,6,8,16}
Queries = findRangeGCD(0,2)
&nbsp;         updateValue(3,8)
&nbsp;         findRangeGCD(2,5)
<strong>Output:
</strong>1
4<strong>
Explanation: </strong>There are 3 queries:&nbsp;
Query 1 : gcd(2, 3, 4) = 1
Query 2&nbsp;: 6&nbsp;changes to 8
Query 3&nbsp;: gcd(4, 8, 8, 16) = 4</span>
</pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
Complete<strong>&nbsp;findRangeGcd</strong> and <strong>updateValue </strong>function<strong>.<br>
findRangeGcd: </strong>This function takes L, R, st (segment tree array), and n(size of arr) as arguments and returns the range GCD.<br>
<strong>updateValue:&nbsp; </strong>This function takes index, new_val, arr, st (segment tree array), and n(size of arr) as arguments and updates arr[index] to new_val.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(Q*Log(N)*Log(N)).<br>
<strong>Expected Auxiliary Space:&nbsp;</strong>O(1).</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= N &lt;= 10<sup>5</sup><br>
1 &lt;= Q &lt;= 10<sup>5</sup><br>
0 &lt;= L, R, index &lt;= N-1<br>
1 &lt;= arr[i], value<strong>&nbsp;</strong>&lt;= 10<sup>5</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Segment-Tree</code>&nbsp;<code>Advanced Data Structure</code>&nbsp;