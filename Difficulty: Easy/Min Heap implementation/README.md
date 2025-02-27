<h2><a href="https://www.geeksforgeeks.org/problems/min-heap-implementation/1?page=1&company=Amazon&status=unsolved,attempted&sortBy=accuracy">Min Heap implementation</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given a<strong> priority queue (max heap)</strong> and <strong>Q</strong> queries to be performed on priority queue. The task is to perform operations based on queries.<br>1. <strong>p :</strong> query to <strong>push</strong> element (x, given with query) to priority_queue <strong>and print size</strong>.<br>2. <strong>pp :</strong> query to <strong>pop</strong> element from priority_queue<strong> and print size</strong>.<br>3. <strong>t :</strong> query to <strong>return top</strong> element of priority_queue, <strong>if empty return -1.</strong></span></p>
<p><span style="font-size: 18px;"><strong>Examples :</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>Q = 5
p 5
p 3
p 1
t
pp
<strong>Output:</strong> 
1
2
3
1
2</span>
<span style="font-size: 18px;"><strong>Explanation: </strong>Pushing 5, 3, 1 to queue. Now, fetching top which is 1 (according to min heap property smallest element at top). Popping back 
element from queue, size reduced to 2.</span>
</pre>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 &lt;= Q &lt;= 100</span></p></div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Amazon</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Queue</code>&nbsp;<code>STL</code>&nbsp;<code>Data Structures</code>&nbsp;