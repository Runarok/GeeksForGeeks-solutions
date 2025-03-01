<h2><a href="https://www.geeksforgeeks.org/problems/the-drunkard3445/1?page=12&status=unsolved&sortBy=accuracy">The Drunkard</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">A drunkard is walking down the lanes of FooLand city at midnight and his steps are such that he moves A units forward in one step and B units backward in next step and this goes on. His house is at (N, 0) and his current position is (0, 0). Can you help him in finding out how many steps he would need to take to reach his house?<br>
Return -1 if it is not possible for him to reach his house. Don’t take into account any movement in the y-direction. Note that distance between (i, 0) and (i+1, 0) is 1 unit and NOT 1 step.</span><br>
<br>
<span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>: N = 11, A = 5, B = 2
<strong>Output:</strong>&nbsp;5
<strong>Explanation</strong>: He will be at (5, 0) after step 1, 
at (3, 0) after step 2, at (8, 0) after step 3, 
at (6, 0) after step 4 and at (11, 0) after 
completing step 5. Hence, he would need 5 steps 
to reach his house.</span><span style="font-size:18px">
</span></pre>

<p><br>
<span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>N = 10, A = 3, B = 3
<strong>Output:&nbsp;</strong>-1
<strong>Explanation</strong>: He will be at (3, 0) after step 1, 
at (0, 0) after step 2, at (3, 3) again after 
step 3 and this would go on. So, he would 
never reach his house.</span><span style="font-size:18px"> 
</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:&nbsp;&nbsp;</strong><br>
You dont need to read input or print anything. Complete the function <strong>numOfSteps()&nbsp;</strong>which takes N, A&nbsp;and B&nbsp;as input parameter and returns the&nbsp;number of steps he would need to take to reach his house.</span><br>
<br>
<span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(1)<br>
<strong>Expected Auxiliary Space:</strong> O(1)<br>
<br>
<strong>Constraints:</strong><br>
1 &lt;= N &lt;= 10<sup>6</sup><br>
1 &lt;= A,B &lt;= 10<sup>5</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;