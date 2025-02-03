<h2><a href="https://www.geeksforgeeks.org/problems/depth-of-node/1?page=4&category=Tree&difficulty=Easy,Medium&status=unsolved,attempted&sortBy=accuracy">Depth of node</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given a binary tree of size <strong>n</strong>, find the <strong>depth of the deepest odd-level leaf</strong> node in a binary tree. If there is <strong>no leaf </strong>at the odd level then<strong> return 0</strong>. Consider that the level starts with 1. The depth of a leaf node is a number of nodes on the path from root to leaf (including both leaf and root).</span></p>
<p><strong><span style="font-size: 18px;">Examples:</span></strong></p>
<pre><strong><span style="font-size: 18px;">Input: </span></strong><span style="font-size: 18px;">
&nbsp;         1
&nbsp;       /    \
&nbsp;      2      3
&nbsp;     / \    / \
&nbsp;    4   5  6   7</span>
<strong><span style="font-size: 18px;">Output: </span></strong><span style="font-size: 18px;">3</span>
<span style="font-size: 18px;"><strong>Explanation: </strong>In the above tree 4,5,6 and 7 are</span> <span style="font-size: 18px;">odd level leaf nodes at depth 3.So the answer is 3.</span>
</pre>
<pre><strong><span style="font-size: 18px;">Input: </span></strong><span style="font-size: 18px;">
     1
    / \</span>
   <span style="font-size: 18px;"> 2   4</span>
<span style="font-size: 18px;"><strong style="font-size: 18px;">Output:</strong><span style="font-size: 18px;"> 0<br></span><span style="font-size: 14pt;"><strong>Explanation: </strong>In the above tree,no leaf node is at odd level</span><span style="font-size: 18px;"><span style="font-size: 14pt;">. So the answer is 0.</span></span></span></pre>
<pre><span style="font-size: 18px;"><strong style="font-size: 18px;">Input: </strong><span style="font-size: 18px;">
&nbsp;       </span><span style="font-size: 18px;">  10
         /  \
        5    15
       / \   
      3   7     
</span><strong style="font-size: 18px;">Output: </strong><span style="font-size: 18px;">3</span>
<span style="font-size: 18px;"><strong>Explanation: </strong>In the above tree 3 and 7 are </span><span style="font-size: 18px;">odd level leaf nodes at depth 3. So the answer is 3.</span></span></pre>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1&lt;=number of nodes&lt;=10<sup>5</sup><br>1&lt;= node-&gt;data &lt;=10<sup>5</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Tree</code>&nbsp;<code>Data Structures</code>&nbsp;