<h2><a href="https://www.geeksforgeeks.org/problems/strange-sort4316/1?page=1&category=Arrays&status=attempted&sortBy=accuracy">Strange Sort</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an array <strong>arr[]</strong> of non-negative integers. Sort the array in ascending order such that the element at the Kth position in the unsorted array stays unmoved and all other elements are sorted.&nbsp;</span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [3, 12, 30, 79, 2] , k=2
<strong>Output:</strong> [2, 12, 3, 30, 79]
<strong>Explanation</strong>: The element at the 2nd position (12) remains at its own place while others are sorted.</span>
</pre>
<pre><span style="font-size: 18px;"><strong>Input</strong>: arr[] = [16, 16, 18, 10, 9, 22, 11, 5, 35, 22] , k=5</span><span style="font-size: 18px;">
<strong>Output:</strong> [5, 10, 11, 16, 9, 16, 18, 22, 22, 35]
<strong>Explanation</strong>: The element at the 5th position (9) remains at its own place while others are sorted.</span></pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:&nbsp;</strong>O(nlogn)<br><strong>Expected Auxiliary Space:&nbsp;</strong>O(1)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1&lt;=arr.size()&lt;=10<sup>6</sup><br>1&lt;=k&lt;=arr.size()</span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Sorting</code>&nbsp;<code>STL</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;