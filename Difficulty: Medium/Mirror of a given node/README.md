<h2><a href="https://www.geeksforgeeks.org/problems/mirror-of-a-given-node/1?page=4&category=Tree&difficulty=Easy,Medium&status=unsolved,attempted&sortBy=accuracy">Mirror of a given node</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given a Binary tree, the problem is to find mirror of a given node. The mirror of a node is a node which exist at the mirror position of node in opposite subtree at the root.</span></p>
<p><strong><span style="font-size: 18px;">Examples:</span></strong></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>root = [1, 2, 3, 4, 5, 6, 7], target = 4
          1        
&nbsp;       /   \       
&nbsp;      2     3     
&nbsp;     / \     / \    
&nbsp;    4  5   6  7   
<strong>Output: </strong>7
<strong>Explanation: </strong>You can see below that the mirror node of 4 is 7.</span>
<span style="font-size: 18px;">          1       |       1
        /   \      |      /   \
       2     3    |    3     2
      / \     / \   |   / \    /  \
     4   5 6   7 |  7  6  5   4</span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>root = [1, 2, 3, 4, 5], target = 4
&nbsp;       1
&nbsp;     /   \
&nbsp;    2     3
&nbsp;   / \
&nbsp;  4   5</span>
<span style="font-size: 18px;"><strong>Output: </strong>-1<br><strong>Explanation: </strong>There is no mirror element present of 4.<br></span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>root = [1, 2, 3, 4, 5], target = 2
&nbsp;       1
&nbsp;     /   \
&nbsp;    2     3
&nbsp;   / \
&nbsp;  4   5</span>
<span style="font-size: 18px;"><strong>Output: </strong>3<br><strong>Explanation: </strong>There is mirror element present of 2.</span></pre>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1&lt;=number of nodes&lt;=10<sup>4</sup><br>1&lt;=data of node&lt;=10<sup>4</sup><br>1&lt;=target&lt;=10<sup>4</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Tree</code>&nbsp;<code>Data Structures</code>&nbsp;