<h2><a href="https://www.geeksforgeeks.org/problems/game-of-chocolates3554/1?page=2&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Game of Chocolates</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;"><span style="font-size: 18px;">Bunty and Dolly are playing a game, described as follows.</span><br><strong style="font-size: 18px;">Game Description: -</strong><br><span style="font-size: 18px;">There are two boxes having </span><strong style="font-size: 18px;">a </strong><span style="font-size: 18px;">and </span><strong style="font-size: 18px;">b</strong><span style="font-size: 18px;"> number&nbsp;of chocolates respectively. Both can eat</span><strong style="font-size: 18px;"> L</strong><span style="font-size: 18px;">&nbsp;(L ≥ 1) chocolates from any one box or</span><strong style="font-size: 18px;"> L</strong><span style="font-size: 18px;"> chocolates from both boxes in one&nbsp;move. They play the game alternatively and the last one to eat the chocolate will be the winner.</span><br><span style="font-size: 18px;">As Bunty wants to impress Dolly, he wants to make Dolly the winner. You have to help Bunty in deciding who should play first. Assume that both the players play optimally.</span><br><span style="font-size: 18px;">Returns <strong>false</strong> if Bunty should play first else <strong>true</strong>.</span><br></span></p>
<p><span style="font-size: 18px;"><strong>Example 1:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input</strong>:
a = 1 and b = 2
<strong>Output:</strong>&nbsp;Bunty</span><span style="font-size: 18px;">
<strong>Explanation</strong>:
If Bunty starts first, all the next possible state
(0,2), (1,1), (1,0) are wining state for Dolly</span>
</pre>
<p><span style="font-size: 18px;"><strong>Example 2:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong>
a = 1 and b = 3
<strong>Output: </strong>Dolly
</span></pre>
<p><span style="font-size: 18px;"><strong>Your Task:&nbsp;&nbsp;</strong><br>You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>game()</strong>&nbsp;which takes the integer A and B&nbsp;as input parameters and returns <strong>false</strong>&nbsp;if Bunty should play first else returns&nbsp;<strong>true</strong>.</span></p>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(1)<br><strong>Expected Auxiliary Space:</strong> O(1)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>0 ≤ a, b ≤ 10<sup>9</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Game Theory</code>&nbsp;