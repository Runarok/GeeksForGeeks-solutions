<h2><a href="https://www.geeksforgeeks.org/problems/maximum-collatz-sequence-length5849/1?page=12&status=unsolved&sortBy=accuracy">Maximum Collatz sequence length</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Starting with any positive integer&nbsp;<strong>N</strong>, we define the Collatz sequence corresponding to N as the numbers formed by the following operations:<br>
If&nbsp;<var>N&nbsp;</var>is even,<var>&nbsp;N</var>→&nbsp;<var>N</var>/2<br>
if&nbsp;<var>N&nbsp;</var>is odd, &nbsp;&nbsp;<var>N</var>→ 3<var>N</var>+ 1<br>
It is conjectured but not yet proven that no matter which positive integer we start with; we always end up with 1.<br>
For example, 10 → 5&nbsp; → 16&nbsp; → 8&nbsp; → 4&nbsp; → 2&nbsp; → 1. You have to give the maximum collatz sequence length among all the numbers from 1 to N(both included).</span></p>

<p><br>
<span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong> N = 1
<strong>Output:</strong> 1
<strong>Explaination:</strong> Here N can have only one 
value 1.</span></pre>

<p><br>
<span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong> N = 3
<strong>Output:</strong> 8
<strong>Explaination:</strong> For N= 3 we need to check 
sequence length when sequence starts with 
1, 2, and 3.
when sequence starts with 1, it's : 1 
length = 1
when sequence starts with 2, it's : 2-&gt;1, 
length = 2
when sequence starts with 3, it's : 
3-&gt;10-&gt;5-&gt;16-&gt;8-&gt;4-&gt;2-&gt;1, length = 8.
</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
You do not need to read input or print anything. Your task is to complete the function&nbsp;<strong>collatzLength()</strong>which takes N as input parameter and returns the maximum collatz sequence length.</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity:</strong>O(N)<br>
<strong>Expected Auxiliary Space:&nbsp;</strong>O(N)</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt; N &lt; 10<sup>6</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Dynamic Programming</code>&nbsp;<code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;