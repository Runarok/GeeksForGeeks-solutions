<h2><a href="https://www.geeksforgeeks.org/problems/implement-change-key-in-bst/1?page=8&status=unsolved&sortBy=accuracy">Change of Key in BST</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 20px;">Given a Binary Search Tree ,change old key value present in the tree to the given new key value.<br><strong>Example</strong> 1:</span></p>
<pre><span style="font-size: 18px;"><strong>Input</strong>: Root of below tree
              50
           /     \
          30      70
         /  \    /  \
       20   40  60   80 
     Old key value:  40
     New key value:  10

<strong>Output</strong>: BST should be modified to following
              50
           /     \
          30      70
         /       /  \
       20      60   80  
       /
     10</span></pre>
<p><span style="font-size: 18px;"><strong>Your Task:</strong><br>The task is to complete the function <strong>changeKey()</strong> which takes root, oldVal and newVal as the input argument, and returns the root of tree after changing the old value with new value in BST. The driver code will print the inorder traversal of the updated tree in output itself. </span></p>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:&nbsp;</strong>O(Height of tree)<br><strong>Expected Auxiliary Space:&nbsp;</strong>O(1).</span><br><br><span style="font-size: 20px;"><strong>Constraints:</strong><br>1&lt;=Number of Nodes in tree&lt;=500</span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Binary Search Tree</code>&nbsp;<code>Data Structures</code>&nbsp;