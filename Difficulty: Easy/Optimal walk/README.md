<h2><a href="https://www.geeksforgeeks.org/problems/optimal-walk3752/1?page=12&status=unsolved&sortBy=accuracy">Optimal walk</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a point on x axis, (<strong>N</strong>,0),&nbsp;you are standing at origin and you can only move on x-axis. Lets say you are at (x,0), at each step you can either move one step forward ie (x+1,0) or one step backwards (x-1,0) or make a jump to double your current position&nbsp;(2*x,0).&nbsp;One step movement costs you <strong>A</strong> while a jump costs you <strong>B</strong>. If your initial position is (0,0) , find the minimum cost to reach (N,0) .</span></p>

<p><br>
<strong><span style="font-size:18px">Example 1:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong> N = 7, A = 1, B = 100
<strong>Output:</strong> 7
<strong>Explaination:</strong> Move forward to (N, 0) one 
unit at each step.</span></pre>

<p><br>
<strong><span style="font-size:18px">Example 2:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong> N = 8, A = 2, B = 4
<strong>Output:</strong> 12
<strong>Explaination:</strong> The optimal movement is to 
1, 2, 3, 4, 8.</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
You do not need to read input or print anything. Your task is to complete the function <strong>optimalWalk()</strong> which takes N, A and B as input parameters and returns the minimum cost to go to (N, 0) from (0, 0).</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(N)<br>
<strong>Expected Auxiliary Space:</strong> O(N)</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ N ≤ 10<sup>5</sup><br>
1 ≤ A, B ≤ 10<sup>9</sup>&nbsp; &nbsp;</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Dynamic Programming</code>&nbsp;<code>Algorithms</code>&nbsp;