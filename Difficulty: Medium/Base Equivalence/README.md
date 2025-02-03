<h2><a href="https://www.geeksforgeeks.org/problems/base-equivalence1022/1?page=1&category=Binary%20Search&difficulty=Medium,Hard&status=unsolved,attempted&sortBy=accuracy">Base Equivalence</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given a number (<strong>n</strong>)&nbsp;and no. of digits (<strong>m</strong>)&nbsp;to represent the number, we have to check if we can represent <strong>n&nbsp;</strong>using exactly <strong>m</strong> digits in any <strong>base</strong> from <strong>2</strong> to <strong>32</strong>.</span><br><br><span style="font-size: 18px;"><strong>Example 1:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input</strong>: n = 8, m = 2
<strong>Output:</strong>&nbsp;Yes&nbsp;
<strong>Explanation</strong>: Possible in base 3 as 8 in base 3 is 22.  
</span></pre>
<p><br><span style="font-size: 18px;"><strong>Example 2:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>n = 8, m = 3
<strong>Output:&nbsp;</strong>No
<strong>Explanation</strong>: Not possible in any base.</span> 
</pre>
<p><br><span style="font-size: 18px;"><strong>Your Task:&nbsp;&nbsp;</strong><br>You dont need to read input or print anything. Complete the function <strong>baseEquiv()&nbsp;</strong>which takes n&nbsp;and m&nbsp;as input parameter and returns "Yes" if its possible to represent the number else "No" without quotes..<br><br><strong>Expected Time Complexity:</strong> O(logN).<br><strong>Expected Auxiliary Space:</strong> O(1)<br><br><strong>Constraints:</strong><br>1 &lt;= n&nbsp;&lt;=10<sup>9</sup><br>1 &lt;= m&nbsp;&lt;=32</span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Bit Magic</code>&nbsp;<code>Binary Search</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;