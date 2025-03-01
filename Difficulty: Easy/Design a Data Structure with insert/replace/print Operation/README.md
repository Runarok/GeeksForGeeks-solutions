<h2><a href="https://www.geeksforgeeks.org/problems/design-a-data-structure-with-insertreplaceprint-operation/1?page=1&status=unsolved&sortBy=accuracy">Design a Data Structure with insert/replace/print Operation</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Design a data structure to perform the following operations.</span></p>
<p><span style="font-size: 18px;">1.&nbsp;<strong>insert(x):</strong>&nbsp;inserts an element at the end of the data structure.<br>2.&nbsp;<strong>print():&nbsp;</strong>prints the elements of the data structure(space separated)<br>3.<strong>&nbsp;replace(x, sequence):</strong>&nbsp;replaces the first index of x with the given sequence.</span></p>
<p><span style="font-size: 18px;"><strong>Example :</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>insert(3), insert(10), print(), insert(3), replace(3,[1,2,3]), print()<strong>
Output:
</strong>3 10
1 2 3 10 3<strong>
Explanation: </strong>After the two insert operations, the data structure contains [3, 10], after the third insert operation the DS will be <br>[3, 10, 3]. The replace operation replaces the first index of 3 with the sequence [1, 2, 3] and the data structure will contain [1, 2, 3, 10, 3]</span>
</pre>
<p><span style="font-size: 18px;"><strong>Note:&nbsp;</strong>The driver code will print the new line after calling the print() function.</span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>CPP</code>&nbsp;