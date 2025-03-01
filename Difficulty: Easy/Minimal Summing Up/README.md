<h2><a href="https://www.geeksforgeeks.org/problems/minimal-summing-up4253/1?page=8&status=unsolved&sortBy=accuracy">Minimal Summing Up</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">For a positive, non-zero integer <strong>N</strong>, find the minimum count of numbers of the form <strong>X<sup>(i-1)</sup></strong>, where <strong>X</strong> is a given non-zero, non-negative integer raised to the power <strong>i-1</strong>&nbsp;where <strong>(1 ≤ i ≤ 12)</strong>, so that they sum up to form the number N exactly.</span></p>
<p><strong><span style="font-size: 18px;">Example 1:</span></strong></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong> N = 10, X = 2
<strong>Output:</strong> 2
<strong>Explaination:</strong> The minimal summing is 8 + 2. 
Here both 8 and 2 are obtained from 2 raising 
it to the power 3 and 1 respectively.</span></pre>
<p><strong><span style="font-size: 18px;">Example 2:</span></strong></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong> N = 38, X = 3
<strong>Output:</strong> 4
<strong>Explaination:</strong> The minimal summing is 
27 + 9 + 1 + 1. Where all the numbers are 
powers of 3.</span></pre>
<p><span style="font-size: 18px;"><strong>Your Task:</strong><br>You do not need to read input or print anything. Your task is to complete the function <strong>minimalSum()</strong> which takes N and X as input parameters and returns the minimum number of values of some exponent of X required to make the number N.</span></p>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(logN)<br><strong>Expected Auxiliary Space:</strong> O(1)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ N ≤ 10<sup>8</sup><br>2 ≤ X ≤ 5&nbsp;&nbsp;</span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Operators</code>&nbsp;