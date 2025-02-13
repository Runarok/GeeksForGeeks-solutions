<h2><a href="https://www.geeksforgeeks.org/problems/remove-minimum-elements4612/1?page=3&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Remove minimum elements</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 14pt;">Given an unsorted array, <strong>arr</strong>. Finds the minimum number of removals required such that twice the minimum element in the array is greater than or equal to the maximum in the array.</span></p>
<p><span style="font-size: 14pt;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>arr[] = [4, 5, 100, 9, 10, 11, 12, 15, 200]
<strong>Output:</strong> 4
<strong>Explanation:</strong> In the given array 4 elements <strong>4, 5, 200</strong> and <strong>100</strong> are removed from the array to make the array such that 2*minimum &gt;= max (2*9 &gt; 15).
</span></pre>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>arr[] = [4, 7, 5, 6]
<strong>Output:</strong> 0
<strong>Explanation:</strong> We don't need to remove any element as  4*2 &gt; 7 (Note that min = 4, max = 7).</span></pre>
<p><span style="font-size: 14pt;"><strong>Expected Time Complexity:</strong> O(n*logn)<br><strong>Expected Auxiliary Space:</strong>&nbsp;O(1)</span></p>
<p><span style="font-size: 14pt;"><strong>Constraints:</strong><br>1 ≤ arr.size() ≤ 10<sup>5</sup><br>1 ≤ arr[i] ≤ 10<sup>9</sup></span></p></div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Amazon</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Data Structures</code>&nbsp;