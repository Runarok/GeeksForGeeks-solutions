<h2><a href="https://www.geeksforgeeks.org/problems/sum-of-digits-prime-non-prime1935/1?page=8&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">Sum of Digits Prime/Non-Prime</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given a number <strong>N</strong>, you need to write a program that&nbsp;finds the sum of&nbsp;digits of the number till the number becomes a single digit and then check whether the number is Prime/Non-Prime.</span></p>
<p><span style="font-size: 18px;"><strong>Example 1</strong>:</span></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong>
N=5602
<strong>Output:</strong>
0
<strong>Explanation:</strong>
1st step=5+6+0+2=13
2nd step=1+3=4
Since 4 is not prime, so answer is 0.</span></pre>
<p><br><strong><span style="font-size: 18px;">Example 2:</span></strong></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong>
N=12
<strong>Output:</strong>
1
<strong>Explanation:</strong>
1st step=1+2=3
Since, 3 is prime, so answer =1.</span>
</pre>
<p><br><span style="font-size: 18px;"><strong>Your Task:</strong><br>You don't need to read input or print anything.Your Task is to complete the function <strong>digitPrime()</strong> which takes a number N as input parameter and returns 1 if the final digit sum(adding digits until it becomes single-digit number) is prime.Otherwise, it returns 0.</span></p>
<p><br><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong>O(1)<br><strong>Expected Auxillary Space:</strong>O(1)</span></p>
<p><br><span style="font-size: 18px;"><strong>Constraints:</strong><br>1&lt;=N&lt;=10<sup>9</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Prime Number</code>&nbsp;