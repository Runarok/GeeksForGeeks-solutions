<h2><a href="https://www.geeksforgeeks.org/problems/count-binary-strings1944/1?page=12&status=unsolved&sortBy=accuracy">Count binary strings</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given two integers n and k, count the number of binary strings of length n where adjacent 1 appear k times. Since the answer can be huge, print it modulo 10<sup>9</sup>+7.</span></p>

<p><br>
<span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
n = 3 , k = 2
<strong>Output:</strong> 1
<strong>Explanation: </strong>Possible string is "111".
</span></pre>

<p><br>
<span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>:
n = 5 , k = 2
<strong>Output:</strong> 6
<strong>Explanation</strong>: Possible strings are:
"00111" , "10111" , "01110"
"11100" , "11101" , "11011".</span>
</pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>countStrings()&nbsp;</strong>which accepts integers&nbsp;<strong>n</strong> and <strong>k </strong>as input parameter and returns the number of binary strings that satisfy the given condition.</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(n*k).<br>
<strong>Expected Auxiliary Space:&nbsp;</strong>O(n*k).&nbsp;</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= n, k &lt;= 10<sup>3</sup></span></p>

<p>&nbsp;</p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Dynamic Programming</code>&nbsp;<code>Algorithms</code>&nbsp;