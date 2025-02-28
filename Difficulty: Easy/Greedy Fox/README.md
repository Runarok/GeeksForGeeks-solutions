<h2><a href="https://www.geeksforgeeks.org/problems/greedy-fox1555/1?page=1&category=Arrays&status=attempted&sortBy=accuracy">Greedy Fox</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 14pt;">You are given an array of integers <strong>arr</strong>, where arr[i] represents the denomination of the i<sup>th</sup> coin placed on a road. The fox wants to collect coins in a specific pattern: it can only collect a contiguous subarray of coins that are in strictly increasing order of their denominations. Determine the maximum sum of coins that the fox can collect following this pattern.</span></p>
<p><span style="font-size: 14pt;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>arr[] = [2, 1, 4, 7, 3, 6] 
<strong>Output:</strong> 12
<strong>Explanation</strong>: Contiguous Increasing subarray [<strong>1, 4, 7]</strong> = 12.</span></pre>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>arr[] = [38, 7, 8, 10, 12] 
<strong>Output:</strong> 38<br><strong>Explanation:</strong> The best is to collect the first coin alone, as no larger contiguous increasing subarray exists.
</span></pre>
<p><span style="font-size: 14pt;"><strong>Expected Time Complexity:</strong> O(n).<br><strong>Expected Auxiliary Space:</strong> O(1).</span></p>
<p><span style="font-size: 14pt;"><strong>Constraints:</strong><br>1 ≤ arr.size() ≤ 10<sup>6</sup><br>1 ≤ arr[i] ≤ 10<sup>4</sup><br></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Data Structures</code>&nbsp;