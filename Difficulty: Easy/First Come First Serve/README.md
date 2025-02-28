<h2><a href="https://www.geeksforgeeks.org/problems/first-come-first-serve1328/1?page=1&category=Arrays&status=unsolved,attempted&sortBy=accuracy">First Come First Serve</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">You are given an array<strong> arr[]</strong>, containing the IDs of users in chronological order of their occurrences. Find the first user who has exactly <strong>k</strong> occurrences. <br></span><span style="font-size: 18px;">If no such user exists, return -1.</span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [1, 7, 4, 3, 4, 8, 7] , k = 2
<strong>Output:</strong> 7
<strong>Explanation</strong>: Both 7 and 4 occur 2 times. But <strong>7</strong>&nbsp;is the first that occurs 2 times.  </span></pre>
<pre><span style="font-size: 18px;"><strong>Input:</strong> arr[] = [4, 1, 6, 1, 6, 4] , k = 1 
<strong>Output:</strong> -1 
<strong>Explanation</strong>: No one occurs exactly 1 time.</span>
</pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(n).<br><strong>Expected Auxiliary Space: </strong>O(n).</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ arr.size() ≤ 10<sup>6</sup><br>1 ≤ arr[i] ≤ 10<sup>6</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Hash</code>&nbsp;<code>Data Structures</code>&nbsp;