<h2><a href="https://www.geeksforgeeks.org/problems/pair-array-product-sum4912/1?page=2&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Pair array product sum</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 14pt;">Given an array <strong>arr[]</strong> of non-negative integers. Count the number of pairs <strong>{i, j}</strong> in the array such that <strong>arr[i]</strong> + <strong>arr[j]</strong> &lt; <strong>arr[i] </strong>* <strong>arr[j]</strong>.<br><strong>Note: </strong>the pair <strong>{i, j}</strong> and <strong>{j, i}</strong> are considered the same and <strong>i</strong> should not be equal to <strong>j</strong>.</span></p>
<p><span style="font-size: 14pt;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>arr[] = [3, 4, 5]
<strong>Output:</strong> 3
<strong>Explanation</strong>: Pairs are {3, 4}, {4, 5}, and {3,5}.  <br></span></pre>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>arr[] = [1, 1, 1]
<strong>Output:</strong> 0
<strong>Explanation</strong>: No pairs can be formed which satisfy the condition. </span></pre>
<p><span style="font-size: 14pt;"><strong>Expected Time Complexity:</strong> O(n).<br><strong>Expected Auxiliary Space:</strong> O(1).</span></p>
<p><span style="font-size: 14pt;"><strong>Constraints:</strong><br>1 ≤ arr.size() ≤ 10<sup>6<br></sup>0 ≤ arr[i] ≤ 10<sup>6</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Data Structures</code>&nbsp;