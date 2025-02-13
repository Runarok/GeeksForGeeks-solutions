<h2><a href="https://www.geeksforgeeks.org/problems/count-the-numbers-satisfying-m-summ-sumsumm-equals-to-n2537/1?page=1&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Count the numbers satisfying (m + sum(m) + sum(sum(m))) equals to N</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given an integer N, the task is to find out the count of numbers M that satisfy the condition <strong>M + sum(M) + sum (sum(M)) = N,</strong> where sum(M) denotes the sum of digits in M.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong> N = 9
<strong>Output:</strong> 1
<strong>Explaination:</strong> Only 1 positive integer satisfies 
the condition that is 3, 3 + sum(3) + sum(sum(3))
= 3 + 3 + 3 = 9.</span> </pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong> N = 9939
<strong>Output:</strong> 4
<strong>Explaination:</strong> M can be 9898, 9907, 9910 and 9913. 
9898 + sum(9898) + sum(sum(9898)) = 9898 + 34 + 7 
= 9939. 
9907 + sum(9907) + sum(sum(9907)) = 9907 + 25 + 7 
= 9939. 
9910 + sum(9910) + sum(sum(9910)) = 9910 + 19 + 10 
= 9939. 
9913 + sum(9913) + sum(sum(9913)) = 9913 + 22 + 4 
= 9939. </span></pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You do not need to read input or print anything. Your task is to complete the function <strong>countOfNumbers() </strong>which takes the value N and returns&nbsp;the count of numbers M that satisfy the given condition</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(logn)<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ N ≤ 10<sup>9</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Numbers</code>&nbsp;<code>Algorithms</code>&nbsp;