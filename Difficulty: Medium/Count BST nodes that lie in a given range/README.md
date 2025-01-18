<h2><a href="https://www.geeksforgeeks.org/problems/count-bst-nodes-that-lie-in-a-given-range/1?page=1&company=Google&difficulty=Basic,Easy,Medium,Hard&status=unsolved&sortBy=submissions">Count BST nodes that lie in a given range</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given a Binary Search Tree (BST) and a range <strong>l-h(inclusive)</strong>, count the number of nodes in the BST that lie in the given range. </span></p>
<ul>
<li><span style="font-size: 18px;">The values smaller than root go to the left side</span></li>
<li><span style="font-size: 18px;">The values greater and equal to the root go to the right side</span></li>
</ul>
<p><span style="font-size: 18px;"><strong>Examples :</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong> root = [10, 5, 50, 1, N, 40, 100], l= 5, h = 45
      10
&nbsp;    /  \
&nbsp;   5    50
&nbsp;  /    /  \
&nbsp; 1    40  100
<strong>Output: </strong>3<strong>
Explanation: </strong>5 10 40 are the node in the range</span>
</pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>root = [5, 4, 6, 3, N, N, 7], l = 2, h = 8
     5
&nbsp;   /  \
&nbsp;  4    6
&nbsp; /      \
&nbsp;3        7
<strong>Output: </strong>5<strong>
Explanation: </strong>All the nodes are in the given range.<br></span></pre>
<pre><strong>Input: </strong>root = [7, 4, 9, 3, 5], l = 23, h = 95
<strong>Output: </strong>0</pre>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 &lt;= Number of nodes &lt;= 10<sup>5</sup><br>1 &lt;= (l &lt;= h )&lt; =10<sup>5</sup></span></p></div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>D-E-Shaw</code>&nbsp;<code>Google</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Binary Search Tree</code>&nbsp;<code>Tree</code>&nbsp;<code>Data Structures</code>&nbsp;