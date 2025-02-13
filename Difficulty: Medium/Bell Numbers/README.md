<h2><a href="https://www.geeksforgeeks.org/problems/bell-numbers2108/1?page=1&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Bell Numbers</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given a set of n elements, find number of ways of partitioning it.<br></span><span style="font-size: 18px;">In other words, Let S(n, k) be total number of partitions of n elements into k sets. The answer will be the ∑</span><span style="font-size: 18px;">S(n, k) for k = 1 to n.</span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input</strong>: n = 2
<strong>Output:</strong> 2
<strong>Explanation</strong>: Let the set be {1, 2}. The partitions are {{1},{2}} and {{1, 2}}.</span></pre>
<pre><span style="font-size: 18px;"><strong><br>Input: </strong>n = 3
<strong>Output: </strong>5<br><strong>Explanation</strong>: Let the set be {1, 2, 3}. The partitions are<br>{{1},{2},{3}}
{{1},{2, 3}}
{{2},{1, 3}}
{{3},{1, 2}}
{{1, 2, 3}}. </span></pre>
<p>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong></span></p>
<p><span style="font-size: 18px;">1 ≤ n ≤ 13</span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Dynamic Programming</code>&nbsp;<code>Algorithms</code>&nbsp;