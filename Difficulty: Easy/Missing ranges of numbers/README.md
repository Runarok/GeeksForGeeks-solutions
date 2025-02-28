<h2><a href="https://www.geeksforgeeks.org/problems/missing-ranges-of-numbers1019/1?page=2&category=Arrays&status=unsolved,attempted&sortBy=accuracy">Missing ranges of numbers</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">You have an inclusive interval&nbsp;<strong>[lower, upper]</strong>&nbsp;and a sorted array of unique integers&nbsp;<strong>arr[]</strong>, all of which lie within this interval. A number&nbsp;<strong>x</strong> is considered missing if x is in the range [lower, upper] but not present in arr[]. Your task is to return the smallest set of sorted ranges that includes all missing numbers, ensuring no element from arr is within any range, and every missing number is covered exactly once.</span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [14, 15, 20, 30, 31, 45], lower = 10, upper = 50
<strong>Output:</strong> [[10, 13], [16, 19], [21, 29], [32, 44], [46, 50]]
<strong>Explanation:</strong> These ranges represent all missing numbers between 10 and 50 not present in the array.</span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [-48, -10, -6, -4, 0, 4, 17], lower = -54, upper = 17
<strong>Output:</strong> [[-54, -49], [-47, -11], [-9, -7], [-5, -5], [-3, -1], [1, 3], [5,16]]
<strong>Explanation:</strong> These ranges cover all missing numbers between -54 and 17 not included in the array.</span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [15, 16, 17, 18], lower = 15, upper = 18
<strong>Output:</strong> []
<strong>Explanation:</strong> Since all numbers from 15 to 18 are present in the array, there are no missing intervals.
</span></pre>
<p><span style="font-size: 18px;"><strong>Constraints:<br></strong></span><span style="font-size: 18px;">-10<sup>9</sup>&nbsp;&lt;= lower, upper &lt;= 10<sup>9<br></sup></span><span style="font-size: 18px;">1 &lt;= arr.size() &lt;= 10<sup>5<br></sup></span><span style="font-size: 18px;">lower &lt;= arr[i] &lt;= upper</span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Data Structures</code>&nbsp;