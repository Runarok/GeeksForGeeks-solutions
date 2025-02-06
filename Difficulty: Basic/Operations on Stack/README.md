<h2><a href="https://www.geeksforgeeks.org/problems/operations-on-stack/1?page=1&category=Stack&status=unsolved&sortBy=accuracy">Operations on Stack</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given a <strong>stack </strong>of <strong>integers </strong>and <strong>Q</strong> queries. The task is to perform the operation on stack according to the query.</span></p>
<p><span style="font-size: 18px;">The queries can be of 4 types:</span></p>
<blockquote>
<p><span style="font-size: 18px;"><span style="background-color: transparent; font-family: arial;"><strong>i x:</strong> (<strong>adds </strong>element x in the stack)</span>.<br></span><span style="font-size: 18px;"><span style="background-color: transparent; font-family: arial;"><strong>r:</strong> (<strong>removes </strong>the topmost element from the stack).<br></span></span><span style="font-size: 18px;"><span style="background-color: transparent; font-family: arial;"><strong>h:</strong> </span>Prints the topmost element.<br></span><span style="font-size: 18px;"><span style="background-color: transparent; font-family: arial;"><strong>f y:</strong> (check if the <strong>element </strong>y is <strong>present or not </strong>in the stack).</span> Print "<strong>Yes</strong>" if present, else "<strong>No</strong>".</span>&nbsp;</p>
</blockquote>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>Q = 6, Queries = [[i, 2], [i, 4], [i, 3],[i, 5], [h], [f, 8]]
<strong>Output: 
</strong>5
No<strong>
Explanation: </strong>Inserting 2, 4, 3, and 5 onto the stack. Returning top element which is 5. Finding 8 will give No, as 8 is not in the stack.</span></pre>
<pre><span style="font-size: 18px;"><strong>Input:</strong> Q = 4, Queries = [[i, 3], [i, 4], [r], [f, 3]]
<strong>Output: 
</strong>Yes
<strong>Explanation: </strong>Inserting 3 and 4 onto the stack. Removing 4 from the stack. Finding 3 will give Yes as output because 3 is available in the stack.</span></pre>
<p dir="ltr"><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ Number of queries ≤ 10<sup>3</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Stack</code>&nbsp;<code>Data Structures</code>&nbsp;