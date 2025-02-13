<h2><a href="https://www.geeksforgeeks.org/problems/taking-1-out-of-3-consecutives4606/1?page=1&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Taking 1 out of 3 consecutives</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 14pt;">Given an array <strong>arr[]</strong> consisting of <strong>&nbsp;</strong>non-negative integers, your task is to find the <strong>minimum sum</strong> of the array such that take one of the elements from the first 3 consecutive elements and then from the <strong>ith</strong> position where the previous element was taken, do the same operation for the next three from ith position and so on.<br></span></p>
<p><span style="font-size: 14pt;"><strong>Note: </strong>You have to take one element from 3 consecutive elements.</span><br><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [1, 2, 3, 6, 7, 1]
<strong>Output: </strong>4
<strong>Explanation: </strong>Moving from left to right 3+1. When 3 is added next 3 consecutive elements be 6, 7 and 1, from which we take 1. Which covers all subarray of lenght 3 (3+1=4).</span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[]=[3,2]
<strong>Output: </strong>0
<strong>Explanation: </strong>We won't take any element as the array length is less than 3.</span>
</pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(n)<br><strong>Expected Auxiliary Space: </strong>O(n)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ arr.size() ≤ 10<sup>6</sup><br>1 ≤ arr[i] ≤ 10<sup>6</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Dynamic Programming</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;