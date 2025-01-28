<h2><a href="https://www.geeksforgeeks.org/problems/akku-and-arrays4452/1?page=5&difficulty=Hard&status=unsolved&sortBy=accuracy">Akku and Arrays</a></h2><h3>Difficulty Level : Difficulty: Hard</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Akku have solved many problems, she is genius. One day her friend gave her an Array of size n and asked her to perform<br>
some queries of following type:<br>
Each query consists of three integers<br>
1 A B : Update the Array at index A by value B<br>
2 A B : if the subarray from index A to B (both inclusive) is<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. Both increasing(Non-decreasing) and decreasing(Non-increasing) print -1<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. Only increasing(Non-decreasing) print 0<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. Only decreasing(Non-increasing) print 1<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4. Neither increasing nor decreasing print -1</span></p>

<p><span style="font-size:18px">Akku needs your help, can you help her.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>nums = {1,5,7,4,3,5,9},
Queries = {{2,1,3},{1,7,4},{2,6,7}}
<strong>Output: </strong>{0,1}
<strong>Explanation: </strong>For the 1st query given :
A = 1, B = 3. From 1 to 3(1,5,7) elements 
are in increasing order. So answer is 0.
For the 2nd query we have to update the 7th
element of the array by 4. So new updated array
will be {1,5,7,4,3,5,4}
For the 3rd query A = 6, B = 7. From 6 to 7
(5, 4) elements are in descending order. So 
answer is 1.</span>
</pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read or print anything. Your task is to complete the function&nbsp;<strong>solveQueries()&nbsp;</strong>which takes nums and Queries as input parameter and returns a list containing the answer for the 2nd type of query.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Comeplxity:&nbsp;</strong>O(n*log(n))<br>
<strong>Expected Space Comeplxity:&nbsp;</strong>O(n)</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= n &lt;= 10<sup>4</sup><br>
1 &lt;= nums[i] &lt;= 10<sup>4</sup><br>
1 &lt;= No. of queries &lt;= 10<sup>4</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Segment-Tree</code>&nbsp;<code>Advanced Data Structure</code>&nbsp;