<h2><a href="https://www.geeksforgeeks.org/problems/minimum-number-of-sprinkler--170645/1?page=7&difficulty=Hard&status=unsolved&sortBy=accuracy">Minimum Number Of Sprinkler</a></h2><h3>Difficulty Level : Difficulty: Hard</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given a one-dimensional garden of length n. In each position of the n length garden, a sprinkler has been installed. Given an array <strong>arr[] </strong>such that&nbsp;<strong>arr[i]</strong>&nbsp;describes the coverage limit of the&nbsp;<strong>i<sup>th</sup></strong>&nbsp;sprinkler. A sprinkler&nbsp;can cover the range from the position&nbsp;<strong>max(i - arr[i], 1)</strong>&nbsp;to&nbsp;<strong>min(i + arr[i], n)</strong>. In beginning, all the sprinklers&nbsp;are switched off.<br>The task is to find the minimum number of sprinklers needed to be activated such that the whole<strong> n</strong>-length garden can be covered by water.<br><strong>Note:&nbsp; Array is 1-based indexed.</strong></span></p>
<p><strong><span style="font-size: 18px;">Example 1:</span></strong></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong> arr[] = [1, 2, 1]
<strong>Output:</strong>&nbsp;1
<strong>Explanation:</strong>
For position 1: arr[1] = 1, range = 1 to 2
For position 2: arr[2] = 2, range = 1 to 3
For position 3: arr[3] = 1, range = 2 to 3
Therefore, the fountain at position arr[2] covers
the whole garden. Therefore, the required output is 1.</span>

</pre>
<p><strong><span style="font-size: 18px;">Example 2:</span></strong></p>
<pre><strong><span style="font-size: 18px;">Input: </span></strong><span style="font-size: 18px;">arr[] = [2, 1, 1, 2, 1]&nbsp;
</span><strong><span style="font-size: 18px;">Output: </span></strong><span style="font-size: 18px;">2&nbsp;</span>
<span style="font-size: 18px;"><strong>Explanation:</strong> 
For position 1: arr[1] = 2, range = 1 to 3
For position 2: arr[2] = 1, range = 1 to 3
For position 3: arr[3] = 1, range = 2 to 4
For position 3: arr[4] = 2, range = 2 to 5
For position 3: arr[5] = 1, range = 4 to 5
Therefore, the fountain at position arr[1] and arr[4] covers the whole garden. Therefore, the required output is 2. Also possible answer is arr[2] and arr[4].</span>
</pre>
<p><strong><span style="font-size: 18px;">Constraints:</span></strong></p>
<p><span style="font-size: 18px;">1 &lt;= N &lt;= 2*10<sup>5<br></sup></span><span style="font-size: 18px;">0 &lt;= arr[i] &lt;= 10<sup>9</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Dynamic Programming</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;