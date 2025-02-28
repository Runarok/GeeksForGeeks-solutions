<h2><a href="https://www.geeksforgeeks.org/problems/sum-of-length3345/1?page=1&category=Arrays&status=unsolved,attempted&sortBy=accuracy">Sum of length</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an array <strong>arr</strong>. Calculate the sum of lengths of contiguous subarrays having all distinct elements.<br>Note: Return the answer with modulo 10<sup>9</sup></span><span style="font-size: 18px;">+7.</span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [1, 2, 3]
<strong>Output:</strong> 10
<strong>Explanation</strong>: [1, 2, 3] is a subarray of length 3 with distinct elements. [1, 2], [2, 3] are 2 subarray of length 2 with distinct elements. Total length of lengths two = 2 + 2 = 4  3 subarrays of length 1 with distinct element. Sum of lengths = 3 + 4 + 3 = 10</span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [1]
<strong>Output:</strong> 1
<strong>Explanation</strong>: The only subarray with distinct elements of length 1.  
</span></pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(n)<br><strong>Expected Auxiliary Space:</strong> O(n)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ arr.size() ≤ 10<sup>6<br></sup>1 ≤ arr[i] ≤ 10<sup>6</sup><sup><br></sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Hash</code>&nbsp;<code>Data Structures</code>&nbsp;