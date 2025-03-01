<h2><a href="https://www.geeksforgeeks.org/problems/playing-with-mobile-numbers0732/1?page=11&status=unsolved&sortBy=accuracy">Playing with mobile numbers</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a&nbsp;number in form of a string s. The task is to find&nbsp;whether the number is valid indian mobile number or not.<br>
<strong>Rules for valid&nbsp;</strong>:-<strong>indian&nbsp;mobile&nbsp;number</strong></span></p>

<ol>
	<li><span style="font-size:18px">The number should contain 10 or 11 or 12 digits.</span></li>
	<li><span style="font-size:18px">If it contains 10 digits, then&nbsp;first&nbsp;&nbsp;digit&nbsp;should be 7 or 8 or 9.</span></li>
	<li><span style="font-size:18px">If it contains 11 digits, then&nbsp;first&nbsp;&nbsp;digit&nbsp;should be 0 and second rule&nbsp;follwed.</span></li>
	<li><span style="font-size:18px">If it contains 12 digits, then first two digits should be 91 and second rule&nbsp;followed&nbsp;</span></li>
</ol>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>s = "912345678999"
<strong>Output: </strong>0</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>s = "123456789"
<strong>Output: </strong>0</span>
</pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read or print anything. Your task is to complete the function <strong>is_valid() </strong>which takes s as input parameter and returns 1 if it is valid&nbsp;indian mobile number otherwise returns 0.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(1)<br>
<strong>Expected Space Complexity:&nbsp;</strong>O(1)<br>
<br>
<strong>Constraints:</strong><br>
1 &lt;= |s| &lt;= 13</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Quantifiers</code>&nbsp;<code>Regular Expression</code>&nbsp;