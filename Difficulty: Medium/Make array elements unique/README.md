<h2><a href="https://www.geeksforgeeks.org/problems/make-array-elements-unique--170645/1?page=1&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Make array elements unique</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an integer array <strong>arr[ ]</strong>, your task is to find the <strong>minimum</strong> number of <strong>increment</strong> operations required to make all the array elements <strong>unique</strong>. i.e. no value in the array should occur more than once. In one operation, a value can be incremented by 1 only.</span></p>
<p><span style="font-size: 14pt;">Note: The answer will always fit into a 32-bit integer.</span></p>
<p><span style="font-size: 18px;"><strong>Examples :</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [3, 2, 1, 2, 1, 7]
<strong>Output: </strong>6
<strong>Explanation: </strong>After 6 moves, the array could be [3, 4, 1, 2, 5, 7]. It can be shown that it is impossible for the array to have all unique values with 5 or less operations.</span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [1, 2, 2]
<strong>Output: </strong>1
<strong>Explanation: </strong>After one operation [2 -&gt; 3], the array could be [1, 2, 3].</span></pre>
<pre><strong>Input: </strong>arr[] = [5, 4, 3, 2, 1]
<strong>Output: </strong>0
<strong>Explanation: </strong>All elements are unique.</pre>
<p><span style="font-size: 18px;"><strong>Constraints:<br></strong></span><span style="font-size: 18px;">1 ≤ arr.size() ≤ 10<sup>6<br></sup></span><span style="font-size: 18px;">0 ≤ arr[i] ≤ 10<sup>6</sup></span></p></div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Dunzo</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Hash</code>&nbsp;<code>Sorting</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;