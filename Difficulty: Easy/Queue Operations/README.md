<h2><a href="https://www.geeksforgeeks.org/problems/queue-operations/1?page=1&status=unsolved,attempted&sortBy=accuracy">Queue Operations</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given <strong>n</strong> integers, the task is to insert those elements in the queue. Also, given <strong>m</strong> integers, the task is to find the frequency of each number in the Queue.<br><strong>Note:</strong></span></p>
<ul>
<li><span style="font-size: 18px;">insert() will be called n times by main().</span></li>
<li><span style="font-size: 18px;"><span style="font-size: 18px;">findFrequency() will be called m times by main();</span></span></li>
<li><span style="font-size: 18px;"><span style="font-size: 18px;">Where k is each element passing through respective function calls.</span></span></li>
</ul>
<p><strong><span style="font-size: 18px;">Examples:</span></strong></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>insert[] = [1 2 3 4 5 2 3 1], findFrequency[] = [1 3 2 9 10]</span>
<span style="font-size: 18px;"><strong>Output:</strong>
2
2
2
-1
-1</span>
<span style="font-size: 18px;"><strong>Explanation:
</strong>After inserting 1, 2, 3, 4, 5, 2, 3 and 1 into the queue, frequency of 1 is 2, 3 is 2 and 2 is 2. Since 9 and 10 are not there in the queue we output -1 for them.</span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>insert[] = [1 2 1 1 1 4], findFrequency[] = [1 5 4 3]</span>
<span style="font-size: 18px;"><strong>Output:</strong>
4
-1
1
-1</span>
<span style="font-size: 18px;"><strong>Explanation:
</strong>After inserting 1, 2, 1, 1, 1 and 4 into the queue, frequency of 1 is 4 and that of 4 is 1. Since 5 and 3 are not there in the queue we output -1 for them.</span></pre>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 &lt;= n &lt;= 10<sup>3</sup><br>1 &lt;= m &lt;= 10<sup>3</sup><br>1 &lt;= Elements of Queue &lt;= 10<sup>6</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Queue</code>&nbsp;<code>Data Structures</code>&nbsp;