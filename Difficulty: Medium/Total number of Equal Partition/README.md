<h2><a href="https://www.geeksforgeeks.org/problems/total-number-of-equal-partition0022/1?page=26&difficulty=Medium&status=unsolved&sortBy=accuracy">Total number of Equal Partition</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">For a number&nbsp;<strong>N&nbsp;</strong>&nbsp;<strong>f(N)&nbsp;</strong>=&nbsp;the&nbsp;total number of parts in the partitions of&nbsp;<strong>N</strong>&nbsp;into equal parts.</span><br><span style="font-size: 18px;"><strong>For example</strong><br>if the given number is 4, the&nbsp;equal partitions will be:<br>{1,1,1,1} &nbsp; -&gt;total parts=4<br>{2,2} &nbsp; &nbsp; &nbsp; &nbsp;-&gt; total parts=2<br>{4} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;-&gt; total parts=1<br>So, &nbsp;the total number of parts in the partition of 4 into equal parts is 7.Now you are given two number <strong>l,r</strong>. find the sum of f(i) for i=<strong>l to r</strong>.(both inclusive)</span></p>
<p><strong><span style="font-size: 18px;">Example 1:</span></strong></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong> l = 1, r = 2
<strong>Output:</strong> 4
<strong>Explaination:</strong> For 1 the partition is {1}. 
For 2 the partitions are {1, 1} and {2}.</span></pre>
<p><strong><span style="font-size: 18px;">Example 2:</span></strong></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong> l = 4, r = 4
<strong>Output:</strong> 7
<strong>Explaination:</strong> The explaination is given 
in the question itself.</span></pre>
<p><span style="font-size: 18px;"><strong>Your Task:</strong><br>You do not need t read input or print anything. Your task is to complete the function <strong>partitions()</strong> which takes l and r as input parameters and returns the total number of partitions.</span></p>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(r)<br><strong>Expected Auxiliary Space:</strong> O(1)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ l ≤ r ≤ 10<sup>7</sup>&nbsp; &nbsp;</span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>sieve</code>&nbsp;