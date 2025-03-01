<h2><a href="https://www.geeksforgeeks.org/problems/high-effort-vs-low-effort0213/1?page=3&status=unsolved&sortBy=accuracy">High Effort vs Low Effort</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">You are given n days and for each day (d<sub>i</sub>) you can&nbsp;select one of the following options:</span></p>

<ol>
	<li><span style="font-size:18px">perform&nbsp;</span><span style="font-size:18px">no task&nbsp;</span></li>
	<li><span style="font-size:18px">perform a high effort task&nbsp;(h<sub>i</sub>) only if its the first day or if you chose no-task on the previous day</span></li>
	<li><span style="font-size:18px">perform&nbsp;a low effort task&nbsp;(l<sub>i</sub>)</span></li>
</ol>

<p><span style="font-size:18px">Write a program to find the maximum amount of tasks you can perform within these n days.&nbsp;</span></p>

<p><br>
<span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
n = 3
hi[] = {2,8,1}
li[] = {1,2,1}
<strong>Output:</strong> 9
<strong>Explanation</strong>:
Options on 1st day: hi[0]=2, li[0]=1 or no-task
Select no-task.
Options on 2nd day: hi[1]=8, li[2]=1 or no-task
Select high-effort task as no-task was selected 
the previous day.  
Options on 3rd day: hi[2]=1, li[2]=1 or no-task
Select low-effort task as selecting high-effort 
task is only possible if you chose no-task on 
previous day.</span>
</pre>

<p><br>
<span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>:
n = 5
hi[] = {3,6,8,7,6}
li[] = {1,5,4,5,3}
<strong>Output:</strong> 20
<strong>Explanation</strong>: Perform high-effort task on first 
day and low-effort task on all remaining days.
</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>maxAmt()&nbsp;</strong>which accepts an integer <strong>n</strong> and two arrays li[] and hi[]&nbsp;as input parameter and returns the maximum amount of tasks you can perform within these n days.</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(n)<br>
<strong>Expected Auxiliary Space:&nbsp;</strong>O(n)</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= n&nbsp;&lt;= 10<sup>6</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Dynamic Programming</code>&nbsp;<code>Algorithms</code>&nbsp;