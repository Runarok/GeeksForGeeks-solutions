<h2><a href="https://www.geeksforgeeks.org/problems/pairs-with-positive-negative-values3719/1?page=3&company=Amazon&status=unsolved,attempted&sortBy=accuracy">Pairs with Positive Negative values</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;"><span style="font-family: arial,helvetica,sans-serif;">Given an array of integers, return all the elements having positive and negative values of a number that exists in the array.</span></span></p>
<p><span style="font-size: 18px;"><span style="font-family: arial,helvetica,sans-serif;"><strong><em>Note </em>:</strong> If no such pair exists, simply return an empty array, also multiple pairs of the same number could exist and you need to put each of them in the array. Return the pairs in sorted order.</span></span></p>
<p><span style="font-size: 18px;"><span style="font-family: arial,helvetica,sans-serif;"><strong>Examples:</strong></span></span></p>
<pre><span style="font-size: 18px;"><span style="font-family: arial,helvetica,sans-serif;"><strong>Input: </strong>arr[] = [1, -3, 2, 3, 6, -1, -3, 3]
<strong>Output: </strong>[-1, 1, -3, 3, -3, 3]
<strong>Explanation: </strong>The array contains both 1 and -1, and 3 &amp; -3 two time.</span></span>
</pre>
<pre><span style="font-size: 18px;"><span style="font-family: arial,helvetica,sans-serif;"><strong>Input: </strong>arr[] = [4, 8, 9, -4, 1, -1, -8, -9]
<strong>Output: </strong>[-1, 1, -4, 4, -8, 8, -9, 9]
<strong>Explanation: </strong>Here, the array contains the pairs 1 &amp; -1, 4 &amp; -4, 8 &amp; -8, and 9 &amp; -9.</span></span>
</pre>
<p><span style="font-size: 18px;"><span style="font-family: arial,helvetica,sans-serif;"><strong>Expected Time Complexity:</strong> O(n*log(n))<br><strong>Expected Auxiliary Space:</strong> O(n)</span></span></p>
<p><span style="font-size: 18px;"><span style="font-family: arial,helvetica,sans-serif;"><strong>Constraints:</strong><br>1 &lt;= arr.size() &lt;= 10<sup>5</sup><br>-10<sup>5 </sup>&lt;= a[i] &lt;= 10<sup>5</sup></span></span></p></div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Amazon</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Hash</code>&nbsp;