<h2><a href="https://www.geeksforgeeks.org/problems/examination-papers2459/1?page=5&status=unsolved&sortBy=accuracy">Examination Papers</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">A professor teaches Computer Science in his University. After the End Semester Examination, he checks all the papers and keeps them in descending order based on marks in the form of a pile. However he realizes that he has kept the papers in the box meant for Chemistry papers. He has to transfer the papers to the actual box that too in a pile with descending order of marks, and with some conditions.</span></p>

<p><span style="font-size:18px">1) He can withdraw a paper from the top of a pile only, and also he can place a paper on the top of a pile only.</span></p>

<p><span style="font-size:18px">2) He can keep a paper only at three places: box meant for computer science paper, box meant&nbsp;for chemistry paper, and he can keep the papers on the table also while withdrawing another paper from the top of a&nbsp;pile.</span></p>

<p><span style="font-size:18px">3) He can't keep the papers upon the table separately, i.e, he has to keep those papers in a single pile upon the table.</span></p>

<p><span style="font-size:18px">4) A paper with lower marks never comes below the paper with higher marks in a pile.</span></p>

<p><span style="font-size:18px">Displacing a paper to any pile would be called a move.</span></p>

<p><span style="font-size:18px">He wants to know in advance how many moves would he require. Compute the number of moves.<br>
<br>
<strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>: N = 2
<strong>Output:</strong>&nbsp;3&nbsp;
<strong>Explanation</strong>: First paper to table,
second paper to actual box, then
again first paper to actual box.
</span>
</pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>N = 3
<strong>Output:&nbsp;</strong>7
<strong>Explanation</strong>: First paper to actual box,
second paper to table,first paper to table,
third paper to actual box,first paper to
chemistry box,second paper to actual box,
first paper to actual box.</span>
</pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:&nbsp;&nbsp;</strong><br>
You dont need to read input or print anything. Complete the function <strong>totalMoves()&nbsp;</strong>which takes N&nbsp;as input parameter and returns the number of moves.<strong>&nbsp;</strong><br>
<br>
<strong>Expected Time Complexity:</strong> O(N)<br>
<strong>Expected Auxiliary Space:</strong> O(1)<br>
<br>
<strong>Constraints:</strong><br>
1&lt;= N&nbsp;&lt;=50</span></p>
</div>