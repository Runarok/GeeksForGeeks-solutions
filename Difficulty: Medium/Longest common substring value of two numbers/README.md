<h2><a href="https://www.geeksforgeeks.org/problems/longest-common-substring-value-of-two-numbers3806/1?page=18&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Longest common substring value of two numbers</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;"><span style="font-size: 18px;">Given two integers n and m. Find the <strong>longest common contiguous subset</strong> in binary representation of both the numbers and print its decimal value.</span><br><span style="font-size: 18px;"><strong>Note</strong>: If there's a tie in the length of the longest common contiguous subset, return the one with the <strong>highest decimal value</strong> among them.</span><br></span></p>
<p><span style="font-size: 18px;"><strong>Example 1:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: n</strong> = 10, m = 11
<strong>Output:</strong> 5
<strong>Explanation</strong>: 10 in Binary is "1010" and
11 in Binary is "1011". The longest common
contiguous subset is "101" which has a
decimal value of 5.</span>
</pre>
<p><span style="font-size: 18px;"><strong>Example 2:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input</strong>: n = 8, m = 16
<strong>Output:</strong> 8
<strong>Explanation</strong>: 8 in Binary is "1000" and
16 in Binary is "10000". The longest common
contiguous subset is "1000" which has a
decimal value of 8.
</span></pre>
<p><br><span style="font-size: 18px;"><strong>Your Task:</strong><br>You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>longestCommon()&nbsp;</strong>which takes two integers n and m as inputs and returns the Decimal representation of the longest common contiguous subset in the Binary representation of n and m.<br><br></span></p>
<p><br><span style="font-size: 18px;"><strong>Expected Time Complexity:&nbsp;</strong>O((log(max (n, m))<sup>3</sup>).<br><strong>Expected Auxiliary Space:&nbsp;</strong>O((log(max (n, m))<sup>2</sup>).</span></p>
<p><br><span style="font-size: 18px;"><strong>Constraints:</strong><br>1&lt;=n,m&lt;=10<sup>10</sup></span></p>
<p>&nbsp;</p></div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Citrix</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>Dynamic Programming</code>&nbsp;<code>Numbers</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;