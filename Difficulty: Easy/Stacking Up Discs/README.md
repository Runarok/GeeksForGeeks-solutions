<h2><a href="https://www.geeksforgeeks.org/problems/stacking-up-discs1315/1?page=14&status=unsolved&sortBy=accuracy">Stacking Up Discs</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given <strong>N</strong> number of circular discs. Each of the discs has a radius <strong>R</strong> and a thickness (height) <strong>H</strong>.&nbsp; A&nbsp;disc of radius R<sub>1</sub> and height H<sub>1</sub>&nbsp;can be placed above another disc of radius<strong> </strong>R<sub>2</sub><strong> </strong>and height H<sub>2</sub> if and only if <strong>R<sub>1</sub></strong> &lt; <strong>R<sub>2</sub></strong> and <strong>H<sub>1</sub></strong> &lt; <strong>H<sub>2</sub></strong>.</span></p>

<p><span style="font-size:18px">Find out the height of the&nbsp;highest stack of discs that can be made.</span></p>

<p><strong><span style="font-size:18px">Example 1:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N=3
R1=5 H1=6
R2=7 H2=5
R3=3 H3=4</span><span style="font-size:18px">
<strong>Output: </strong>10
<strong>Explanation: 
</strong>(3, 4)&lt;(5, 6)and(3, 4)&lt;(7, 5).
So we have two options but if we put 
(3, 4) above (5, 6) we get height of 
10 and if we put(3, 4) on (7, 5) 
we get height of 9.
The answer is thus 10. Note we 
can put (5,6) over (7,5) as 6&gt;5.</span></pre>

<p><strong><span style="font-size:18px">Example 2:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N=2
R1=3 H1=7
R2=7 H2=4
<strong>Output:</strong>7
<strong>Explanation:</strong>We cannot place any of the
discs on top of another,So maximum height
is 7(of the first disc).</span>
</pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>StackingUpDiscs()&nbsp;</strong>which takes the integer N and the two arrays R and H as input parameter&nbsp;and returns the height&nbsp;of the highest stack that can be made from the given discs.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong>O(N^2)<br>
<strong>Expected Auxillary Space:</strong>O(N)</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ <strong>N</strong> ≤ 1000<br>
1 ≤ <strong>R<sub>i</sub>,H<sub>i</sub></strong> ≤ 10<sup>5</sup> for 1&lt;=<strong>i</strong>&lt;=&nbsp;N</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Dynamic Programming</code>&nbsp;<code>Sorting</code>&nbsp;<code>Algorithms</code>&nbsp;