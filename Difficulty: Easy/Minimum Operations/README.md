<h2><a href="https://www.geeksforgeeks.org/problems/find-optimum-operation4504/1?page=1&status=unsolved&sortBy=accuracy">Minimum Operations</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given a number <strong>n</strong>. Find the minimum number of operations required to reach <strong>n</strong> starting from <strong>0</strong>. You have <strong>two </strong>operations available:</span></p>
<ul>
<li><span style="font-size: 18px;">Double the number </span></li>
<li><span style="font-size: 18px;">Add one to the number</span></li>
</ul>
<p><span style="font-size: 18px;"><strong>Example 1:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>n = 8
<strong>Output:</strong> 4
<strong>Explanation</strong>: 0 + 1 = 1 <strong>--&gt;</strong> 1 + 1 = 2 <strong>--&gt;</strong> 2 * 2 = 4 <strong>--&gt;</strong> 4 * 2 = 8.
</span></pre>
<p><span style="font-size: 18px;"><strong>Example 2:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input</strong>: n = 7
<strong>Output:</strong> 5
<strong>Explanation</strong>: 0 + 1 = 1 <strong>--&gt;</strong> 1 + 1 = 2 <strong>--&gt;</strong> 1 + 2 = 3 <strong>--&gt;</strong> 3 * 2 = 6 <strong>--&gt;</strong> 6 + 1 = 7.</span></pre>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 &lt;= n &lt;= 10<sup>6</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Dynamic Programming</code>&nbsp;<code>Greedy</code>&nbsp;<code>Algorithms</code>&nbsp;