<h2><a href="https://www.geeksforgeeks.org/problems/sum-of-nodes-within-k-distance-from-target--170637/1?page=1&category=Tree&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Sum of nodes within k distance from target</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Geek is at the geek summer carnival. To unlock discounts on exclusive courses he is given a card with a binary tree, a target node and a positive integer k on it.&nbsp;<br>He needs to find the sum of all nodes within a max distance k from target node such that the target node is included in sum.</span></p>
<p><strong><span style="font-size: 18px;">Example 1:</span></strong></p>
<pre><strong><span style="font-size: 18px;">Input:</span></strong>
<span style="font-size: 18px;">target = 9 
k = 1
Binary Tree = 
            1
           /  \
          2    9
        /     /  \
       4     5    7
      /  \       /  \
     8    19    20   11
    /   /   \
  30   40   50
</span>
<span style="font-size: 18px;"><strong>Output: </strong>22</span>

<span style="font-size: 18px;"><strong>Explanation: </strong>
Nodes within distance 1 from 9 
9 + 5 + 7 + 1 = 22</span></pre>
<p><br><span style="font-size: 18px;"><strong>Example 2:</strong></span></p>
<pre><strong><span style="font-size: 18px;">Input:</span></strong>
<span style="font-size: 18px;">target = 40 
k = 2
Binary Tree = 
            1
           /  \
          2    9
        /     /  \
       4     5    7
      /  \       /  \
     8    19    20   11
    /   /   \
  30   40   50</span>
<span style="font-size: 18px;">
<strong>Output: </strong>113</span>

<span style="font-size: 18px;"><strong>Explanation:</strong>
Nodes within distance 2 from 40,
40 + 19 + 50 + 4 = 113
</span></pre>
<p><span style="font-size: 18px;"><strong>Your Task:</strong><br>You don't need to read input or print anything. Complete the function <strong>sum_at_distK()</strong> that takes the root of the given binary tree, target and k as input parameters and return the required sum.&nbsp;</span></p>
<p><span style="font-size: 18px;"><strong>Expected time complexity:</strong> O(n)<br><strong>Expected space complexity: </strong>O(n)</span><br><br><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 &lt;= number of nodes &lt;= 1000<br>1 &lt;= data in nodes,target &lt;= 10000<br>1 &lt;= k &lt;= 20</span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Tree</code>&nbsp;<code>Data Structures</code>&nbsp;