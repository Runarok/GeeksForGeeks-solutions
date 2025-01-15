<h2><a href="https://www.geeksforgeeks.org/problems/k-th-missing-element3635/1?page=1&company=Google&difficulty=Basic,Easy&status=unsolved&sortBy=submissions">K-th missing element</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an increasing sequence <strong>arr</strong>, we need to find the K-th smallest missing element, taking the first element of the array as the starting point in the increasing sequence. If there is no k-th missing element then output -1.</span></p>
<p><span style="font-size: 18px;"><strong>Example:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong> arr[] = [1, 3, 4, 5, 7] and k = 2
<strong>Output:</strong> 6
<strong>Explanation: </strong>k = 2, Missing numbers are 2 and 6. So 2nd missing number is 6.
</span></pre>
<pre><span style="font-size: 18px;"><strong>Input:</strong> arr[] = [2, 3, 4, 5, 6, 8] and k = 1<strong>
Output:</strong> 7<br><strong>Explanation: </strong>k = 1, the first missing number in the array is 7.</span></pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(n).<br><strong>Expected Auxiliary Space:</strong>&nbsp;O(1).</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:<br></strong></span><span style="font-size: 18px;">1 ≤&nbsp; arr.size() ≤ 10<sup>6</sup><br>0 ≤&nbsp; k, arr[i] ≤ 10<sup>5</sup></span></p></div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Amazon</code>&nbsp;<code>Facebook</code>&nbsp;<code>Apple</code>&nbsp;<code>Google</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Data Structures</code>&nbsp;