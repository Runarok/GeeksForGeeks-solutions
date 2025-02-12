<h2><a href="https://www.geeksforgeeks.org/problems/trimorphic-number3553/1?page=30&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">Trimorphic Number</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a number <strong>N</strong>, the task is to check whether the number is Trimorphic number or not. A number is called Trimorphic number if and only if its cube ends in the same digits as the number itself. In other words, number appears at the end of its cube i.e let's say if the number of digits of<strong> N </strong>is <strong>k</strong> then&nbsp;the last <strong>k</strong> digit of the <strong>cube</strong> should be equal to <strong>N</strong> only.</span></p>

<p><br>
<strong><span style="font-size:18px">Example 1:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong> N = 1
<strong>Output:</strong> 1
<strong>Explaination:</strong> 1<sup>3</sup> = 1. So the cube here is ending with 
the number.</span></pre>

<p><br>
<strong><span style="font-size:18px">Example 2:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong> N = 2
<strong>Output:</strong> 0
<strong>Explaination:</strong> 2<sup>3</sup> = 8. The cube is not ending with the 
number at it's end.</span></pre>

<p><br>
<strong><span style="font-size:18px">Example 3:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong> N = 24
<strong>Output:</strong> 1
<strong>Explaination:</strong> 24<sup>3</sup> = 13824. The cube is ending with 24.</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
You do not need to read input or print anything, Your task is to complete the function <strong>isTrimorphic()</strong> which takes N as input parameter and returns 1 if the number is trimorphic, otherwise, returns 0.</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity:</strong>&nbsp;O(LogN)<br>
<strong>Expected Auxiliary Space:</strong>&nbsp;O(1)</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt; N &lt; 10000</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;