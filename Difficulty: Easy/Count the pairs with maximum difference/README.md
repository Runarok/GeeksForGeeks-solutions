<h2><a href="https://www.geeksforgeeks.org/problems/count-the-pairs-with-maximum-difference4807/1?page=1&category=Arrays&status=unsolved,attempted&sortBy=accuracy">Count the pairs with maximum difference</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an array <strong>arr[] </strong>of integers, the task is to find the number of ways to choose pairs <strong>{arr[i], arr[j]}</strong> such that their absolute difference is&nbsp;maximum.</span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [3, 2, 1, 1, 3]
<strong>Output: </strong>4</span>
<span style="font-size: 18px;"><strong>Explanation:</strong>
The maximum difference you can find is 2
which is from 3 - 1 = 2.
Number of ways of choosing it:
1) Choosing the first and third element
2) Choosing the first and fourth element
3) Choosing the third and fifth element
4) Choosing the fourth and fifth element
Hence, the answer is 4.</span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [1,2]
<strong>Output: </strong>1</span></pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong>&nbsp;O(n).<br><strong>Expected Auxiliary Space:</strong>&nbsp;O(1).</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ arr.size() ≤ 10<sup>6</sup><br>1 ≤ arr[i] ≤ 10<sup>6</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Mathematical</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;