<h2><a href="https://www.geeksforgeeks.org/problems/pair-with-largest-sum-which-is-less-than-k-in-the-array/1?page=2&category=Arrays&status=unsolved,attempted&sortBy=accuracy">Pair with largest sum which is less than K in the array</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 14pt;">You are given an array <code>arr</code> of size <code>N</code> and an integer <code>K</code>. Your task is to find a pair of integers in the array such that it follows two conditions:</span></p>
<ol>
<li><span style="font-size: 14pt;">The sum of the pair is the <strong>maximum possible</strong> but <strong>less than</strong> <code>K</code>.</span></li>
<li><span style="font-size: 14pt;">Out of all such pairs, choose the one with the <strong>maximum absolute difference</strong> between the two integers.</span></li>
</ol>
<p><span style="font-size: 14pt;">If no such pair exists, return <code>(-1, -1)</code>.</span></p>
<p><span style="font-size: 14pt;"><strong>Example:</strong></span></p>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>arr = [2, 3, 4, 6, 8, 10], k = 10</span><br><span style="font-size: 14pt;"><strong>Output: </strong>(3, 6)<br><strong>Explanation</strong>:<br>The pair (3, 6) has a sum of 9, which is less than 10.
Among all pairs with sums less than 10, (3, 6) has the maximum absolute difference.</span></pre>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>arr = <span class="hljs-selector-attr">[2, 3, 4, 6, 8, 10]</span>, k = <span class="hljs-number">0</span><br><strong>Output: </strong>(-1,-1)<br><strong>Explanation:</strong> No pair exists with a sum less than 0.<br></span></pre>
<p><span style="font-size: 14pt;"><strong>Expected Time Complexity</strong>: O(nlogn)<br><strong>Expected Auxilliary Space</strong>: O(1)</span></p>
<p><span style="font-size: 14pt;"><strong>Constraints:</strong><br>0 ≤ arr.size()&nbsp; ≤ 10<sup>5</sup><br>0 ≤ k ≤ 10<sup>6</sup><br>0 ≤ arr[i]&nbsp;≤ 10<sup>5</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Data Structures</code>&nbsp;