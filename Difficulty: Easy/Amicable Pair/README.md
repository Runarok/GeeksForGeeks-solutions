<h2><a href="https://www.geeksforgeeks.org/problems/amicable-pair0804/1?page=4&status=unsolved&sortBy=accuracy">Amicable Pair</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px"><a href="https://www.geeksforgeeks.org/pairs-amicable-numbers/">Amicable numbers&nbsp;</a>are two different numbers so related that the&nbsp;<a href="https://www.geeksforgeeks.org/sum-of-all-proper-divisors-of-a-natural-number/">sum of the proper divisors</a>&nbsp;of each is equal to the other number. (A proper divisor of a number is a positive factor of that number other than the number itself. Given two Numbers <strong>A </strong>and <strong>B</strong>, find whether they are Amicable Numbers or not. Print 1 if they are Amicable else 0.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>A </strong>= 220 , <strong>B </strong>= 284</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">1</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">Proper divisors of 220 are 1, 2,
4, 5, 10, 11, 20, 22, 44, 55 and 110.
Sum of these is 284. Proper divisors
of 284 are 1, 2, 4, 71 and 142
with sum 220.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>A </strong>= 4 , <strong>B </strong>= 8</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">0</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">Proper divisors of 4 are 1 and 2.
Sum of these is 3!=8. Proper divisors
of 8 are 1, 2 and 4 with sum 7!=4 and
thus the Otput 0.</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>isAmicable()</strong> which takes 2 Integes A and B as input and returns the answer.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(sqrt(A,B))<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong></span><br>
<span style="font-size:18px">1 &lt;= A,B &lt;= 10<sup>5</sup></span></p>
</div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Yahoo</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;