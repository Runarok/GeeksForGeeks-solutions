<h2><a href="https://www.geeksforgeeks.org/problems/maximum-weight-difference5036/1?page=2&category=Arrays&status=unsolved,attempted&sortBy=accuracy">Maximum weight difference</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an array <strong>arr[]</strong>.&nbsp;The task is to choose <strong>k</strong> numbers from the array such that the absolute difference between the sum of chosen numbers and the sum of remaining numbers is maximum. </span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [8, 4, 5, 2, 10] , k=2
<strong>Output:</strong> 17
<strong>Explanation:</strong> If we select 2 and 4, then abs((2+4) - (8+5+10)) = 17.
</span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [1, 1, 1, 1, 1, 1, 1, 1] , k=3
<strong>Output:</strong> 2
<strong>Explanation: </strong>We can select any 3 1's.
</span></pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(nlogn)<br><strong>Expected Auxiliary Space:</strong>&nbsp;O(1)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 &lt;= k &lt;= arr.size() &lt;=10<sup>5</sup><br>1 &lt;= arr[i] &lt;= 10<sup>5</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Data Structures</code>&nbsp;