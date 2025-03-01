<h2><a href="https://www.geeksforgeeks.org/problems/cereals-box0644/1?page=14&status=unsolved&sortBy=accuracy">Cereals Box</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">You are given N numbers you can decrease each number by&nbsp;10 %&nbsp;or K kg whichever is more. If the number you choose is less than K&nbsp;you can make it&nbsp;zero. Your task is to minimize the sum of the number as small as possible by performing N operations only</span></p>
<p><span style="font-size: 18px;"><strong>Note: </strong>Final answer should be typecasted to the nearest integer smaller or equal to the value.</span><br>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Example 1:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:
</strong>N = 2
k = 10
arr = 100 15<strong>
Output:
</strong>95<strong>
Explanation:</strong>
You will remove 10 from 100
then once again remove 10 
90.</span></pre>
<p><span style="font-size: 18px;"><strong>Example 2:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:
</strong>N = 2
K = 10
arr = 90 100<strong>
Output
</strong>170<strong>
Explanation:
</strong>remove 10 each time
from either 100 or 90.</span>
</pre>
<p><br><span style="font-size: 18px;"><strong>Your Task:</strong><br>You don't need to read input or print anything. Your task is to complete the function <strong>minSum()</strong>&nbsp;which takes&nbsp;an array of integer,&nbsp;its size&nbsp;<strong>N, </strong>and an integer K<strong>&nbsp;</strong>&nbsp;as input parameters&nbsp;and returns an integer, minimum sum of all the elements after performing N operations.</span></p>
<p><br><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(log</span><span style="font-size: 15px;"> </span><span style="font-size: 18px;">N)</span><br><strong>Expected Space Complexity:</strong><span style="font-size: 18px;"> O(1)</span><br>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1&lt;=N,K&lt;=10<sup>4</sup><br>1&lt;=A[i]&lt;=10<sup>6</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>priority-queue</code>&nbsp;<code>Data Structures</code>&nbsp;