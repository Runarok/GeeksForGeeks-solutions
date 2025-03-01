<h2><a href="https://www.geeksforgeeks.org/problems/game-of-cells3700/1?page=1&status=unsolved&sortBy=accuracy">Game of cells</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a <strong>NxNxN</strong> grid. Harvey and Mike are playing a game. The rule of the game is simple. Each of them in their turn choses a cell and mark it with their initials. But the catch here is once a cell is marked they can't chose any of the adjacent(sharing a common face not the just the edge) cell to it. Since Harvey is senior he goes first. Both of them play optimally. The player with no move remaining loses the game. Find out who wins.</span></p>

<p><br>
<strong><span style="font-size:18px">Example 1:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong> N = 2
<strong>Output:</strong> Mike
<strong>Explaination:</strong> 2*2*2 grid they have 8 blocks, 
if Harvey marks any of the cell the then Mark 
has only three options left, and once Mike 
chooses any one of the three, then Harvey has
no other option so Mike wins.</span></pre>

<p>&nbsp;</p>

<p><strong><span style="font-size:18px">Example 2:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong> N = 1
<strong>Output:</strong> Harvey
<strong>Explaination:</strong> There is only one cell which 
gets filled when Harvey uses his first turn. 
So Mike has no possible turn and Harvey wins.</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You do not need to read&nbsp;input or print anything. Your task is to complete the function <strong>winner() </strong>which takes the value N as input parameter and returns the name of the&nbsp;winner. ie either "Harvey" or "Mike".</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity: </strong>O(1)<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ N ≤ 10<sup>18</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Game Theory</code>&nbsp;