<h2><a href="https://www.geeksforgeeks.org/problems/special-keyboard-2/1?page=1&difficulty=Medium&status=unsolved&sortBy=accuracy">Special Keyboard 2</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;"><span style="font-family: Arial;"><span style="color: #000000;">Geek wants to print <strong>n </strong>times&nbsp;<strong>'A'</strong> on the screen of a computer.&nbsp;</span></span></span><span style="font-family: Arial;"><span style="color: #000000;"><span style="font-size: 18px;">You can perform one of two operations on this computer for each step</span><span style="font-size: 14.6667px;">&nbsp;<span style="font-size: 18px;">and&nbsp;</span></span></span></span><span style="font-size: 18px;"><span style="font-family: Arial;"><span style="color: #000000;">return the minimum number of operations to get the character 'A' exactly n times on the screen.</span></span></span><br><span style="font-size: 18px;"><span style="font-family: Arial;"><span style="color: #000000;">Two Operations are:</span></span></span></p>
<ul>
<li><span style="font-size: 18px;"><span style="font-family: Arial;"><span style="color: #000000;">Copy All: You can copy all the characters on the screen (a partial copy is not allowed).</span></span></span></li>
<li><span style="font-size: 18px;"><span style="font-family: Arial;"><span style="color: #000000;">Paste: You can paste the characters which are copied last time.</span></span></span></li>
</ul>
<p><span style="font-size: 18px;"><strong>Example 1:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input</strong>: 
n = 3
<strong>Output</strong>: 
3
<strong>Explanation</strong>:
<span style="font-family: Arial;"><span style="color: #000000;">Initially, we have one character 'A'.
In step 1, we use Copy All operation.
In step 2, we use Paste operation to get 'AA'.
In step 3, we use Paste operation to get 'AAA'
As you can see, we only need three operations 
to get <strong>three </strong>times 'A' on the screen.</span></span></span>
</pre>
<p><span style="font-size: 18px;"><strong>Example 2:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input</strong>: 
n = 1
<strong>Output</strong>: 
0
<strong>Explanation</strong>:
</span><span style="font-size: 18px;">Here, We don't need do any operations 
because single A is already there.</span>
</pre>
<p><strong><span style="font-size: 18px;">Your Task:</span></strong><br><span style="font-size: 18px;">You don't need to read input or print anything.&nbsp;You only need to complete the function<strong> findminoperation() </strong>which<strong>&nbsp;</strong>takes one integer <strong>n </strong>as input and returns an integer denoting operation taken to print <strong>'A'</strong>, <strong>n </strong>times.</span></p>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> &nbsp;O(sqrt(n))<br><strong>Expected Auxilliary Space:</strong> O(1)</span><br>&nbsp;<br><span style="font-size: 18px;"><strong>Constraints:</strong></span><br><span style="font-size: 18px;">1 &lt; n &lt; 10<sup>9</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>Data Structures</code>&nbsp;