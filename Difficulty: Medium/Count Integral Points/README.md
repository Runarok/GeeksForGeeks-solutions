<h2><a href="https://www.geeksforgeeks.org/problems/count-integral-points5445/1?page=2&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Count Integral Points</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given two points <strong>p</strong> (x1, y1) and <strong> q </strong>(x2, y2), Calculate the number of integral points lying on the line joining them.</span><br><span style="font-size: 18px;"><strong>Note: </strong>You are given the 4 points x1, y1, x2, y2 as Input.</span></p>
<p>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Examples :</strong></span></p>
<pre><span style="font-size: 18px;"><strong style="font-size: 18px;">Input:</strong> </span><span style="font-size: 18px;"><strong>x1 = </strong>2, <strong>y1 = </strong>2, <strong>x2 = </strong>5, <strong>y2 = </strong>5</span>
<span style="font-size: 18px;"><strong><span style="font-size: 18px;">Output:</span> </strong></span><span style="font-size: 18px;">2</span>
<span style="font-size: 18px;"><strong><span style="font-size: 18px;">Explanation:</span> </strong></span><span style="font-size: 18px;">There are only 2 integral points on the line joining (2,2) and (5,5). The points are (3,3) and (4,4).</span></pre>
<pre><span style="font-size: 18px;"><strong style="font-size: 18px;">Input:</strong> </span><span style="font-size: 18px;"><strong>x1 = </strong>1, <strong>y1 = </strong>9, <strong>x2 = </strong>8, <strong>y2 = </strong>16</span>
<span style="font-size: 18px;"><strong><span style="font-size: 18px;">Output:</span> </strong></span><span style="font-size: 18px;">6</span>
<span style="font-size: 18px;"><strong><span style="font-size: 18px;">Explanation:</span> </strong></span><span style="font-size: 18px;">There are 6 integral points on the line joining (1,9) and (8,16).
</span></pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(log(max(x1,x2,y1,y2)))<br><strong>Expected Auxiliary Space:</strong> O(1)</span></p>
<p>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong></span><br><span style="font-size: 18px;">1 &lt;= x1,x2,y1,y2 &lt;= 10<sup>8</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;