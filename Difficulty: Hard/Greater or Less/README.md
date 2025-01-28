<h2><a href="https://www.geeksforgeeks.org/problems/greater-or-less--170646/1?page=5&difficulty=Hard&status=unsolved&sortBy=accuracy">Greater or Less</a></h2><h3>Difficulty Level : Difficulty: Hard</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given an array of&nbsp;integers of size N. For each&nbsp;<strong>ith</strong>&nbsp;element in the array, calculate the absolute difference between the count of numbers that are to the left of&nbsp;<strong>i</strong>&nbsp;and are strictly greater than&nbsp;<strong>ith</strong>&nbsp;element, and the count of numbers that are to the right of&nbsp;<strong>i</strong>&nbsp;and are strictly lesser than&nbsp;<strong>ith</strong>&nbsp;element.</span></p>

<p><br>
<span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>:
N = 5
A[] = {5, 4, 3, 2, 1}
<strong>Output:</strong>&nbsp;4 2 0 2 4&nbsp;
<strong>Explanation</strong>: We can see that the 
required number for the 
1st element is |0-4| = 4
</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N = 5
A[] = {1, 2, 3, 4, 5}
<strong>Output:&nbsp;</strong>0 0 0 0 0
<strong>Explanation</strong>: There is no greater 
element on the left for any element 
and no lesser element on the right.</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:&nbsp;&nbsp;</strong><br>
You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>greaterLesser()</strong>&nbsp;which takes the array arr[], its size Nas input parameters&nbsp;and returns the required array.</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(N log N)<br>
<strong>Expected Auxiliary Space:</strong> O(N)</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤&nbsp;N ≤ 10<sup>5</sup><br>
-10<sup>9</sup><sup>&nbsp;</sup>≤&nbsp;arr[i] ≤ 10<sup>9</sup><br>
Array can contain duplicate elements.&nbsp;</span></p>
</div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>MakeMyTrip</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Segment-Tree</code>&nbsp;<code>Advanced Data Structure</code>&nbsp;