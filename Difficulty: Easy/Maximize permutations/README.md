<h2><a href="https://www.geeksforgeeks.org/problems/maximize-permutations2915/1?page=3&category=Strings&status=unsolved,attempted&sortBy=accuracy">Maximize permutations</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given two numbers <strong>N</strong> and <strong>M.</strong> Construct maximal number by permuting (changing order) the digits of<strong> N</strong>, not exceeding <strong>M</strong>.<strong> </strong><br>
It is allowed to leave <strong>N</strong> as it is. If there's no Permutation of digits of <strong>N</strong> which doesn't exceed <strong>M</strong>, then print -1.<br>
<strong>Note : </strong>Answer shouldn't have any leading zeroes.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong> </span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
<strong>N = </strong>123
<strong>M = </strong>222
<strong>Output:</strong>
213
<strong>Explanation: </strong>There are total 3! permutations 
possible for N = 123, but the only permutation 
that satisfies the given condition is 213.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong> </span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
<strong>N = </strong> 3921
<strong>M = </strong>10000
<strong>Output:</strong>
9321
<strong>Explanation: </strong>Among all the Possible Permutations,
9321 is Maximum.
</span></pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>maxPerm()</strong> which takes two Integers N&nbsp;and M as input parameters&nbsp;and returns the answer.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(|N|<sup>2</sup>)<br>
<strong>Expected Auxiliary Space:</strong> O(|N|)</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ A, B ≤ 10<sup>7</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>Mathematical</code>&nbsp;<code>permutation</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;