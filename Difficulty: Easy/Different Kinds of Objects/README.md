<h2><a href="https://www.geeksforgeeks.org/problems/johns-haircut3556/1?page=15&status=unsolved&sortBy=accuracy">Different Kinds of Objects</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given N objects of K different kinds and the values of each of the K different kinds of objects in an array A. Assuming that each of the N objects can be of any of the K kinds(having equal probability), find the expected value of the N objects.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N=1
K=2
A=[10,8]
<strong>Output:</strong>
9
<strong>Explanation:</strong>
The object can be either of the first
kind with value 10 or the second kind
with value 8.Therefore, the expected value is 9.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N=2
K=5
A=[1,2,3,4,5]
<strong>Output:</strong>
6
<strong>Explanation:</strong>
The first object can be any one of the 
five kinds and the second object can be
any one of the five kinds.Thus, the expected
value of 2 objects is 6.</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function expectedValue()&nbsp; which takes two numbers N and K as well as an array of K numbers as input parameters and returns the expected value of the N objects.</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity:</strong>O(N)<br>
<strong>Expected Auxillary Space:</strong>O(1)</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1&lt;=K&lt;=10<sup>5</sup><br>
1&lt;=N,A[i]&lt;=10<sup>6</sup>, for i=[1,K]</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;