<h2><a href="https://www.geeksforgeeks.org/problems/the-cycle-game4441/1?page=11&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">The Cycle Game</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a&nbsp;number <strong>X</strong>&nbsp;and another number <strong>Y&nbsp;</strong>. There are a total&nbsp;&nbsp;<strong>N</strong>&nbsp;cycles ,&nbsp; and alternatively we perform operation on each number . In each cycle , we multiply the number&nbsp;by 2 . Starting with <strong>X</strong> .</span></p>

<p><span style="font-size:18px">Suppose after all the&nbsp;<strong>N</strong>&nbsp;cycles, the number <strong>X</strong>&nbsp;has become <strong>W</strong>&nbsp;and&nbsp; number <strong>Y</strong>&nbsp;has become <strong>Z&nbsp;</strong>. Find&nbsp;the integer division of the maximum number among <strong>W&nbsp;</strong>and <strong>Z</strong>&nbsp;by the minimum number among <strong>W</strong>&nbsp;and<strong> Z&nbsp;</strong>.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>x = 1, y = 2, n = 1
<strong>Output: </strong>2
<strong>Explanation: </strong>&nbsp;the initial numbers are (<strong>X</strong>&nbsp;= 1,
<strong>Y</strong>&nbsp;= 2). There is only one turn. In this turn X 
is multiplied by 2. Hence, we get (<strong>X</strong>&nbsp;= 2,&nbsp;
<strong>Y</strong>&nbsp;= 2) 
Therefore&nbsp;<strong>W</strong>&nbsp;= 2, and&nbsp;<strong>Z</strong>&nbsp;= 2. 
max (<strong>W&nbsp;</strong>,&nbsp;<strong>Z</strong>) / min (<strong>W&nbsp;</strong>,&nbsp;<strong>Z</strong>) =&nbsp; 2 / 2&nbsp; = 1. 
Hence the first output is 1.</span>
</pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>x = 3, y = 2, n = 3
<strong>Output: </strong>3
<strong>Explanation: </strong>the initial numbers are&nbsp;<strong>(X&nbsp;= 3,
Y&nbsp;= 2)</strong>. There three turns. In the first cycle 
X is multiplied&nbsp;by 2.So, we get (<strong>X</strong>&nbsp;= 6,&nbsp;<strong>Y</strong>&nbsp;= 2).
In the second cycle&nbsp;<strong>Y&nbsp;(Y&nbsp;=&nbsp;2)</strong>&nbsp;multiplies his 
number by 2. Hence, we get&nbsp; (&nbsp;<strong>X</strong>&nbsp;= 6,&nbsp;<strong>&nbsp;Y</strong>&nbsp;= 4 ). 
In the third cycle&nbsp;&nbsp;<strong>X ( X = 6)&nbsp;</strong>is multiplied&nbsp;by 
2. So, we get (<strong>X</strong>&nbsp;= 12,&nbsp;<strong>Y</strong>&nbsp;= 4) . As&nbsp;<strong>N</strong>&nbsp;= 3 , 
completed with 3 cyles,&nbsp;therefore&nbsp;<strong>W</strong>&nbsp;= 12 and&nbsp;
<strong>Z</strong>&nbsp;= 4. max (<strong>W&nbsp;</strong>,&nbsp;&nbsp;<strong>Z</strong>) / min (<strong>W&nbsp;</strong>,&nbsp;<strong>Z</strong>) = 12 / 4 = 3. 
Hence the second output is 3.</span><span style="font-size:18px"><strong> </strong></span>
</pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read or print anyhting. Your task is to complete the function&nbsp;<strong>find_division()</strong>&nbsp;which takes X, Y and N as input parameter and returns the integer division of max(w, z) / min(w, z)</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(1)<br>
<strong>Expected Space Complexity:&nbsp;</strong>O(1)</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= X, Y &lt;= 10<sup>8</sup><br>
1 &lt;= N &lt;= 10<sup>9</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;