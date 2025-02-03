<h2><a href="https://www.geeksforgeeks.org/problems/primitive-typing5427/1?page=2&category=Matrix,Graph&difficulty=Easy&status=unsolved&sortBy=accuracy">Primitive Typing</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a screen containing alphabets from a-z, we can go from one character to </span><span style="font-size:18px">another character</span><span style="font-size:18px">&nbsp;using a remote. The remote contains left, right, top and bottom keys.</span></p>

<p><span style="font-size:18px"><strong>Remote :</strong></span><br>
<img alt="" src="https://contribute.geeksforgeeks.org/wp-content/uploads/Primitive-Typing.jpg"></p>

<p><span style="font-size:18px">Find the&nbsp;shortest possible path to type all characters of given string using the remote. The initial position is top left and all characters of input string should be printed in order. Find&nbsp;the total number of moves in such a path(Move UP, DOWN, LEFT, RIGHT).&nbsp;Pressing OK also accounts for one move.</span></p>

<p><span style="font-size:18px"><strong>Screen:</strong></span></p>

<pre><span style="font-size:18px">a b c d e
f g h i j
k l m n o
p q r s t
u v w x y
z</span>
</pre>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>str = "abc"
<strong>Output: </strong>5
<strong>Explanation: </strong>Remote's position is at 'a'
initially. So 'a' -&gt; 'b' = 1 step, 
'b'-&gt; 'c'= 1 step. Three OK moves will also
be needed to print the three characters.</span>
</pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>str = "a"
<strong>Output: </strong>1
<strong>Explanation: </strong>Remote is initially at 'a'.</span>
</pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read or print anything. Your task is to complete the function&nbsp;<strong>FindPath()</strong>&nbsp;which takes the string str as input parameter and returns the minimum number of moves to cover all characters of the given string.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Compelxity:&nbsp;</strong>O(n)<br>
<strong>Expected Space Complexity:&nbsp;</strong>O(1)</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= |str| &lt;= 10<sup>5</sup></span></p>
</div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Accolite</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Matrix</code>&nbsp;<code>Data Structures</code>&nbsp;