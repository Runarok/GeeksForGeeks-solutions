<h2><a href="https://www.geeksforgeeks.org/problems/cut-woods/1?page=7&difficulty=Hard&status=unsolved&sortBy=accuracy">Cut woods</a></h2><h3>Difficulty Level : Difficulty: Hard</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an array&nbsp;<strong>A[]&nbsp;</strong>of&nbsp;<strong>N</strong>&nbsp;integers, where&nbsp;<strong>A[i]</strong>&nbsp;denotes the height of&nbsp;<strong>i<sup>th</sup>&nbsp;</strong>tree.&nbsp;<br><strong>Geek</strong>&nbsp;needs to cut down&nbsp;<strong>M</strong>&nbsp;meters of wood. He has a woodcutting machine that works as follows:&nbsp; Set the blade at a height parameter&nbsp;<strong>H,&nbsp;</strong>and the machine cuts off all trees having a height greater than&nbsp;<strong>H</strong>. The trees having less than height&nbsp;<strong>H</strong>&nbsp;remains intact.<br>Since <strong>Geek</strong>&nbsp;is an environmentalist, he doesn't want to cut woods more than necessary, so he set the height&nbsp;<strong>H</strong>&nbsp;as high as possible.<br>Find the maximum height <strong>H&nbsp;</strong>of the blade that still allows to cutoff at least <strong>M</strong>&nbsp;meters of wood.</span></p>
<p><span style="font-size: 18px;"><strong>Example 1:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong>
A[] = {20, 15, 10, 17}
M = 7
<strong>Output: </strong>15
<strong>Explanation:</strong> 
Set the height parameter to 15, then Geek can chop:
  1.5 metres from first tree
  2. 0 metres from second tree
  3. 0 metres from third tree
  4. 2 metres from fourth tree
  So in total Geek chopped 5 + 2 = 7 metres of wood.

</span></pre>
<pre><span style="font-size: 18px;"><strong>Example 2:

Input:</strong>
A[] = {4, 42, 40, 26, 46}
M = 20
<strong>Output: </strong>36
</span></pre>
<p>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Your Task:&nbsp;&nbsp;</strong><br>You don't need to read input or print anything. Your task is to complete the function <strong>maxHeight</strong><strong>()</strong>&nbsp;which takes an array and an integer and returns an integer as output.</span></p>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(N *logN)<br><strong>Expected Auxiliary Space:</strong> O(1)</span></p>
<p>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 &lt;= N&nbsp;&lt;= 10<sup>6</sup><br>1 &lt;= A[i]&nbsp;&lt;=10<sup>6</sup><br>1 &lt;= M &lt;=2 * 10</span><sup><span style="font-size: 18px;">6</span></sup></p></div>