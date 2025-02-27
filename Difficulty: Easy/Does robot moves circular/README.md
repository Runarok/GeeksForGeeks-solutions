<h2><a href="https://www.geeksforgeeks.org/problems/does-robot-moves-circular0414/1?page=2&company=Amazon&status=unsolved,attempted&sortBy=accuracy">Does robot moves circular</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a sequence of moves for a robot.&nbsp;Check if the sequence is circular&nbsp;or not. </span></p>

<p><span style="font-size:18px">A sequence of moves is circular if the first and last positions of the robot are the same. A move can be one of the following :<br>
&nbsp; &nbsp; G - Go one unit<br>
&nbsp;&nbsp; &nbsp;L - Turn left<br>
&nbsp;&nbsp; &nbsp;R - Turn right</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>path = "GLGLGLG"
<strong>Output:</strong> "Circular"
<strong>Explanation</strong>: If we start form 
(0,0) in a plane then we will 
back to (0,0) by the end of the 
sequence.
</span></pre>

<p><span style="font-size:18px">â€‹<strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>: path = "GGGGL"
<strong>Output:</strong> "Not Circular"
<strong>Explanation</strong>: We can't return to 
same place at the end of the path.</span></pre>

<p><span style="font-size:18px"><strong>Your Task:&nbsp;&nbsp;</strong><br>
You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>isCircular</strong><strong>()</strong>&nbsp;which takes the string&nbsp;<strong>path&nbsp;</strong>as input&nbsp;and returns&nbsp;<strong>"Circular"</strong> if the path is circular else returns&nbsp;<strong>"Not Circular"</strong>.<br>
<br>
<strong>Expected Time Complexity:</strong>&nbsp;O(|S|)<br>
<strong>Expected Auxiliary Space:</strong>&nbsp;O(1)<br>
<br>
<strong>Constraints:</strong><br>
1 ≤ |S| ≤&nbsp;10<sup>5</sup></span></p>
</div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Amazon</code>&nbsp;<code>Visa</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>Data Structures</code>&nbsp;