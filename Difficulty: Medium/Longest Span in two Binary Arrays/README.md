<h2><a href="https://www.geeksforgeeks.org/problems/longest-span-with-same-sum-in-two-binary-arrays5142/1?page=2&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Longest Span in two Binary Arrays</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given two<strong> </strong>binary<strong> </strong>arrays <strong>arr1[]</strong> and <strong>arr2[]</strong> of same size. Find the length of the longest common span [i, j] where j&gt;=i such that <strong>arr1[i..j]</strong> is equal to <strong>arr2[i..j]</strong>.&nbsp;</span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr1[] = [0, 1, 0, 0, 0, 0], arr2[] = [1, 0, 1, 0, 0, 1]
<strong>Output:</strong> 4
<strong>Explanation:</strong> The longest span with same sum is from index 1 to 4 following zero based indexing.</span>
</pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr1[] = [0, 0, 1, 1, 0, 0], arr2[] = [1, 0, 1, 0, 0, 1]
<strong>Output:</strong> 5<br><strong>Explanation:</strong> The longest span with same sum is from index 1 to 5 following zero based indexing.</span></pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(n)<br><strong>Expected Auxiliary Space:</strong> O(n)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 &lt;= arr.size() &lt;= 10<sup>6</sup><br>0 &lt;= arr1[i], arr2[i] &lt;= 1</span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>prefix-sum</code>&nbsp;<code>sliding-window</code>&nbsp;<code>Arrays</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;