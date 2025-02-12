<h2><a href="https://www.geeksforgeeks.org/problems/sonam-bewafa-asks-questions3815/1?page=18&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Find Marks from Ranks</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p>Students take a test and receive marks where lower marks correspond to higher ranks (rank1 has the lowest mark, rank2 the next lowest, etc.). Marks are divided into <strong>n </strong>non-overlapping sorted intervals, each defined by:</p>
<ul>
<li><strong>l[i]:</strong> The lowest mark in the interval.</li>
<li><strong>r[i]:</strong> The highest mark in the interval.</li>
</ul>
<p>Given <strong>q </strong>queries, each with a rank <strong>rank[j]</strong>, determine the mark corresponding to that rank.</p>
<p><strong>Examples:</strong></p>
<pre><strong>Input:</strong> n = 3, q = 3<br>l[] = [1, 6, 14]<br>r[] = [3, 9, 15]<br>rank[] = [2, 5, 8]<br><strong>Output:</strong> [2, 7, 14]<br><strong>Explanation:&nbsp;<br></strong>Marks: 1, 2, 3, 6, 7, 8, 9, 14, 15<br>Ranks: 1, 2, 3, 4, 5, 6, 7, 8, 9<br><em>Rank 2</em> corresponds to mark 2.<br><em>Rank 5</em> corresponds to mark 7.<br><em>Rank 8</em> corresponds to mark 14.</pre>
<p><strong>Constraints:</strong></p>
<ul>
<li>1 &lt;= n &lt;=10<sup>5</sup></li>
<li>1 &lt;= q &lt;=10<sup>5</sup></li>
<li>1&lt;= l[i] &lt; r[i] &lt;=10<sup>18</sup></li>
<li>1&lt;= rank[j] &lt;=10<sup>18</sup></li>
</ul></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Searching</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;