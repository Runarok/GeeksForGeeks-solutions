<h2><a href="https://www.geeksforgeeks.org/problems/delete-keys-in-a-linked-list/1?page=2&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Delete keys in a Linked list</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p>Given a single linked list and an integer <strong>x.</strong> Your task is to complete the function <strong>deleteAllOccurances()</strong> which deletes all occurences of a key x present in the linked list. The function takes two arguments: the head of the linked list and an integer x. The function should&nbsp;returns the head of the modified linked list.</p>

<p><strong>Example 1:</strong></p>

<pre><strong>Input:
</strong>LinkedList = 2-&gt;2-&gt;1-&gt;4-&gt;4
x = 4
<strong>Output: 
</strong>3
2 2 1<strong> </strong>
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:
</strong>LinkedList = 1-&gt;2-&gt;2-&gt;3-&gt;2-&gt;3
x = 2
<strong>Output: 
</strong>3
1 3 3<strong>
Explanation:</strong> Given number to delete is 2.
First line of output contains the 
number of remaining elements in the list.
After deleting all occurrences of 2, we
have elements in the list as 1, 3, and 3.
</pre>

<p>&nbsp;</p>

<p><strong>Your Task:</strong><br>
The task is to complete the function&nbsp;<strong>deleteAllOccurances</strong>() which should delete all the occurrences of given number x from the list and&nbsp;return the head of the modified linked list.</p>

<p><strong>Expected Time Complexity</strong> : O(N)<br>
<strong>Expected Auxilliary Space</strong> : O(1)</p>

<p><strong>Constraints:</strong><br>
1 &lt;= size of the linkedlist&nbsp;&lt;= 100<br>
1 &lt;= x &lt;= N</p>
</div>