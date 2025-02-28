<h2><a href="https://www.geeksforgeeks.org/problems/tracks0436/1?page=1&category=Arrays&status=unsolved,attempted&sortBy=accuracy">Tracks</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">You are given an array <strong>arr[]</strong> representing the heights of pillars on a track. The track is considered valid if it satisfies the following conditions:</span></p>
<p><span style="font-size: 18px;">1)There is a constant, non-zero difference between the heights of consecutive pillars.</span></p>
<p><span style="font-size: 18px;">2)The height of the middle pillar must be exactly 1.</span></p>
<p><span style="font-size: 18px;">3)The number of pillars on both sides of the middle pillar must be equal, and the heights of the corresponding pillars on each side must be identical.</span></p>
<p><span style="font-size: 18px;">Return true if the track is valid, otherwise, return false.</span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [2, 1, 2]
<strong>Output: </strong>true<br><strong>Explanation:</strong> The track is valid because it has a constant height difference of 1, the middle pillar is 1, and both sides of the middle pillar have an equal number of identical height pillars.</span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [4, 3, 2, 3, 4]
<strong>Output: </strong>false</span></pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(n)<br><strong>Expected Auxiliary Space:</strong> O(1)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>3 &lt;= arr.size()&lt;= 10<sup>6</sup><br>1 &lt;= arr[i] &lt;= 10<sup>6</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Mathematical</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;