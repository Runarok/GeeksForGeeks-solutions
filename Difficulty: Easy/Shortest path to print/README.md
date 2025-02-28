<h2><a href="https://www.geeksforgeeks.org/problems/shortest-path-to-print4223/1?page=1&category=Strings&status=unsolved,attempted&sortBy=accuracy">Shortest path to print</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given the following&nbsp;grid&nbsp;containing alphabets from A-Z and&nbsp; a string S.Find the shortest possible path to type all characters of given string in given order using only left,right,up and down movements(while staying inside the grid).Initially you start at A(on the top-left corner).<br>
Find the horizontal movement first(Left/Right) and, then, the vertical movement(Up/Down) for each character of the string.</span></p>

<p><span style="font-size:18px"><strong>Grid:</strong></span></p>

<pre><span style="font-size:18px">A B C D E
F G H I J
K L M N O
P Q R S T
U V W X Y
Z
</span></pre>

<p><span style="font-size:18px"><strong>Example:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
S=GFG
<strong>Output:</strong>
RIGHT DOWN OK LEFT OK RIGHT OK 
<strong>Explanation:
</strong>We start at A, go towards G,
then towards F and finally again towards G,
using the shortest paths possible.When You
reach the character, insert "OK" into the
string array.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
S=GEEK
<strong>Output:
</strong>RIGHT DOWN OK RIGHT RIGHT
RIGHT UP OK OK LEFT LEFT LEFT
LEFT DOWN DOWN OK 
<strong>Explanation:
</strong>Starting from A, we go 
towards G,then E,we stay at E,Then 
we go towards K using the shortest paths.</span>

</pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything.Your task is to complete the function&nbsp;<strong>ShortestPath()</strong> which takes a string S and returns an array of strings containing the order of movements required to&nbsp;cover all characters of S.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(N)<br>
<strong>Expected Auxillary Space:</strong> O(1)</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ |S|&nbsp;≤ 10<sup>6</sup><br>
S consists of character from A-Z.</span></p>

<p>&nbsp;</p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>Shortest Path</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;