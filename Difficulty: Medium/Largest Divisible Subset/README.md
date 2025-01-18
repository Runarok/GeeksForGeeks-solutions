<h2><a href="https://www.geeksforgeeks.org/problems/largest-divisible-subset--170643/1?page=1&company=Google&difficulty=Basic,Easy,Medium,Hard&status=unsolved,attempted&sortBy=submissions">Largest Divisible Subset</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 14pt;">Given a set of&nbsp;<strong>distinct</strong>&nbsp;positive integers&nbsp;<code>nums</code>, return the largest subset&nbsp;<code>answer</code>&nbsp;such that every pair&nbsp;<code>(answer[i], answer[j])</code>&nbsp;of elements in this subset satisfies:</span></p>
<ul>
<li><span style="font-size: 14pt;"><code>answer[i] % answer[j] == 0</code>, or</span></li>
<li><span style="font-size: 14pt;"><code>answer[j] % answer[i] == 0</code></span></li>
</ul>
<p><span style="font-size: 14pt;">If there are multiple subsets of the largest size, return the <strong>lexicographically greatest array</strong> after sorting it in ascending order.</span></p>
<p><span style="font-size: 14pt;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>arr[] = [1, 2, 3, 6]
<strong>Output: </strong>[1, 3, 6]
<strong>Explanation: </strong>The largest divisible subset can be either [1, 2, 6] or [1, 3, 6], both having a length of 3. However, [1, 3, 6] is lexicographically greater than [1, 2, 6], so it is the correct output.</span></pre>
<pre><span style="font-size: 14pt;"><strong>Input</strong>: arr[] = [1, 2, 4, 8]
<strong>Output: </strong>[1, 2, 4, 8]<br><strong>Explanation:</strong> The largest divisible subset is [1, 2, 4, 8], where each element divides the next one. This subset is already the lexicographically greatest.</span></pre>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>arr[] = [3, 5, 10, 20, 21]
<strong>Output: </strong>[5, 10, 20]
<strong>Explanation: </strong>The largest divisible subset is [5, 10, 20], where each element is divisible by the previous one. Other valid subsets like [3] or [21] are smaller in size.</span></pre>
<p><span style="font-size: 14pt;"><strong>Constraint:</strong><br>1 ≤ arr.size() ≤ 10<sup>3</sup><br>1&nbsp; ≤ arr[i] ≤ 10<sup>9</sup></span></p></div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Bloomberg</code>&nbsp;<code>Facebook</code>&nbsp;<code>Adobe</code>&nbsp;<code>Google</code>&nbsp;<code>Amazon</code>&nbsp;<code>Apple</code>&nbsp;<code>Microsoft</code>&nbsp;<code>Yahoo</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Dynamic Programming</code>&nbsp;<code>Sorting</code>&nbsp;<code>Arrays</code>&nbsp;