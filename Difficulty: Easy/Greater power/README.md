<h2><a href="https://www.geeksforgeeks.org/problems/greater-power4651/1?page=15&status=unsolved&sortBy=accuracy">Greater power</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given four integers <strong>a, b, m, n </strong>. Find whether&nbsp; pow(a,b) is greater than pow(m,n) or not.&nbsp;Where pow(x,y) denotes x raised to the power y. Output 1 if pow(a,b) is greater, output 0 if pow(m,n) is greater otherwise output -1 if both are equal. </span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>a =</strong> 2 , <strong>b = </strong>2 , <strong>m = </strong>3 , <strong>n = </strong>2</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">0</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">2<sup>2</sup> = 4, and 3<sup>2</sup> = 9. 9&gt;4. So,
the Output 0.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>a =</strong> 1 , <strong>b = </strong>23 , <strong>m = </strong>1 , <strong>n = </strong>989</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">-1</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">Both 1<sup>23</sup> and 1<sup>989 </sup>= 1. So,
the Output is -1. </span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>greaterPower()</strong> which takes 4 Integers a,b,m and n as input and returns the answer.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(max(log(a),log(m))<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong></span><br>
<span style="font-size:18px">0 &lt;= b,n &lt;= 10<sup>18</sup><br>
1 &lt;= a,m &lt;= 10<sup>18</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;