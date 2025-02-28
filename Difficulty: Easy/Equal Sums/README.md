<h2><a href="https://www.geeksforgeeks.org/problems/equal-sums4801/1?page=1&category=Arrays&status=unsolved,attempted&sortBy=accuracy">Equal Sums</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 14pt;">You are given an array <code>arr[]</code> of positive integers. Your task is to find the smallest non-negative integer <code>x</code> (greater than or equal to zero) that can be inserted between any two elements of the array such that the sum of the elements in the subarray before <code>x</code> is equal to the sum of the elements in the subarray after <code>x</code>, with the newly inserted integer <code>x</code> included in either of the two subarrays.</span></p>
<p><span style="font-size: 14pt;">Your output should be a list of three integers:</span></p>
<ol>
<li><span style="font-size: 14pt;">The smallest non-negative integer <code>x</code> that can be inserted.</span></li>
<li><span style="font-size: 14pt;">The position (1-indexed) where <code>x</code> is inserted.</span></li>
<li><span style="font-size: 14pt;">A flag indicating whether <code>x</code> was added to the first subarray (1) or the second subarray (2).</span></li>
</ol>
<p><span style="font-size: 14pt;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>arr[] = [3, 2, 1, 5, 7, 8]
<strong>Output:</strong> [4, 5, 1]
<strong>Explanation:</strong> The smallest possible integer x = 4 can be inserted between 5 and 7, making the subarrays:
First subarray: [3, 2, 1, 5, 4] with sum = 15.
Second subarray: [7, 8] with sum = 15.
x is inserted at position 5 and included in the first subarray.</span></pre>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>arr[] = [9, 5, 1, 2, 0]<strong>
Output: </strong>[1, 2, 2]<strong>
Explanation: </strong>The smallest possible integer x = 1 can be inserted between 9 and 5, making the subarrays:
First subarray: [9] with sum = 9.
Second subarray: [5, 1, 2, 0, 1] with sum = 9.
x is inserted at position 2 and included in the second subarray.<br></span></pre>
<p><span style="font-size: 14pt;"><strong>Expected Time Complexity:</strong>&nbsp;O(n).<br><strong>Expected Auxiliary Space:</strong>&nbsp;O(1).</span></p>
<p><span style="font-size: 14pt;"><strong>Constraints:<br></strong>2 ≤ arr.size() ≤ 10<sup>6<br></sup>0 ≤ arr[i] ≤ 10<sup>3</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Data Structures</code>&nbsp;