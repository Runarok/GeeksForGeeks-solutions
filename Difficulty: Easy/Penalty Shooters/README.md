<h2><a href="https://www.geeksforgeeks.org/problems/penalty-shooters4238/1?page=1&status=unsolved&sortBy=accuracy">Penalty Shooters</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Geek and Nerd are strikers playing football with their friend the Goalie. Their energies are denoted by X,Y and Z respectively.&nbsp;<br>
Strikers can only score a goal if the Goalie's energy is a factor of their energy. For every goal scored the energy of the respective player is decreased by 1. Each save decreses the Goalie's energy by 1. The game ends when the Goalie's energy is reduced to 1.&nbsp;The strikers can try to goal repeatedly in any order in order to optimise the total number of goals. Geek takes the lead whenever in doubt.&nbsp;<br>
Find the number of goals made by Geek and Nerd.&nbsp;</span></p>

<p><br>
<span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>
X = 4, Y = 9, Z = 5</span>

<span style="font-size:18px"><strong>Output:</strong> 3 2</span>

<strong><span style="font-size:18px">Explaination:</span></strong>
<span style="font-size:18px"><strong>1st Kick: </strong>X=4, Y=9, Z=4
Z is not a factor of X or Y. So the Goalie 
will save the first kick and his energy will 
reduce by 1. </span>

<span style="font-size:18px"><strong>2nd Kick:</strong> X=3, Y=9, Z=4
Z is a factor of X. So Geek will take the 
goal and reduce X by 1. </span>

<span style="font-size:18px"><strong>3rd Kick: </strong>X=3, Y=9, Z=3. Goalie saves. </span>

<span style="font-size:18px"><strong>4th Kick:</strong> X=2, Y=9, Z=3. 
Z is a factor of both X and Y. 
When in doubt, Geek takes the lead. </span>

<span style="font-size:18px"><strong>5th Kick: </strong>X=2, Y=8, Z=3. Nerd goals.
<strong>6th Kick: </strong>X=2, Y=8, Z=2. Goalie saves.
<strong>7th Kick: </strong>X=1, Y=8, Z=2. Geek goals.
<strong>8th Kick: </strong>X=1, Y=7, Z=2. Nerd goals.
<strong>9th Kick: </strong>X=1, Y=7, Z=1. 
Goalie saves and ends the game.</span></pre>

<p><br>
<span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>
X = 13, Y = 10, Z = 7</span>

<span style="font-size:18px"><strong>Output:</strong> 0 3</span>

<span style="font-size:18px"><strong>Explaination: </strong>Since X is a prime number, 
Geek will never goal. </span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
You do not need to read input or print anything. Your task is to complee the function <strong>goals()</strong> which takes X, Y and Z as input parameters and returns a list of integers containing two elements denoting the number of goals scored by Geek and Nerd respectively.&nbsp;</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity: </strong>O(Z)<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ X, Y, Z ≤ 10<sup>5</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>logical-thinking</code>&nbsp;<code>Algorithms</code>&nbsp;