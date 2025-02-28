<h2><a href="https://www.geeksforgeeks.org/problems/cross-the-hurdles-the-game4734/1?page=2&category=Arrays&status=unsolved,attempted&sortBy=accuracy">Cross the hurdles: The Game</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">You are playing a video-game in which your character has to cross N hurdles. Initially, your character has N energies states corresponding to each hurdle. All the hurdles have their respective heights.<br>
Now, your character can only jump over a hurdle if its energy at that instant is greater than or equal to the hurdle's height.<br>
When you cross a hurdle of height h, your current energy gets reduced by h. The remaining energy can be rolled over for subsequent hurdles.<br>
Also, after your character crosses a hurdle, it gets an energy boost that is equal to the position of that hurdle(1,2,3....).<br>
So, given N, N energy states, and N hurdle heights; you need to find whether you can win the game or not. You can only win if your character can successfully cross all the hurdles.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>â€‹Input :</strong> 
original_energies[ ] = {1, 1, 1}
hurdles_heights[ ] = {0, 2, 4}
<strong>Output :</strong> You Win! 3
<strong>Explanation:
</strong>Your inital energy for 1st hurdle is 1. 
The hurdle height is 0. You can cross it. 
The energy 1-0 =1 get rolled over to the 
next state. Also, you gets a boost of 1 since 
you crossed the first hurdle. The total 
energy of the next state becomes 1(rolled over)
+1(boost)+1(2nd states energy)=3. Now 3&gt;= 2, 
so you can cross it. The energy 3-2=1 get rolled 
over. Also, you get a boost of 2 since you 
crossed 2nd hurdle. So, the next state's total 
energy becomes 1(rolled over)+2(boost)+
1(state's energy)=4. Now, 4&gt;=4, so you can cross 
it. The remeining energy is 4 - 4=0 plus the 
boost of 3 since you crossed hurdle 3. 
The return energy at the end is <strong>3</strong>. 
</span></pre>

<p><br>
<span style="font-size:18px"><strong>â€‹Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input :</strong> 
original_energies[ ] = {1, 1, 1} 
hurdles_heights[ ] = {8, 4, 6}<strong>
Output :</strong>  Game Over
</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
This is a function problem. The input is already taken care of by the driver code. You only need to complete the function <strong>game()</strong> that takes an array of original energy&nbsp;<strong>(original_energies)</strong>, array of hurdles&nbsp;height&nbsp;<strong>(hurdles_heights),&nbsp;</strong>sizeOfArray <strong>(n),</strong>&nbsp;and return the remaining energy at the end if it is not possible then return <strong>-1</strong>. The driver code takes care of the printing.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong>&nbsp;O(N).<br>
<strong>Expected Auxiliary Space:</strong>&nbsp;O(1).</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ N ≤ 10<sup>5</sup><br>
0 ≤ A[i] ≤ 10<sup>7</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Data Structures</code>&nbsp;