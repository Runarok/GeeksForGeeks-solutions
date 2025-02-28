<h2><a href="https://www.geeksforgeeks.org/problems/powers-game3701/1?page=2&category=Arrays&status=unsolved,attempted&sortBy=accuracy">Powers game</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given two integers <strong>x</strong> and <strong>n</strong>,&nbsp;you have to find an array such that it contains the frequency of index numbers occurring in (X<sup>1</sup>, X<sup>2</sup>,.... X<sup>N-1</sup>, X<sup>N</sup>).&nbsp;</span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>x = 15, n = 3
<strong>Output:</strong> [0, 1, 2, 2, 0, 3, 0, 1, 0, 0]
<strong>Explanation:</strong> 15^1, 15^2, 15^3 ==&gt; 15, 225, 3375
An array which displays the frequency of 
its index numbers occuring in 15, 225 and 3375
Frequency of '0' = 0
Frequency of '1' = 1 (only once in 15)
Frequency of '2' = 2 (twice in 225)
Frequency of '3' = 2 (twice in 3375)
Frequency of '4' = 0
Frequency of '5' = 3 (thrice in '15', '225' and '3375')
Frequency of '6' = 0
Frequency of '7' = 1 (only once in '3375')
Frequency of '8' = 0
Frequency of '9' = 0
Resultant array:
0 1 2 2 0 3 0 1 0 0</span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>x = 2, n = 4
<strong>Output:</strong> [0, 1, 1, 0, 1, 0, 1, 0, 1, 0]
</span></pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(n)<br><strong>Expected Auxiliary Space:</strong>&nbsp;O(1)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 &lt;= x &lt;= 15<br>1 &lt;= n &lt;= 15</span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Modular Arithmetic</code>&nbsp;<code>logical-thinking</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;