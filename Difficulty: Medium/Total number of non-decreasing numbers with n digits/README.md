<h2><a href="https://www.geeksforgeeks.org/problems/total-number-of-non-decreasing-numbers-with-n-digits5548/1?page=1&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Total number of non-decreasing numbers with n digits</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">A number is non-decreasing if each of its&nbsp;digits&nbsp;is greater than or equal to the previous digit. For example, 223, 4455567, 899, are non-decreasing numbers.&nbsp;<br>
Given an integer&nbsp;<strong>N</strong>, find the total number&nbsp;of&nbsp;non-decreasing numbers&nbsp;that have&nbsp;N&nbsp;digits.</span></p>

<p><br>
<strong><span style="font-size:18px">Example 1:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong> N = 1
<strong>Output:</strong> 10
<strong>Explaination:</strong> All the single digit numbers 
are non-decreasing. So count is 10.</span></pre>

<p><br>
<strong><span style="font-size:18px">Example 2:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong> N = 2
<strong>Output:</strong> 55
<strong>Explaination:</strong> For number starting with 1 there 
is 1 decreasing number 10, for number starting 
with 2 there are 2 decreasing numbers. 
Similarly numbers starting with 3, 4 . . . 9 
there are 3, 4 . . . 9 decreasing numbers. 
Total 45 decreasing numbers. Total possible 
numbers are 10<sup>2</sup> = 100. So total number of 
non-decreasing numbers are 100-45 = 55.</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
You do not need to read input or print anything. Your task is to complete the function <strong>count()</strong> which takes the number N as input parameter and return the&nbsp;total number of non-decreasing numbers.</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(N)<br>
<strong>Expected Auxiliary Space:</strong> O(N)</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ N ≤ 500</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Dynamic Programming</code>&nbsp;<code>Algorithms</code>&nbsp;