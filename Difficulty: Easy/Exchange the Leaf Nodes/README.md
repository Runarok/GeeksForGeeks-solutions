<h2><a href="https://www.geeksforgeeks.org/problems/exchange-the-leaf-nodes/1?page=4&category=Tree&difficulty=Easy,Medium&status=unsolved,attempted&sortBy=accuracy">Exchange the Leaf Nodes</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 14pt;">Given a binary tree. you have to swap leaf nodes in the given binary tree pairwise starting from from left to right.</span></p>
<p><span style="font-size: 14pt;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 14pt;"><strong>Input:</strong> 

<img style="height: 363px; width: 583px;" src="https://contribute.geeksforgeeks.org/wp-content/uploads/swap1.png" alt="">
<strong>Output:</strong> [7, 2, 1, 4, 5, 9, 3, 8, 6, 10]&nbsp;
<img style="height: 381px; width: 602px;" src="https://contribute.geeksforgeeks.org/wp-content/uploads/swap2.png" alt="">
<strong>Explanation: </strong>In order traversal of tree after swapping nodes is [7, 2, 1, 4, 5, 9, 3, 8, 6, 10].</span></pre>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>
          1
       /     \
      2       3
       \    /    \
        5  6      7
<strong>Output:</strong> [2, 6, 1, 5, 3, 7]
        1
     /     \
    2       3
     \    /   \
      6  5     7 <br><strong>Explanation:&nbsp;</strong>In order traversal of tree after swapping nodes is<span style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; white-space: normal;">&nbsp;[</span>2, 6, 1, 5, 3, 7]<span style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; white-space: normal;">.</span></span></pre>
<p>&nbsp;</p>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>
          2
       /     \
      6       3
            /    \
           9      7<br><strong>Output:</strong> [9, 2, 6, 3, 7]<br></span><span style="font-size: 14pt;">          2
       /     \
      9       3
            /    \
           6      7<br></span><span style="font-size: 14pt;"><strong>Explanation:&nbsp;</strong>In order traversal of tree after swapping nodes is<span style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; white-space: normal;">&nbsp;[</span>9, 2, 6, 3, 7]<span style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; white-space: normal;">.</span></span></pre>
<p><span style="font-size: 14pt;"><strong>Constraints:</strong><br>1&lt;=number of nodes&lt;=10<sup>5</sup><br>1&lt;=node-&gt;data&lt;=10<sup>5</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Tree</code>&nbsp;<code>Data Structures</code>&nbsp;