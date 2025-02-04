<h2><a href="https://www.geeksforgeeks.org/problems/calculate-the-average-waiting-time-and-turnaround-time-using-shortest-job-first/1?page=3&difficulty=Medium&status=unsolved,attempted&sprint=94ade6723438d94ecf0c00c3937dad55&sortBy=accuracy">Calculate the average Waiting Time and Turnaround Time using Shortest Job First</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given <strong>N</strong>&nbsp;processes with their <strong>arrivalTime&nbsp;</strong>and&nbsp;<strong>burstTime.&nbsp;</strong>The task is to return&nbsp;the average&nbsp;<strong>waitingTime&nbsp;</strong>and&nbsp;<strong>Turnaround&nbsp;</strong>time for the given processes.<br>
<br>
Shortest job first (SJF) or shortest job next, is a scheduling policy that selects the waiting process with the smallest execution time to execute next. It&nbsp;is a non-preemptive algorithm and no process is interrupted until it is completed, and after that processor switches to another process).</span></p>

<ol>
	<li><span style="font-size:18px">Completion Time: Time at which process completes its execution.</span></li>
	<li><span style="font-size:18px">Turn Around Time: Time Difference between completion time and arrival time. Turn Around Time = Completion Time -&nbsp;Arrival Time</span></li>
	<li><span style="font-size:18px">Waiting Time(W.T): Time Difference between turn around time and burst time.&nbsp;<br>
	Waiting Time = Turn Around Time -&nbsp; Burst Time</span></li>
</ol>

<p><span style="font-size:18px">&nbsp;</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
arrivalTime[] = {0, 0, 0}
burstTime[] = {4, 2, 3}
<strong>Output: </strong>{2.33, 5.33}
<strong>Explanation:</strong> 
Since Process 2 has the smallest burst time, it gets executed first.
Hence, Completetion time = 2
Next Process 3, has burst tme of 3, hence it gets executed. 
Completion time = 2 + 3 = 5.
Process 1, has burst tme of 4, hence it gets executed.
Completion time = 5 + 4 = 9.
Turnaround time = Completion Time - Arrival time
So, 
Process 1, Turnaround time = 9 - 0 = 9
Process 2, Turnaround time = 2 - 0 = 2
Process 3, Turnaround time = 5 - 0 = 5

Waiting time = Turnaround time - Burst Time
So,
Process 1, Waiting time = 9 - 4 = 5
Process 2, Waiting time = 2 - 2 = 0
Process 3, Waiting time = 5 - 3 = 2

Average waiting time = (5 + 0 + 2)/3 = 2.33
Average t tiurnaround time = (9 + 2 + 5)/3 = 5.33
</span></pre>

<table border="1" cellpadding="1" cellspacing="1" style="width:500px">
	<tbody>
		<tr>
			<td>
			<pre><span style="font-size:18px">Process Id</span></pre>
			</td>
			<td>
			<pre><span style="font-size:18px">Arrival Time</span></pre>
			</td>
			<td>
			<pre><span style="font-size:18px">Burst Time</span></pre>
			</td>
			<td>
			<pre><span style="font-size:18px">Completion Time</span></pre>
			</td>
			<td>
			<pre><span style="font-size:18px">Waiting Time</span></pre>
			</td>
			<td>
			<pre><span style="font-size:18px">Turnaround time</span></pre>
			</td>
		</tr>
		<tr>
			<td>
			<pre><span style="font-size:18px">       1</span></pre>
			</td>
			<td>
			<pre><span style="font-size:18px">       0</span></pre>
			</td>
			<td>
			<pre><span style="font-size:18px">      4</span></pre>
			</td>
			<td>
			<pre><span style="font-size:18px">          9</span></pre>
			</td>
			<td>
			<pre><span style="font-size:18px">          5</span></pre>
			</td>
			<td>
			<pre><span style="font-size:18px">          9</span></pre>
			</td>
		</tr>
		<tr>
			<td>
			<pre><span style="font-size:18px">       2</span></pre>
			</td>
			<td>
			<pre><span style="font-size:18px">       0</span></pre>
			</td>
			<td>
			<pre><span style="font-size:18px">      2</span></pre>
			</td>
			<td>
			<pre><span style="font-size:18px">          2</span></pre>
			</td>
			<td>
			<pre><span style="font-size:18px">          0</span></pre>
			</td>
			<td>
			<pre><span style="font-size:18px">          2</span></pre>
			</td>
		</tr>
		<tr>
			<td>
			<pre><span style="font-size:18px">       3</span></pre>
			</td>
			<td>
			<pre><span style="font-size:18px">       0</span></pre>
			</td>
			<td>
			<pre><span style="font-size:18px">      3</span></pre>
			</td>
			<td>
			<pre><span style="font-size:18px">          5</span></pre>
			</td>
			<td>
			<pre><span style="font-size:18px">          2</span></pre>
			</td>
			<td>
			<pre><span style="font-size:18px">          5</span></pre>
			</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:&nbsp;&nbsp;</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>averageTimes</strong><strong>()</strong>&nbsp;which takes two arrays array of size <strong>N</strong>&nbsp;and returns a list containing two doubles.<br>
<br>
<strong>Note : </strong>Return double up rounded up to two decimal places..</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(N<sup>2</sup>)<br>
<strong>Expected Auxiliary Space:</strong> O(N)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= N &lt;= 2 * 10<sup>4</sup><br>
0 &lt;= arrivalTime[i]&nbsp;&lt;= 200<br>
0 &lt;= burstTime&lt;= 100</span></p>
</div>