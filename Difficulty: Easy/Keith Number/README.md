<h2><a href="https://www.geeksforgeeks.org/problems/keith-number2745/1?page=2&status=unsolved&sortBy=accuracy">Keith Number</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">A <strong>x</strong>&nbsp;digit number <strong>n</strong>&nbsp;is called <strong>Keith number</strong> if it appears in a special sequence (defined below) generated using its digits. The special sequence has first <strong>x</strong>&nbsp;terms as digits of <strong>n</strong>&nbsp;and other terms are recursively evaluated as sum of previous <strong>x</strong>&nbsp;terms.The task is to find if a given number is <strong>Keith Number</strong> or not.</span><br>
<br>
<span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>: n = 197
<strong>Output:</strong>&nbsp;1&nbsp;
<strong>Explanation</strong>: 197 has 3 digits, so n = 3 
The number is Keith because it appears 
in the special sequence that has first
three terms as 1, 9, 7 and remaining
terms evaluated using sum of previous 3
terms. 1, 9, 7, 17, 33, 57, 107, <strong>197</strong>, ..... 

<strong>Example 2:</strong></span></pre>

<pre><span style="font-size:18px"><strong>Input: </strong>n = 12
<strong>Output:&nbsp;</strong>0
<strong>Explanation</strong>: The number is not Keith 
because it doesn't appear in the special 
sequence generated using its digits. 
1, 2, 3, 5, 8, 13, 21, .....</span><span style="font-size:18px"> 
</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:&nbsp;&nbsp;</strong><br>
You dont need to read input or print anything. Complete the function <strong>isKeith()&nbsp;</strong>which takes n&nbsp;as input parameter and returns 1 if a given number is <strong>Keith Number </strong>else returns 0.<br>
<br>
<strong>Expected Time Complexity:</strong> O(n*</span><span style="font-size:15px"><span style="font-size:18px">k</span></span><span style="font-size:18px">)</span><br>
<span style="font-size:18px"><strong>Expected Auxiliary Space:</strong> O(n)</span><br>
<br>
<span style="font-size:18px"><strong>Constraints:</strong></span><br>
<span style="font-size:18px">1&lt;= n&nbsp;&lt;=10<sup>4</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>series</code>&nbsp;<code>Algorithms</code>&nbsp;