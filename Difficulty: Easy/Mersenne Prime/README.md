<h2><a href="https://www.geeksforgeeks.org/problems/mersenne-prime1438/1?page=7&status=unsolved&sortBy=accuracy">Mersenne Prime</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Mersenne Prime is a prime number that is one less than a power of two. In other words, any prime is Mersenne Prime if it is of the form 2<sup>k</sup>-1 where k is an integer greater than or equal to 2. First few Mersenne Primes are 3, 7, 31 and 127.<br>
The task is to find&nbsp;all Mersenne Primes smaller than equal to&nbsp;an input positive integer n.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>n = 10
<strong>Output: </strong>3 7
<strong>Explanation:</strong>3 and 7 are only prime numbers
which are less than equal to 10 and in the
form of 2<sup>k</sup>&nbsp;- 1. </span>
</pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>n = 100
<strong>Output: </strong>3 7 31
<strong>Explanation: </strong>3, 7 and 31 are only prime
numbers which are less than equal to 100
and in the form of 2<sup>k</sup>&nbsp;- 1.</span>
</pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read or print anything. Your task is to complete the function <strong>AllMersennePrimeNo()</strong>&nbsp;which takes n as input parameter and returns a list of all Mersenne Primes less than or equal to n in sorted order.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(n * log(log(n))<br>
<strong>Expected Space Complexity:&nbsp;</strong>O(n)<br>
<br>
<strong>Constraints:&nbsp;</strong><br>
1 &lt;= n &lt;= 100000&nbsp;</span><br>
&nbsp;</p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;