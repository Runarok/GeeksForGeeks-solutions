<h2><a href="https://www.geeksforgeeks.org/problems/helping-meesa0000/1?page=15&status=unsolved&sortBy=accuracy">Find the Number</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">A Lucky number is a number&nbsp;which has only the&nbsp;digits&nbsp;4&nbsp;and&nbsp;7. There's a special function <strong>F(n)</strong> for a positive integer&nbsp;<strong>n</strong> that returns&nbsp;all good digits of number&nbsp;<strong>n</strong>&nbsp;from the left to the right. For example, the output for number&nbsp;147 is number&nbsp;47. There are two numbers :</span></p>

<ul>
	<li><span style="font-size:18px">An integer&nbsp;<strong><em>a</em></strong>&nbsp;</span></li>
	<li><span style="font-size:18px">A Lucky number&nbsp;<strong><em>b</em></strong>.</span></li>
</ul>

<p><span style="font-size:18px">Find the minimum number&nbsp;<strong><em>c</em>&nbsp;</strong>(<em>c</em> &gt; <em>a</em>)&nbsp;such that <strong>F(c) = b</strong>.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>a = </strong>1, <strong>b = </strong>7</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">7</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">The minimum number x greater than 1 such that</span><span style="font-size:18px"><strong>
</strong>F(x) = 7, is 7 and so it is the answer.</span> </pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>a = </strong>5, <strong>b = </strong>4</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">14</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">The minimum number x greater than 5 such that</span><span style="font-size:18px"><strong>
</strong>F(x) = 4, is 14 and so it is the answer.</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>findTheNum()</strong> which takes 2 Integera a, and b as input and returns the minimum number x greater than a such that F(x) = b.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(b)<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong></span><br>
<span style="font-size:18px">1 &lt;= a,b &lt;= 10<sup>5</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;