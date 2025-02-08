<h2><a href="https://www.geeksforgeeks.org/problems/sequence-of-sequence1155/1?page=1&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Sequence of Sequence</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18.6667px;">Given two integers&nbsp;<strong>n</strong>&nbsp;and&nbsp;<strong>m</strong>, the task is to determine the total number of special sequences of length&nbsp;<strong>n</strong>&nbsp;such that:&nbsp;&nbsp;</span></p>
<ul>
<li><span style="font-size: 18.6667px;">seq[i+1] &gt;= 2 * seq[i]</span></li>
<li><span style="font-size: 18.6667px;">seq[i] &gt; 0</span></li>
<li><span style="font-size: 18.6667px;">seq[i] &lt;= m</span></li>
</ul>
<p><strong><span style="font-size: 18px;">Examples:</span></strong></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong> n = 4, m = 10
<strong>Output:</strong> 4
<strong>Explanation:</strong> The sequences are {1, 2, 4, 8}, {1, 2, 4, 9}, {1, 2, 4, 10}, {1, 2, 5, 10}</span></pre>
<pre><span style="font-size: 18px;"><strong>Input:</strong> n = 2, m = 5
<strong>Output:</strong> 6
<strong>Explanation:</strong> The sequences are {1, 2}, {1, 3}, {1, 4}, {1, 5}, {2, 4}, {2, 5}</span></pre>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ n ≤ 10<br>1&nbsp;</span><span style="font-size: 18px;">≤ m&nbsp;</span><span style="font-size: 18px;">≤ 500</span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Divide and Conquer</code>&nbsp;<code>Algorithms</code>&nbsp;