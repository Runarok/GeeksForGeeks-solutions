<h2><a href="https://www.geeksforgeeks.org/problems/max-sum-without-adjacents-2/1?page=1&difficulty=Medium&status=unsolved&sprint=94ade6723438d94ecf0c00c3937dad55&sortBy=accuracy">Max Sum without Adjacents 2</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an array <strong>a</strong><strong>rr</strong>&nbsp;containing positive integers. Find the maximum sum that can be formed which has no three consecutive elements present from the array.</span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong> arr[] = [1, 2, 3]
<strong>Output:</strong> 5
<strong>Explanation:</strong> All three element present in the array is consecutive, hence we have to consider just two element sum having maximum,which is 2+3 = 5</span></pre>
<pre><span style="font-size: 18px;"><strong>Input:</strong> arr[] = [3000, 2000, 1000, 3, 10]
<strong>Output: </strong>5013
<strong>Explanation:</strong> 3000 + 2000 + 3 + 10 = 5013. Here no three elements is consecutive in that subsequence.</span></pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(n)<br><strong>Expected Auxiliary Space:</strong> O(n)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ arr.size() ≤ 10<sup>6</sup><br>1 ≤ arr[i] ≤ 10<sup>5</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Dynamic Programming</code>&nbsp;<code>Greedy</code>&nbsp;<code>Arrays</code>&nbsp;