<h2><a href="https://www.geeksforgeeks.org/problems/distance-and-displacement4145/1?page=1&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">Distance and Displacement</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">You are given two arrays of length <strong>n</strong>. An array <strong>a</strong> consisting of integers and another array <strong>d</strong>&nbsp;consisting of directions 'N', 'S', 'E', and 'W'&nbsp;denoting North, South, East, and West respectively.For every 'i' you move a[i] distance in d[i]th direction. You have to give the ceil of total distance covered through all the movements and then back to the starting&nbsp; point. From the end of the journey you come to the starting point using the shortest distance.</span></p>

<p><strong><span style="font-size:18px">Example 1:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong> n = 3
a = {1, 3, 3}
d = {N, E, S}
<strong>Output:</strong> 11
<strong>Explaination:</strong> The total distance covered is 
ceil(1 + 3 + 3 + 3.6056) = 11.</span></pre>

<p><strong><span style="font-size:18px">Example 2:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong> n = 4
a = {10, 10, 10, 10}
d = {N, E, S, W}
<strong>Output:</strong> 40
<strong>Explaination:</strong> The total distance covered is 
ceil(10 + 10 + 10 + 10 + 0) = 40.</span></pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You do not need to read input or print anything. Your task is to complete the function <strong>distance()</strong> which takes n, a, and d as input parameters and returns the ceil of total distance covered.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(n)<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ n ≤ 1000<br>
1 ≤ a[i] ≤ 1000</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;