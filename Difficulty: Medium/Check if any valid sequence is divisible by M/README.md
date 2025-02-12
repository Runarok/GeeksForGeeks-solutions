<h2><a href="https://www.geeksforgeeks.org/problems/check-if-any-valid-sequence-is-divisible-by-m1114/1?page=18&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Check if any valid sequence is divisible by M</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an array of <strong>n integers, arr,</strong> and an integer <strong>m</strong>, using ‘+’ and ‘-‘ between the elements check if there is a way to form a sequence of numbers that evaluates to a number divisible by m.</span><br>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Example 1:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input :</strong> arr[ ] = {1, 2, 3, 4, 6} and m= 4
<strong>Output :</strong> 1
<strong>Explanation:</strong>
There is a valid sequence i. e., 
(1 - 2 + 3 + 4 + 6), which evaluates to 12 
that is divisible by 4.</span></pre>
<p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; font-size: medium; white-space: normal;"><span style="font-size: 18px;"><strong>Example 1:</strong></span></p>
<pre><strong>Input :</strong> arr[ ] = {1, 3, 9} and m= 2<br><strong>Output :</strong> 0
<strong>Explanation:</strong>
No possible sequence can evaluate a number divisible by 2.</pre>
<p><span style="font-size: 18px;"><strong>Your Task:</strong><br>This is a function problem. The input is already taken care of by the driver code. You only need to complete the function <strong>validSequence()</strong> that takes an array <strong>(arr)</strong>, sizeOfArray <strong>(n)</strong>, an integer <strong>m</strong>&nbsp;and return the <strong>true&nbsp;</strong>if there is a way to form a sequence of numbers which evaluate to a number divisible by M&nbsp;else return <strong>false</strong>. The driver code takes care of the printing.</span></p>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(n*m).<br><strong>Expected Auxiliary Space:</strong> O(n*m).</span><br>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ n &lt; 1000<br>1 ≤ m &lt;1000<br>1&nbsp;</span><span style="font-size: 18px;">≤<strong>arr<sub>i&nbsp;</sub></strong></span><span style="font-size: 18px;">≤ 10<sup>5</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Dynamic Programming</code>&nbsp;<code>Modular Arithmetic</code>&nbsp;<code>Data Structures</code>&nbsp;