<h2><a href="https://www.geeksforgeeks.org/problems/balanced-array07200720/1?page=4&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">Balanced Array</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an array <strong>arr</strong> of even size, the task is to find a minimum value that can be added to an element so that the array becomes balanced. An array is balanced if the sum of the left half of the array elements is equal to the sum of the right half. </span></p>
<p><span style="font-size: 18px;"><strong>Examples :</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr = [1, 5, 3, 2]
<strong>Output:</strong> 1
<strong>Explanation</strong>: Sum of first 2 elements is 1 + 5  = 6, Sum of last 2 elements is 3 + 2  = 5, To make the array balanced you can add 1.</span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr = [1, 2, 1, 2, 1, 3]
<strong>Output:</strong> 2
<strong>Explanation</strong>: Sum of first 3 elements is 1 + 2 + 1 = 4, Sum of last three elements is 2 + 1 + 3 = 6, To make the array balanced you can add 2.
</span></pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(n)<br><strong>Expected Auxiliary Space:</strong>&nbsp;O(1)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>2&lt;=arr.size()&lt;=10<sup>7&nbsp;</sup>where arr.size() is even.<br>1&lt;=arr[i]&lt;=10<sup>5</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Data Structures</code>&nbsp;