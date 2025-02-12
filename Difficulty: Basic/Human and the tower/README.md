<h2><a href="https://www.geeksforgeeks.org/problems/human-and-the-tower5254/1?page=29&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">Human and the tower</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">You are standing at a distance <strong>d</strong> from a tower of height<strong> h</strong>. Given either the distance to the tower&nbsp;or height of the tower&nbsp;and the angle of elevation to the top of the tower from the point where you are standing (in degrees),&nbsp;find the rounded down&nbsp;value&nbsp;of the missing variable, <em>i.e</em> if the height is given, you need to find the distance or vice-versa.<br>
Character ' d ' is given if distance is given otherwise character ' h ' is given in input.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
Type = 'd'
Value = 12
Angle of elevation = 67
<strong>Output:</strong>
28
<strong>Explanation:</strong>
The height is 28 (rounded down) if the 
distance is 12 and the angle of elevation 
is 67 i.e Tan(67<sup>o</sup>) <strong>≈ </strong>28 / 12.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
Type = 'h'
Value = 100
Angle of elevation = 66
<strong>Output:</strong>
44
<strong>Explanation:</strong>
The distance is 44 (rounded down) when the
height is 100 and the angle of elevation 
is 66 i.e Tan(66<sup>o</sup>) <strong>≈ </strong>100 / 44.</span></pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>findHeightOrDistance()</strong> which takes a character called type and two numbers value and angle as input parameters and returns the value of the missing variable (rounded down).&nbsp;</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong>O(1)<br>
<strong>Expected Auxillary Space:</strong>O(1)</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
Type = 'h' or&nbsp;'d'<br>
1 ≤ value(height or distance) ≤&nbsp;1000<br>
4 ≤&nbsp;angle ≤&nbsp;89</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;