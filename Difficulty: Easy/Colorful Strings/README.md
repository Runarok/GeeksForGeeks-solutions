<h2><a href="https://www.geeksforgeeks.org/problems/geek-and-its-colored-strings1355/1?page=2&category=Strings&status=unsolved,attempted&sortBy=accuracy">Colorful Strings</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Find the count of all possible strings of size n.Each character of the string is either ‘R’, ‘B’ or ‘G’. In the final string there needs to be at least r number of ‘R’, at least b number of ‘B’ and at least g number of ‘G’ (such that r + g + b &lt;= n).&nbsp;</span><br>
<br>
<span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>: n = 4, r = 1, g = 1, b = 1
<strong>Output:</strong>&nbsp;36&nbsp;
<strong>Explanation</strong>: No. of 'R' &gt;= 1, 
No. of ‘G’ &gt;= 1, No. of ‘B’ &gt;= 1 
and (No. of ‘R’) + (No. of ‘B’) 
+ (No. of ‘G’) = n then 
following cases are possible: 
1. RBGR and its 12 permutation 
2. RBGB and its 12 permutation 
3. RBGG and its 12 permutation 
Hence answer is 36.
</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>n = 4, r = 2, g = 0, b = 1
<strong>Output:&nbsp;</strong>22
<strong>Explanation</strong>: No. of 'R' &gt;= 2,
No. of ‘G’ &gt;= 0, No. of ‘B’ &gt;= 1
and (No. of ‘R’) + (No. of ‘B’)
+ (No. of ‘G’) &lt;= n then 
following cases are possible:
1. RRBR and its 4 permutation
2. RRBG and its 12 permutation
3. RRBB and its 6 permutation
Hence answer is 22.</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:&nbsp;&nbsp;</strong><br>
You dont need to read input or print anything. Complete the function <strong>possibleStrings()&nbsp;</strong>which takes n, r, g, b&nbsp;as input parameter and returns the count&nbsp;of&nbsp;number of all possible&nbsp;strings.</span><span style="font-size:18px">.<br>
<br>
<strong>Expected Time Complexity:</strong> O(n<sup>2</sup>)<br>
<strong>Expected Auxiliary Space:</strong> O(n)<br>
<br>
<strong>Constraints:</strong><br>
1&lt;= n&nbsp;&lt;=20<br>
1&lt;= r+b+g&nbsp;&lt;=n</span></p>
</div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Directi</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>permutation</code>&nbsp;<code>Data Structures</code>&nbsp;