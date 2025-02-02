<h2><a href="https://www.geeksforgeeks.org/problems/binary-tree-k-level-sum3857/1?page=1&company=Samsung&difficulty=Easy,Medium&status=unsolved&sortBy=accuracy">Binary Tree K level sum</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given a binary tree <strong>s </strong>and a number <strong>k</strong>, the task is to find the sum of tree nodes at level <strong>k</strong>. The Binary Tree is given in string form <strong>s</strong>: (node-value(left-subtree)(right-subtree)).</span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong style="font-size: 18px;">Input:</strong> <span style="font-size: 14pt;">s</span></span><span style="font-size: 18px;"><strong> = </strong>"</span><span style="font-size: 18px;">(0(5(6()())(4()(9()())))(7(1()())(3()())))" , k = 2</span>
<span style="font-size: 18px;"><strong><span style="font-size: 18px;">Output:</span> </strong></span><span style="font-size: 18px;">14</span>
<span style="font-size: 18px;"><strong>Explanation:</strong></span>
<span style="font-size: 18px;">The Tree from the above String will be formed as:
                             0
                           /   \
                          5      7
                        /  \    /  \
                       6    4  1    3
                             \
                              9 </span> 
<span style="font-size: 18px;">Sum of nodes at the 2nd level is 6+4+1+3 = 14.</span></pre>
<pre><span style="font-size: 18px;"><strong style="font-size: 18px;">Input:</strong> </span><span style="font-size: 18px;">s = "(4(8()9())" , k = 1</span>
<span style="font-size: 18px;"><strong><span style="font-size: 18px;">Output:</span> </strong></span><span style="font-size: 18px;">17</span>
<span style="font-size: 18px;"><strong>Explanation:</strong></span>
<span style="font-size: 18px;">The Tree from the above String will be formed as:
                             4
                           /   \
                          8     9</span>
<span style="font-size: 18px;">Sum of nodes at the 1st level is 8+9 = 17.</span></pre>
<pre><span style="font-size: 18px;"><strong>Input:</strong> </span><span style="font-size: 18px;">s = "(2)" , k = 0</span>
<span style="font-size: 18px;"><strong>Output:</strong> 2</span> <br><span style="font-size: 18px;"><strong>Explanation:</strong></span>
<span style="font-size: 18px;">The Tree from the above String will be formed as: 2                                                    </span>
<span style="font-size: 18px;">Sum of nodes at the 0th level is 2.</span></pre>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 &lt;= |s| &lt;= 10<sup>5</sup></span><br><span style="font-size: 18px;">0 &lt;= k &lt;= </span><span style="font-size: 18px;">15</span></p></div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Samsung</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Tree</code>&nbsp;<code>Data Structures</code>&nbsp;