<h2><a href="https://www.geeksforgeeks.org/problems/left-index1524/1?page=1&status=unsolved&sortBy=accuracy">Left Index</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given a sorted array of&nbsp;integers of size N and a number X. Find the leftmost index of X in the array arr[].</span></p>
<p><span style="font-size: 18px;"><strong>Example 1:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input</strong></span>:
<span style="font-size: 18px;">N = 10
arr[] = {1, 1, 2, 2, 3, 4, 5, 5, 6, 7}
X = 1
<strong>Output:</strong>&nbsp;0&nbsp;
<strong>Explanation</strong>: Because&nbsp;the element 1   
appears twice and its left most 
occurrence is at index 0.</span>
</pre>
<p><br><strong><span style="font-size: 18px;">Example 2:</span></strong></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong>
N = 5
arr[] = {2, 2, 3, 3, 4}
X = 4
<strong>Output:&nbsp;</strong>4
<strong>Explanation</strong>: Because element 4 appears 
only once at index 4.</span></pre>
<p><br><span style="font-size: 18px;"><strong>Your Task:&nbsp;&nbsp;</strong><br>You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>leftIndex()</strong>&nbsp;which takes the array arr[], its size N<strong>&nbsp;</strong>and an integer X<strong>&nbsp;</strong>as input parameters&nbsp;and returns the leftmost occurrence of X&nbsp;in arr[]. If X&nbsp;is not present in the array, return <strong>-1</strong>.</span></p>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(LogN)<br><strong>Expected Auxiliary Space:</strong> O(1)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 &lt;= N &lt;= 10<sup>6</sup></span><br><span style="font-size: 18px;">-10<sup>5&nbsp;</sup>&lt;= arr[i] &lt;= 10<sup>5</sup><br>Array may contain duplicate elements.&nbsp;</span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Searching</code>&nbsp;<code>Algorithms</code>&nbsp;