<h2><a href="https://www.geeksforgeeks.org/problems/beautiful-subsequence5222/1?page=2&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Beautiful SubSequence</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an array <strong>arr[]</strong>, find the length of the longest subsequence such that for all pairs (i, j) where i ≠ j, either arr[i] divides arr[j] or arr[j] divides arr[i]. If no such subsequence exists, return -1.</span></p>
<p><span style="font-size: 20px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 20px;"><strong>Input :</strong> arr[] = [5, 3, 1, 4, 7]</span><span style="font-size: 20px;">
<strong>Output :</strong> 2
<strong>Explanation: </strong>Longest Sub Sequence are {5,1} , {4,1}, {3,1} etc. So, size is 2.</span></pre>
<pre><span style="font-size: 20px;"><strong>Input :</strong> arr[] = [2, 4, 6, 1, 3, 11]</span><span style="font-size: 20px;"><strong>
Output :</strong> 3 </span></pre>
<p><span style="font-size: 20px;"><strong>Expected Time Complexity:</strong> O(n<sup>2</sup>).<br><strong>Expected Auxiliary Space:</strong> O(n).</span></p>
<p><span style="font-size: 18px;"><strong>Constraints : </strong><br>2 ≤ arr.size() ≤ 10<sup>3</sup><br>1 ≤ arr[i] ≤ 10<sup>5</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Dynamic Programming</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;