<h2><a href="https://www.geeksforgeeks.org/problems/sum-of-right-leaf-nodes/1?page=2&category=Tree&difficulty=Easy,Medium&status=unsolved,attempted&sortBy=accuracy">Sum of Right Leaf Nodes</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 14pt;">Given a Binary Tree. Your task is to complete the function <strong>rightLeafSum()</strong>, which should return the sum of all the&nbsp;leaf nodes that are the right child of their parent&nbsp;of the given binary tree.<br><strong><br>Examples:</strong><strong style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"><br>Input:</strong></span></p>
<pre><span style="font-size: 14pt;">          52
        /    \
      12      55
     /  \     /  \
    83   6   17  82
   /    /  \   
  56   61  35
<strong>Output : </strong>117
<strong>Explanation: </strong>All the right leaf nodes presents are 35, 82 which sums up to 117
</span></pre>
<pre><span style="font-size: 14pt;"><strong>Input:</strong>
         12
        /  \    
     20     30
    /  \     /
  40   60  90

<strong>Output: </strong>60
<strong>Explanation: </strong>The only right leaf node is present is 60<br></span></pre>
<pre style="font-family: -apple-system, 'system-ui', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; font-size: medium; white-space: normal;"><span style="font-size: 14pt;"><strong style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">Input : </strong><span style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">1</span><strong style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"><br></strong> <strong>Output : </strong>0 <br><strong>Explanation:&nbsp;</strong><span style="color: var(--text-color); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; word-spacing: 4px; white-space-collapse: break-spaces;">There is no leaf node, so sum is 0.</span></span></pre>
<p><span style="font-size: 14pt;"><strong>Constraints:</strong><br>1 &lt;= number of nodes &lt;=10<sup>6</sup><sup><br></sup>1 &lt;= node-&gt;data &lt;=10<sup>5</sup><sup><br></sup>It is guaranteed that sum will not exceed integer max value<br></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Traversal</code>&nbsp;<code>Tree</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;