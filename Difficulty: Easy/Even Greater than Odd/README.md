<h2><a href="https://www.geeksforgeeks.org/problems/rearrange-array-such-that-even-positioned-are-greater-than-odd4804/1?page=1&category=Arrays&status=unsolved,attempted&sortBy=accuracy">Even Greater than Odd</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 14pt;">Given an array <strong>arr</strong>, rearrange the array according to the following relations :</span></p>
<blockquote>
<p><span style="font-size: 14pt;">arr[i] &gt;= arr[i-1], if i is even.<br>arr[i] &lt;= arr[i-1], if i is odd.<br></span><span style="font-size: 14pt;">[Considering <strong>1-base</strong> indexed array]</span></p>
</blockquote>
<p><span style="font-size: 18.6667px;">Return the rearranged array.</span></p>
<p><span style="font-size: 18.6667px;"><strong>Note:</strong> The driver code will print "true" if your output array satisfies the conditions; otherwise, it will print "false".</span></p>
<p><span style="font-size: 14pt;"><strong>Example:</strong></span></p>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>arr[] =<strong> </strong>[1, 2, 2, 1]<strong>
Output: </strong>[1, 2, 1, 2]<strong>
Explanation: </strong>Both 2s are at even positions and 1s at odd positions, satisfying the given conditions.</span></pre>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>arr[] <strong>= </strong>[1, 3, 2]
<strong>Output: </strong>[1, 3, 2]
<strong>Explanation: </strong>The array is already arranged according to the conditions.</span></pre>
<p><span style="font-size: 14pt;"><strong>Constraints:<br></strong>1 ≤ arr.size() ≤ 10<sup>5</sup></span><br><span style="font-size: 14pt;">1 ≤ arr[i] ≤ 10<sup>4</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Sorting</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;