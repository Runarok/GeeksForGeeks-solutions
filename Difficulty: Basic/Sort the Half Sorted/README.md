<h2><a href="https://www.geeksforgeeks.org/problems/sort-the-half-sorted2157/1?page=1&category=two-pointer-algorithm&status=unsolved&sortBy=accuracy">Sort the Half Sorted</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an integer array of which both the first halve and second halve are sorted. The task is to merge these two sorted halves of the array into a single sorted array.<br><strong>Note</strong>: The two halves can be of arbitrary sizes (i.e. if first halve of size k then the second halve is of size N-k where 0&lt;=k&lt;=N).</span></p>
<p><span style="font-size: 18px;"><strong>Example 1:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:
</strong>N = 6
arr[] = {2 3 8 -1 7 10}
<strong>Output: </strong>-1 2 3 7 8 10 
<strong>Explanation: </strong>{2 3 8} and {-1 7 10} are sorted 
in the original array. The overall sorted 
version is {-1 2 3 7 8 10}</span></pre>
<p><span style="font-size: 18px;"><strong>Example 2:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong>
N = 5
arr[] = {-4 6 9 -1 3}
<strong>Output: </strong>-4 -1 3 6 9 
<strong>Explanation: </strong>{-4 -1} and {3 6 9} are sorted 
in the original array. The overall sorted 
version is {-4 -1 3 6 9}</span></pre>
<p><br><strong>Your Task:</strong><br><span style="font-size: 18px;">You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>sortHalves ()&nbsp;</strong>which takes the array arr[] and its size n as inputs and modifies the array such that it gets sorted completely.</span></p>
<p><br><span style="font-size: 18px;"><strong>Expected Time Complexity:&nbsp;</strong>O(n).<br><strong>Expected Auxiliary Space:&nbsp;</strong>O(n).</span></p>
<p><br><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 &lt;= N &lt;= 10<sup>6</sup></span></p>
<p>&nbsp;</p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>two-pointer-algorithm</code>&nbsp;<code>Sorting</code>&nbsp;<code>Algorithms</code>&nbsp;