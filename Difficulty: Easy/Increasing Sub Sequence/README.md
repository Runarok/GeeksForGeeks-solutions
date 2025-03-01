<h2><a href="https://www.geeksforgeeks.org/problems/increasing-sub-sequence1712/1?page=1&status=unsolved&sortBy=accuracy">Increasing Sub Sequence</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given a string <strong>s </strong>which includes characters a, b, c, ..., z. Where value of a=1, b=2, ..., z=26. Now find the length of the <strong>largest increasing subsequence </strong>in the string.<br></span><span style="font-size: 18px;">Note: Subsequence doesn't require elements to be consecutively increasing.</span></p>
<p><span style="font-size: 18px;"><strong>Examples :</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>s = abcdapzfqh</span><span style="font-size: 18px;">
<strong>Output: </strong>6<strong>
Explanation: </strong>The length of largest increasing subsequence is 6. One of the sequence with max length 6 is a, b, c, d, p, z.</span>
</pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>s = hkm</span><span style="font-size: 18px;"> 
<strong style="font-size: 18px;">Output: </strong><span style="font-size: 18px;">3</span><strong style="font-size: 18px;">
Explanation: </strong><span style="font-size: 18px;">The length of the largest increasing subsequence is 3. Sequence with max length 3 is h,k,m<br></span></span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>s = </span><span style="font-size: 18px;">gqghs</span><span style="font-size: 18px;">
<strong>Output: </strong>3</span></pre>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1&lt;=s.size()&lt;=1000</span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Dynamic Programming</code>&nbsp;<code>Algorithms</code>&nbsp;