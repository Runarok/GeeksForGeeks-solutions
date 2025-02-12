<h2><a href="https://www.geeksforgeeks.org/problems/repated-sum-and-then-multiply1046/1?page=30&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">Repeated Sum and then Multiply</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">You are given a natural number. Repeatedly sum its digits until the smallest possible two-digit number remains. Then multiply the digits of the remaining two-digit number and return it.</span><br>
<br>
<span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>: n = 19
<strong>Output:</strong>&nbsp;0&nbsp;
<strong>Explanation</strong>: 1+9 = 1+0 = 1 and 1 came from 10 
thus 1*0 = 0.</span>
</pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>n = 129
<strong>Output:&nbsp;</strong>2
<strong>Explanation</strong>: 1+2+9 = 1+2 = 3 and 3 came from 12
thus 1*2 = 2.
</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:&nbsp;&nbsp;</strong><br>
You don't need to read input or print anything. Complete the function <strong>repeatedSumMul()&nbsp;</strong>which takes n&nbsp;as the input parameter and returns the product of the digits of the value before the single digit.<br>
<br>
<strong>Expected Time Complexity:</strong> O(logn)<br>
<strong>Expected Auxiliary Space:</strong> O(1)<br>
<br>
<strong>Constraints:</strong><br>
1&lt;= N&nbsp;&lt;=2<sup>32</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Misc</code>&nbsp;