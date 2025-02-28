<h2><a href="https://www.geeksforgeeks.org/problems/maximum-sum-bitonic-subsequence1857/1?page=3&category=Arrays&status=unsolved,attempted&sortBy=accuracy">Maximum Sum Bitonic Subsequence</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 14pt;"><span style="font-family: arial,helvetica,sans-serif;">Given an array arr[] of n integers. A <a href="http://en.wikipedia.org/wiki/Subsequence">subsequence&nbsp;</a>of arr[] is called Bitonic if it first increases and then decreases. Find the max sum bitonic subsequence.</span></span></p>
<p><span style="font-size: 14pt;"><span style="font-family: arial,helvetica,sans-serif;"><strong>Examples:</strong></span></span></p>
<pre><span style="font-size: 14pt;"><span style="font-family: arial,helvetica,sans-serif;"><strong>Input : </strong>arr[] = [1, 15, 51, 45, 33, 100, 12, 18, 9]
<strong>Output : </strong>194
<strong>Explanation : <br></strong>Bi-tonic Sub-sequence are :
{1, 51, 9} or {1, 51, 100, 18, 9} or {1, 15, 51, 100, 18, 9}  or {1, 15, 45, 100, 12, 9}  or {1, 15, 45, 100, 18, 9} .. so on           
Maximum sum Bi-tonic sub-sequence is 1 + 15 + 51 + 100 + 18 + 9 = 194</span></span></pre>
<pre><span style="font-size: 14pt;"><span style="font-family: arial,helvetica,sans-serif;"><strong>Input : </strong>arr[] = [80, 60, 30, 40, 20, 10]
<strong>Output : </strong>210
<strong>Explanation : </strong>Here the sequence is strinctly decreasing.</span></span></pre>
<p><span style="font-size: 14pt;"><span style="font-family: arial,helvetica,sans-serif;"><strong>Expected Time Complexity:</strong> O(n<sup>2</sup>)<br><strong>Expected Auxiliary Space:</strong> O(n)</span></span></p>
<p><span style="font-size: 14pt;"><span style="font-family: arial,helvetica,sans-serif;"><strong>Constraints:</strong><br>1 &lt;= arr.size() &lt;= 10<sup>3</sup><br>1 &lt;= arr[i] &lt;= 10<sup>6</sup></span></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Dynamic Programming</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;