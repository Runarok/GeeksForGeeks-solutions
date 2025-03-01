<h2><a href="https://www.geeksforgeeks.org/problems/factorial-pairs5916/1?page=10&status=unsolved&sortBy=accuracy">Factorial Pairs</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given Two integers <strong>L</strong> and <strong>R</strong> find the total number of distinct pairs <strong>(p,q) </strong>&nbsp;between <strong>L</strong> and <strong>R</strong> ( both inclusive ) satisfying the given relationship.&nbsp;<strong>p! * q!=k^2</strong> (a perfect square) where p,q,k is any integer and '<strong>!</strong>' denotes factorial.</span><br>
<br>
<span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>: L = 0, R = 1
<strong>Output:</strong>&nbsp;1
<strong>Explanation</strong>: 1 is the only perfect square
between 0 and 1; 
</span></pre>

<p><br>
<span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>L = 9, R = 25
<strong>Output:&nbsp;</strong>3</span><span style="font-size:18px">
<strong>Explanation</strong>: 9, 16 and 25 are the perfect 
squares between 9 and 25. </span>
</pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:&nbsp;&nbsp;</strong><br>
You don't need to read input or print anything. Complete the function <strong>countPerfectSquares()&nbsp;</strong>which takes L and R&nbsp;as an input parameter and returns the total number of perfect squares.<br>
<br>
<strong>Expected Time Complexity:</strong> O(sqrt(N))<br>
<strong>Expected Auxiliary Space:</strong> O(1)<br>
<br>
<strong>Constraints:</strong><br>
0&lt;= L &lt;= R &lt;=10<sup>18</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;