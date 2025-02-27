<h2><a href="https://www.geeksforgeeks.org/problems/left-out-candies5652/1?page=2&company=Amazon&status=unsolved,attempted&sortBy=accuracy">Left out candies</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given <strong>n</strong> students sitting in a circle, distribute <strong>m</strong> candies to these students. The <strong>i<sub>th</sub></strong>&nbsp;student can take only&nbsp;<strong>i</strong> candies. If <strong>i<sub>th</sub></strong> student does not get the required amount of&nbsp;candies&nbsp;he will not take it. Distribute the candies starting from the 1st student and moving along the circle of students till you reach&nbsp;a student you can not give candies to. You need to find the amount of&nbsp;candies left.</span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>n = 4, m = 11
<strong>Output:</strong> 0
<strong>Explanation:</strong> You first give 1 candy to 1st student, 2 to 2nd , 3 to 3rd , 4 to 4th then again 1 to first. All candies are finished with none left out.
</span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>n = 4, m = 12
<strong>Output:</strong> 1
<strong>Explanation:</strong>&nbsp;You are left with only one candy.
</span></pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(logn)<br><strong>Expected Auxiliary Space:</strong>&nbsp;O(1)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ n ≤ 10<sup>6</sup><br>1 ≤ m ≤ 10<sup>6</sup></span></p></div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Amazon</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Data Structures</code>&nbsp;