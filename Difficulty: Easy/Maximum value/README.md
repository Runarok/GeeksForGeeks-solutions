<h2><a href="https://www.geeksforgeeks.org/problems/maximum-value5946/1?page=1&category=Arrays&status=unsolved,attempted&sortBy=accuracy">Maximum value</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 14pt;">Given an array <strong>arr[]</strong> of integres. Find the maximum value of <strong>arr[j]</strong> – <strong>arr[i]</strong> + <strong>arr[l]</strong> – <strong>arr[k]</strong>, such that <strong>i</strong> &lt; <strong>j</strong> &lt; <strong>k</strong> &lt; <strong>l</strong>.<br><br><strong>Examples:</strong></span></p>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>arr[] = [1, 2, 3]
<strong>Output: </strong>-1
<strong>Explanation: </strong>arr.size() &lt; 4 so no such i,j,k,l is possible.
</span></pre>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>arr[] = [4, 8, 9, 2, 20]
<strong>Output: </strong>23
<strong>Explanation: </strong>Here i = 0, j = 2, k = 3, l = 4 so arr[j] – arr[i] + arr[l] – arr[k] = 9 – 4 + 20 – 2 = 23
</span></pre>
<p><span style="font-size: 14pt;"><strong>Expected Time Complexity:</strong> O(n)<br><strong>Expected Auxiliary Space:</strong> O(n)</span></p>
<p><span style="font-size: 14pt;"><strong>Constraints:</strong><br>1 ≤ arr.size() ≤ 10<sup>5</sup><br>1 ≤ arr[i] ≤ 10<sup>5</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Dynamic Programming</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;