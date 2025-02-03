<h2><a href="https://www.geeksforgeeks.org/problems/evaluation-of-postfix-expression1735/1?page=1&category=Stack&difficulty=Medium,Hard&status=unsolved,attempted&sortBy=accuracy">Evaluation of Postfix Expression</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p>You are given an array of strings <strong>arr</strong> that represents a valid arithmetic expression written in <strong>Reverse Polish Notation (Postfix Notation)</strong>. Your task is to evaluate the expression and return an integer representing its value.</p>
<p><strong>Key Details</strong>:</p>
<ol>
<li>The valid operators are <strong>'+'</strong>, <strong>'-'</strong>, <strong>'*'</strong>, and <strong>'/'</strong>.</li>
<li>Each operand is guaranteed to be a valid integer or another expression.</li>
<li>The division operation between two integers always rounds the result towards zero, discarding any fractional part.</li>
<li>No division by zero will occur in the input.</li>
<li>The input is a valid arithmetic expression in Reverse Polish Notation.</li>
<li>The result of the expression and all intermediate calculations will fit in a 32-bit signed integer.</li>
</ol>
<p><strong>Examples:</strong></p>
<pre><strong>Input: </strong>arr = ["5", "3", "4", "*", "+"]<br><strong>Output:</strong> 17<br><strong>Explanation:</strong> (5 + (3 * 4)) = 17</pre>
<pre><strong>Input:</strong> arr = ["-8", "3", "/"]<br><strong>Output:</strong> -2<br><strong>Explanation:</strong> (-8 / 3) = -2. Division rounds towards zero, so -8 divided by 3 gives -2 (not -2.666...).</pre>
<p><strong>Constraints:</strong></p>
<ul>
<li>1 &lt;= arr.size() &lt;= 10<sup>5</sup></li>
<li>arr[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-10<sup>4</sup>, 10<sup>4</sup>]</li>
</ul></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Stack</code>&nbsp;<code>Data Structures</code>&nbsp;