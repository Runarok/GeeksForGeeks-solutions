<h2><a href="https://www.geeksforgeeks.org/problems/count-increasing-subsequences3134/1?page=1&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Count Increasing Subsequences</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an array <strong>arr[] </strong>consisting of digits (where each digit ranges from 0 to 9), the task is to count all possible subsequences within the array where each digit in the subsequence is strictly greater than the previous digit. The final count should be returned modulo <strong>10<sup>9</sup>+7.</strong></span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [1, 2, 3, 4]
<strong>Output: </strong>15
<strong>Explanation: </strong>There are total increasing subsequences {1}, {2}, {3}, {4}, {1,2}, {1,3}, {1,4}, {2,3}, {2,4}, {3,4}, {1,2,3}, {1,2,4}, {1,3,4}, {2,3,4}, {1,2,3,4}.</span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [4, 3, 6, 5]
<strong>Output: </strong>8
<strong>Explanation: </strong>Sub-sequences are {4}, {3}, {6}, {5}, {4,6}, {4,5}, {3,6}, {3,5}.</span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [3, 2, 4, 5, 4]
<strong>Output: </strong>14
<strong>Explanation: </strong>Sub-sequences are {3}, {2}, {4}, {3,4}, {2,4}, {5}, {3,5}, {2,5}, {4,5}, {3,2,5}, {3,4,5}, {4}, {3,4}, {2,4}.</span>
</pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(n)<br><strong>Expected Auxiliary Space:</strong> O(1)</span><br><br><span style="font-size: 18px;"><strong>Constraints: </strong><br>1 ≤ arr.size() ≤ 10<sup>6</sup><br>1 ≤ arr[i] ≤ 9</span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Dynamic Programming</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;