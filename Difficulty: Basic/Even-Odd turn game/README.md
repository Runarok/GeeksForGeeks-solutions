<h2><a href="https://www.geeksforgeeks.org/problems/even-odd-turn-game1832/1?page=30&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">Even-Odd turn game</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given three positive integers X, Y and P. Here P denotes the number of turns. Whenever the turn is odd X is multiplied by 2 and in every even turn Y is multiplied by 2.Find the value of Max(X, Y) ÷ Min(X, Y) after the completion of&nbsp;P turns.</span></p>

<p><strong><span style="font-size:18px">Example 1:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
X=1
Y=2
P=1
<strong>Output:</strong>
1
<strong>Explanation:</strong>
After 1st turn,
X=2,Y=2.
Now Max(X,Y)/Min(X,Y)=1.</span></pre>

<p><strong><span style="font-size:18px">Example 2:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
X=2
Y=1
P=2
<strong>Output:</strong>
2
<strong>Explanation:</strong>
After first turn,
X=4,Y=1
After Second turn,
X=4,Y=2.
Now,Max(X,Y)/Min(X,Y)=4/2=2.</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything.Your task is to complete the function <strong>findValue()</strong> which takes 3 integers X,Y,P as input parameters and returns the value of Max(X,Y)/Min(X,Y) after P turns.</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity:</strong>O(1)<br>
<strong>Expected Auxillary Space:</strong>O(1)</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1&lt;=X,Y,P&lt;=10<sup>9</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>number-theory</code>&nbsp;