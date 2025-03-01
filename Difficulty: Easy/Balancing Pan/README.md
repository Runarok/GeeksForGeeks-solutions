<h2><a href="https://www.geeksforgeeks.org/problems/balancing-pan5038/1?page=14&status=unsolved&sortBy=accuracy">Balancing Pan</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a simple weighing scale with two pans, we are given a weight T and some other weights which are the powers of a specific number a, our goal is to balance these pans using the given weights. More formally we need to satisfy this equation,&nbsp;<strong>T + (some power of a) = (some other powers of a).</strong><br>
Remember that we are given exactly one weight corresponding to one power.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
a = 4
T = 11
<strong>Output:</strong>
YES
<strong>Explanation:</strong>
The scale can be balanced as,
11 + 4 + 1 = 16.</span></pre>

<p><span style="font-size:18px">â€‹</span></p>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
a = 3
T = 5
<strong>Output:</strong>
YES
<strong>Explanation:</strong>
The scale can be balanced as,
5 + 3 = 8.</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong></span></p>

<p><span style="font-size:18px">You don't need to read input or print anything. Your task is to complete the function isBalanced() which takes two integers a&nbsp;and T&nbsp;and returns "YES" if we can balance the pans, else "NO"(Without Quotes).</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(N)<br>
<strong>Expected Auxiliary Space:</strong> O(N)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints :</strong><br>
1 ≤ a ≤ T ≤ 1000</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;