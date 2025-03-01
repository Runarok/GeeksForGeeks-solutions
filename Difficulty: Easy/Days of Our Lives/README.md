<h2><a href="https://www.geeksforgeeks.org/problems/days-of-our-lives3300/1?page=11&status=unsolved&sortBy=accuracy">Days of Our Lives</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a month with arbitrary number of days, N, and an integer&nbsp;K representing the day with which it starts. ie- 1 for Monday, 2 for Tuesday and so on.&nbsp;&nbsp;Find the number of times each day&nbsp;(Monday, Tuesday, ..., Sunday) appears in the month.&nbsp;</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
<strong>N = </strong>31 , <strong>K = </strong>1
<strong>Output:</strong>
5 5 5 4 4 4 4 
<strong>Explanation: </strong>The month starts from Monday.
There will be 4 days of each day
(Sunday , Monday , etc) upto 28th of the
Month. Then, The successive 3 days will
have a extra day each. So, Monday, Tuesday
and Wednesday will have 5 days while the
others will have 4 days each.</span></pre>

<p><br>
<span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
<strong>N = </strong>28, <strong>K = </strong>5
<strong>Output:</strong>
5 5 5 4 4 4 4 
<strong>Explanation: </strong>Each day of the month will
have 4 days each and thus the Output.</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>daysOfWeeks()</strong> which takes Integers N&nbsp; and K as input and return a&nbsp;list of 7 integers indicating number of days in each day of the week.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(1)</span><br>
<span style="font-size:18px"><strong>Expected Auxiliary Space:</strong> O(1)</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= N &lt;= 10<sup>5</sup></span><br>
<span style="font-size:18px">1 &lt;= K &lt;= 7</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Algorithms</code>&nbsp;