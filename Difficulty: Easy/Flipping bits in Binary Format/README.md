<h2><a href="https://www.geeksforgeeks.org/problems/flipping-bits-no-and-binary-format-in-reverse-order0513/1?page=7&status=unsolved&sortBy=accuracy">Flipping bits in Binary Format</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a list of 32 bit&nbsp;unsigned integers N. Find X,&nbsp;the unsigned integer&nbsp;you get by flipping bits in the&nbsp;binary representation of N.&nbsp;i.e. unset bits must be set, and set bits must be unset. Also find the&nbsp;binary representation of X&nbsp;in reverse order.</span></p>

<p><br>
<strong><span style="font-size:18px">Example 1:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong> N = 1
<strong>Output:</strong> 4294967294 01111111111111111111111111111111
<strong>Explaination:</strong> 
1 as unsigned 32-bits is 00000000000000000000000000000001. 
Flipping its bits we get 11111111111111111111111111111110.
Its binary representation is 4294967294.
Its reverse order is 01111111111111111111111111111111.</span></pre>

<p>&nbsp;</p>

<p><strong><span style="font-size:18px">Example 2:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong> N = 2
<strong>Output:</strong> 4294967293 10111111111111111111111111111111
<strong>Explaination:</strong> 
2 as unsigned 32-bits is 00000000000000000000000000000010. 
Flipping its bits we get 11111111111111111111111111111101.
Its binary representation is 4294967293.
Its reverse order is 1011111111111111111111111111111.</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You do not need to read input or print anything. Your task is to complete the function <strong>flipBits()</strong> which takes N as input parameter and returns a list of strings containing two values, X and &nbsp;binary representation of X&nbsp;in reverse order.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(logN)<br>
<strong>Expected Auxiliary Space:</strong> O(logN)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ N &lt;&nbsp;4294967296 </span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Misc</code>&nbsp;