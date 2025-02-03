<h2><a href="https://www.geeksforgeeks.org/problems/removing-consecutive-elements/1?page=1&category=Stack&difficulty=Medium,Hard&status=unsolved,attempted&sortBy=accuracy">Removing Consecutive Elements</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an array&nbsp;<strong>arr[]&nbsp;</strong>of positive<strong>&nbsp;</strong>elements and two special numbers<strong>&nbsp;x and y</strong>. Remove all consecutive same special numbers. The final array should be free from any consecutive same special elements.<br><strong>Note:</strong>&nbsp;The final array may be empty.</span></p>
<p><span style="font-size: 18px;"><strong>Examples&nbsp;</strong>:</span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [2, 1, 2, 2, 2, 5], x = 1, y = 2
<strong>Output: </strong>2 1 2 5</span>
<span style="font-size: 18px;"><strong>Explanation: </strong>x = 1 and y = 2. Now, we traverse the array from left to right and remove all consecutive 1s and 2s. 
First, we remove 2 1 <strong>2 2</strong> 2 5. 
Now we are left with 2 1 2 5. 
Now,there is no consecutive 1 or 2.
We are left with 2 1 2 5.</span></pre>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 &lt;= arr.size() &lt;= 10<sup>5</sup><br>1 &lt;= arr[i] &lt;= 10<sup>5</sup><br>1 &lt;= x, y &lt;= 10<sup>5</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Stack</code>&nbsp;<code>STL</code>&nbsp;<code>Data Structures</code>&nbsp;