<h2><a href="https://www.geeksforgeeks.org/problems/find-maximum-value/1?page=1&category=two-pointer-algorithm&difficulty=Easy,Hard&status=unsolved,attempted&sortBy=accuracy">Find Maximum value</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 14pt;">Given an array <strong>arr[]</strong> you have to find the maximum value of <strong>abs(i – j)</strong> *<strong>min(arr[i], arr[j])</strong> where <strong>i</strong> and <strong>j</strong> vary from <strong>0</strong> to <strong>n-1 </strong>and<strong> i != j</strong>.&nbsp;<br></span></p>
<p><span style="font-size: 14pt;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>arr[] = [3, 2, 1, 4]
<strong>Output:</strong> 9
<strong>Explanation: </strong>Here, a[0] = 3 and a[3] = 4 and thus result is abs(0-3)*min(3,4) = 9.</span></pre>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>arr[] = [8, 1, 9, 4]
<strong>Output:</strong> 16
<strong>Explanation: </strong>Here, a[0] = 8 and a[2] = 9 and thus result is abs(0-2)*min(8,9)=16. </span></pre>
<div><span style="font-size: 14pt;"><strong>Expected Time Complexity:</strong> O(n)</span></div>
<div><span style="font-size: 14pt;"><strong>Expected Auxiliary Space: </strong>O(1)</span></div>
<div>&nbsp;</div>
<div><span style="font-size: 14pt;"><strong>Constraints:</strong><br>2 &lt;= arr.size() &lt;=10<sup>6</sup><br>-10<sup>5 </sup>&lt;= arr[i] &lt;=10<sup>5</sup></span></div></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Data Structures</code>&nbsp;<code>two-pointer-algorithm</code>&nbsp;