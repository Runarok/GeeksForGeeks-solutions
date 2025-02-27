<h2><a href="https://www.geeksforgeeks.org/problems/full-binary-tree/1?page=1&company=Amazon&status=unsolved,attempted&sortBy=accuracy">Full Binary Tree</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given a Binary Tree. Check whether the Binary tree is a full binary tree or not.</span></p>
<p><span style="font-size: 18px;"><a title="Binary Tree" href="https://www.geeksforgeeks.org/what-is-binary-tree/" target="_blank" rel="noopener"><strong>What is a Binary Tree?</strong></a><br><br><em>A binary tree is a tree data structure with a maximum of 2 children per node. We commonly refer to them as the left and right child as each element in a binary tree may only have two children.</em><br><br><a title="Full Binary Tree" href="https://www.geeksforgeeks.org/full-binary-tree/" target="_blank" rel="noopener"><strong>What is a Full Binary Tree?</strong></a><br><br><em>&nbsp;&nbsp;&nbsp; A full binary tree is a binary tree with either zero or two child nodes for each node. </em><br><br></span></p>
<p><span style="font-size: 18px;"><strong>Example 1:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:
</strong></span><strong><span style="font-size: 18px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span></strong><span style="font-size: 18px;">1
&nbsp; &nbsp; &nbsp; &nbsp;/&nbsp;  &nbsp;\
&nbsp; &nbsp; &nbsp;&nbsp;2&nbsp; &nbsp; &nbsp;&nbsp;3
&nbsp; &nbsp; /&nbsp;&nbsp;&nbsp;\
&nbsp; &nbsp;4&nbsp;   &nbsp;5<strong>
Output: </strong>1<strong>
Explanation: </strong>Every node except leaf node
has two children so it is a full tree.</span>
</pre>
<p><span style="font-size: 18px;"><strong>Example 2:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:
</strong></span><strong><span style="font-size: 18px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span></strong><span style="font-size: 18px;">1
&nbsp; &nbsp; &nbsp; &nbsp;/&nbsp;  &nbsp;\
&nbsp; &nbsp; &nbsp;&nbsp;2&nbsp; &nbsp; &nbsp;&nbsp;3
&nbsp; &nbsp; /&nbsp;&nbsp;&nbsp;
&nbsp; &nbsp;4&nbsp;   &nbsp;<strong>
Output: </strong>0<strong>
Explanation: </strong>Node 2 has only one child
so this is&nbsp;not a full tree.</span></pre>
<p>&nbsp;</p>
<p><strong><span style="font-size: 18px;">Your Task:</span></strong><br><span style="font-size: 18px;">You don't need to read input or print anything. Your task is to complete the function</span><span style="font-size: 18px;"> <strong>isFullTree() </strong>which&nbsp;takes the&nbsp;root node of the tree<strong>&nbsp;</strong>as input and returns True if the given Binary Tree is full. Else, it returns False. <br>(The driver code will print 1 if the returned value is true, otherwise 0).</span></p>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:&nbsp;</strong>O(N).<br><strong>Expected Auxiliary Space:&nbsp;</strong>O(Height of the Tree).</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1&lt;=Number of nodes&lt;=1000</span></p>
<p><strong>&nbsp;</strong></p></div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Amazon</code>&nbsp;