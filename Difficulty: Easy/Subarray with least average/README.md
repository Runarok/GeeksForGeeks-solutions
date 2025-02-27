<h2><a href="https://www.geeksforgeeks.org/problems/subarray-with-least-average5031/1?page=3&company=Amazon&status=unsolved,attempted&sortBy=accuracy">Subarray with least average</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an array of size <strong>n</strong>. Find the subarray of size <strong>k</strong> that has the least average among all the subarrays of size of <strong>k</strong>. R</span><span style="font-size: 18px;">eturn the index of the first element of the subarray(</span><strong style="font-size: 18px;">1-based indexing</strong><span style="font-size: 18px;">) of size <strong>k</strong> that has least average.</span></p>
<p><span style="font-size: 18px;"><strong>Examples :</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>nums = [30, 20, 10], k = 1
<strong>Output: </strong>3
<strong>Explanation: </strong>Subarrays of length 1 are {30}, {20}, {10}. {10} has the least average equal to 10.
</span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>nums = [30, 20, 10], k = 2
<strong>Output: </strong>2
<strong>Explanation: </strong>Subarrays of length 2 are {30, 20}, {20, 10}. {20, 10} has the least average equal to (20 + 10)/2 = 15.</span></pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:&nbsp;</strong>O(n)<br><strong>Expected Space Compelxity:&nbsp;</strong>O(1)</span><br>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 &lt;= k &lt;= n &lt;= 100000<br>1 &lt;= elements of array &lt;= 1000000</span></p></div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Amazon</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;