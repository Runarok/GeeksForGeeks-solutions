<h2><a href="https://www.geeksforgeeks.org/problems/operations-on-queue--114617/1?page=1&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">Operations on Queue</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given a queue of integers<strong> </strong>and <strong>Q</strong> queries. The task is to perform operations on the queue according to the query.&nbsp;</span></p>
<p><span style="font-size: 18px;">Queries are as:</span></p>
<ul>
<li dir="ltr"><span style="font-size: 18px;"><span style="background-color: transparent; font-family: arial;"><strong>i x :</strong> adds<strong> </strong>element <strong>x</strong> in the queue from the rear.</span></span></li>
<li dir="ltr"><span style="font-size: 18px;"><span style="background-color: transparent; font-family: arial;"><strong>r :</strong> removes<strong> </strong>the front element of the queue.</span></span></li>
<li dir="ltr"><span style="font-size: 18px;"><span style="background-color: transparent; font-family: arial;"><strong>h :</strong> returns</span> the front element.</span></li>
<li dir="ltr"><span style="font-size: 18px;"><span style="background-color: transparent; font-family: arial;"><strong>f y :</strong> check if the element<strong> </strong>y is present or not in the queue.</span> Return <strong>true</strong> if present, else <strong>false</strong>.</span></li>
</ul>
<p dir="ltr"><span style="font-size: 18px;">Note: You need to complete the functions enqueue(), dequeue(), front() and find() which perform the operations described above.</span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>Q = 6, Queries = [[i, 2], [i, 4], [i, 3], [i, 5], [h], [f, 8]]
<strong>Output:
</strong>2
false<strong>
Explanation: </strong>After inserting 2, 4, 3, and 5, the front element (h) is 2. The element 8 is not in the queue, so the find operation (f, 8) returns false.</span>
</pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>Q = 4, Queries = [[i, 3] [i, 4] [r] [f, 3]]
<strong>Output:<br></strong></span><span style="font-size: 18px;">false<strong>
Explanation: </strong>After inserting 3 and 4, removing the front element (r) leaves 4 in the queue. The element 3 is not in the queue, so the find operation (f, 3) returns false.</span></pre>
<p dir="ltr"><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 &lt;= Q &lt;= 10<sup>3</sup></span></p></div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Amazon</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Queue</code>&nbsp;<code>Data Structures</code>&nbsp;