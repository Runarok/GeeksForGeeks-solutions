<h2><a href="https://www.geeksforgeeks.org/problems/next-optimal-move-in-tic-tac-toe2842/1?page=5&difficulty=Hard&status=unsolved&sortBy=accuracy">Next Optimal Move in Tic Tac Toe</a></h2><h3>Difficulty Level : Difficulty: Hard</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">You are given a middle game situation of the game <a href="https://en.wikipedia.org/wiki/Tic-tac-toe">Tic Tac Toe</a>. It is given that it is player "X's" turn and you need to give to most optimal position for the turn. The situation is given as a 3 x 3 character matrix <strong>board</strong>. '_' refers to the place is empty. 'o' refers that player O marked it in his turn at some time and 'x' refers that player X marked it in his turn at some time. It is player X's turn. Tell him the most optimal solution.(Assume player O played first).&nbsp;</span></p>

<p><strong><span style="font-size:18px">Example 1:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong> board = {{o, _, _}, 
&nbsp;               {_, _, _}, 
&nbsp;               {_, _, _}}
<strong>Output:</strong> 1 1
<strong>Explaination:</strong> Placing a 'x' in the (1, 1) 
that is the center of the board is the most 
optimal approach for x.</span></pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You do not need to read input or print anything. Your task is to complete the function <strong>findBestMove()</strong> which takes board as input parameter and returns the best optimal move in a list where the first one is the row index and the second one is the column index.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(2<sup>9</sup>)<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
board[i][j] = 'o' / 'x' / '_'&nbsp;&nbsp;</span></p>
</div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Accolite</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Misc</code>&nbsp;