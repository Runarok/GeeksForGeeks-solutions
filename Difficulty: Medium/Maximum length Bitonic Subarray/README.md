<h2><a href="https://www.geeksforgeeks.org/problems/maximum-length-bitonic-subarray5730/1?page=1&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Maximum length Bitonic Subarray</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an array <strong>arr[]</strong> containing positive integers, a subarray <strong>arr[i … j]</strong> is bitonic if there is a <strong>k</strong> with <strong>i &lt;= k &lt;= j</strong> such that <strong>arr[i] &lt;= arr[i+1] &lt;= ... &lt;= arr[k] &gt;= arr[k+1] &gt;= ... arr[j – 1] &gt;= arr[j]</strong>. Return the maximum length of the bitonic subarray.</span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [12, 4, 78, 90, 45, 23]
<strong>Output:</strong> 5
<strong>Explanation:</strong> In the given array, bitonic subarray is 4 &lt;= 78 &lt;= 90 &gt;= 45 &gt;= 23.</span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [10, 20, 30, 40]
<strong>Output:</strong> 4
<strong>Explanation:</strong> In the given array, bitonic subarray is 10 &lt;= 20 &lt;= 30 &lt;= 40.</span></pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(n)<br><strong>Expected Auxiliary Space:</strong>&nbsp;O(1)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ arr.size() ≤ 10<sup>6</sup><br>1 ≤ arr[i] ≤ 10<sup>6</sup></span></p></div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Microsoft</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Data Structures</code>&nbsp;