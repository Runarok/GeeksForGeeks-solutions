<h2><a href="https://www.geeksforgeeks.org/problems/maximum-average-subarray5859/1?page=2&company=Amazon&status=unsolved,attempted&sortBy=accuracy">Maximum average subarray</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an array <strong>a</strong><strong>rr</strong> of size&nbsp;<strong>n</strong> and a positive integer <strong>k</strong>, find the subarray of length <strong>k</strong> with the maximum average. <strong>You need to</strong> <strong>return the starting index of the subarray</strong>. If there are multiple subarrays with the same maximum average, <strong>return the smallest starting index</strong>.</span></p>
<p><br><span style="font-size: 18px;"><strong>Example 1:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:
</strong>k = 4, n = 6
arr[] = {1, 12, -5, -6, 50, 3}
<strong>Output:</strong> 12 -5 -6 50
<strong>Explanation:</strong> Maximum average is (12 - 5 - 6 + 50)/4 = 51/4.</span></pre>
<p><br><span style="font-size: 18px;"><strong>Example 2:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:
</strong>k = 3, n = 7
arr[] = {3, -435, 335, 10, -50, 100, 20}
<strong>Output:</strong> 335 10 -50
<strong>Explanation:</strong> Maximum average is (335 + 10 - 50)/3 = 295/3.
</span></pre>
<p><br><span style="font-size: 18px;"><strong>Your Task:</strong><br>You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>findMaxAverage()</strong>&nbsp;which takes the array of integers&nbsp;<strong>arr, </strong>its size <strong>n</strong>&nbsp;and integer&nbsp;<strong>k&nbsp;</strong>as input parameters and returns an integer&nbsp;denoting the starting index of the subarray.</span></p>
<p><br><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(n)<br><strong>Expected Auxiliary Space:</strong>&nbsp;O(1)<br><br><strong>Constraints</strong><br>1 &lt;= k &lt;= n &lt;= 10<sup>5</sup><br>0 &lt;= |arr[i]| &lt;= 10<sup>3</sup></span></p>
<div id="highlighter--hover-tools" style="display: none;">
<div id="highlighter--hover-tools--container">
<div class="highlighter--icon highlighter--icon-copy" title="Copy">&nbsp;</div>
<div class="highlighter--icon highlighter--icon-change-color" title="Change Color">&nbsp;</div>
<div class="highlighter--icon highlighter--icon-delete" title="Delete">&nbsp;</div>
</div>
</div>
<div id="highlighter--hover-tools" style="display: none;">
<div id="highlighter--hover-tools--container">
<div class="highlighter--icon highlighter--icon-copy" title="Copy">&nbsp;</div>
<div class="highlighter--icon highlighter--icon-change-color" title="Change Color">&nbsp;</div>
<div class="highlighter--icon highlighter--icon-delete" title="Delete">&nbsp;</div>
</div>
</div>
<div id="highlighter--hover-tools" style="display: none;">
<div id="highlighter--hover-tools--container">
<div class="highlighter--icon highlighter--icon-copy" title="Copy">&nbsp;</div>
<div class="highlighter--icon highlighter--icon-change-color" title="Change Color">&nbsp;</div>
<div class="highlighter--icon highlighter--icon-delete" title="Delete">&nbsp;</div>
</div>
</div></div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Amazon</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Data Structures</code>&nbsp;