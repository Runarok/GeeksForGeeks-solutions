<h2><a href="https://www.geeksforgeeks.org/problems/mr-modulo-and-arrays2827/1?page=2&category=Binary%20Search&difficulty=Medium,Hard&status=unsolved,attempted&sortBy=accuracy">Mr. Modulo and Arrays</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an array <strong>arr[]</strong> of integers, the task is to find the maximum value of arr[i] % arr[j] for any pair of elements {arr[i], arr[j]} such that arr[i] ≥ arr[j] and 1 ≤ i, j ≤ n.</span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [3, 4, 7] 
<strong>Output:</strong> 3
<strong>Explanation</strong>: There are 3 pairs which satisfies 
&nbsp;            arr[i] &gt;= arr[j] are:-
             4, 3 =&gt; 4 % 3 = 1
             7, 3 =&gt; 7 % 3 = 1
             7, 4 =&gt; 7 % 4 = 3
             Hence maximum value among all is 3.</span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [4, 4, 4, 4] 
<strong>Output:</strong> 0</span>
</pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(nlogn+mlogm)<br>Note: n is total number of elements and m is maximum value of all the elements.<br><strong>Expected Auxiliary Space:</strong> O(1).</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ arr.size() ≤ 10<sup>5<br></sup></span><span style="font-size: 18px;">1 ≤ arr[i]&nbsp;≤ 10<sup>5</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Binary Search</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;