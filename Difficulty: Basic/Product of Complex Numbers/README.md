<h2><a href="https://www.geeksforgeeks.org/problems/product-of-complex-numbers1426/1?page=13&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">Product of Complex Numbers</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given two arrays A[] and B[] of real and imaginary part of 5 complex numbers, find the product of these five Complex numbers The array A[] contains the real part and B[] contains the imaginary part. So, if A[0] is 5 and B[0] is 4, the complex numbers is (5 + 4i).</span></p>
<p>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Example 1:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong></span>
<span style="font-size: 18px;"><strong>A[] = </strong>{1, 2, 3, 4, 5}</span>
<span style="font-size: 18px;"><strong>B[] = </strong>{0, 0, 0, 0, 0}</span>
<span style="font-size: 18px;"><strong>Output:</strong></span>
<span style="font-size: 18px;">120 0</span>
<span style="font-size: 18px;"><strong>Explanation:</strong></span>
<span style="font-size: 18px;">We are to multiply the 5 complex numbers
and so (1+0i)*(2+0i)*(3+0i)*(4+0i)*(5+0i).
We can see that answer is 120 + 0i.</span></pre>
<p><span style="font-size: 18px;"><strong>Example 2:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong></span>
<span style="font-size: 18px;"><strong>A[] = </strong>{1, 2, 3, 4, 5}</span>
<span style="font-size: 18px;"><strong>B[] = </strong>{1, 2, 3, 4, 5}</span>
<span style="font-size: 18px;"><strong>Output:</strong></span>
<span style="font-size: 18px;">-480 -480</span>
<span style="font-size: 18px;"><strong>Explanation:</strong></span>
<span style="font-size: 18px;">(1+1i)*(2+2i)*(3+3i)*(4+4i)*(5+5i)= -480-480i </span></pre>
<p>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Your Task:</strong><br>You don't need to read input or print anything. Your task is to complete the function <strong>complexProduct()</strong> which takes 2 arrays A[] and B[], both of length 5 as input and returns a vector of two integers, the first one being the real part and the second being the imaginary part of the product of these 5 complex Numbers.</span></p>
<p>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(1)<br><strong>Expected Auxiliary Space:</strong> O(1)</span></p>
<p>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong></span><br><span style="font-size: 18px;">1 &lt;= A[i], B[i] &lt;= 50</span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;