<h2><a href="https://www.geeksforgeeks.org/problems/k-closest-points-to-origin--172242/1?page=1&difficulty=Medium&status=unsolved&sortBy=accuracy">K Closest Points to Origin</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p>Given an array of points where each point is represented as <strong>points[i] = [x<sub>i</sub>, y<sub>i</sub>]</strong> on the X-Y plane and an integer <strong>k</strong>, return the k closest points to the origin (0, 0).</p>
<p>The distance between two points on the X-Y plane is the Euclidean distance, defined as:&nbsp;</p>
<p style="text-align: center;"><strong>sqrt( (x<sub>2</sub> - x<sub>1</sub>)<sup>2</sup> + (y<sub>2</sub> - y<sub>1</sub>)<sup>2</sup> )</strong></p>
<p>You can return the <strong>k</strong> closest points in any order. The answer is guaranteed to be unique.</p>
<p><strong>Examples:</strong></p>
<pre><strong>Input:</strong> k = 2, points[] = [[1, 3], [-2, 2], [5, 8], [0, 1]]<br><strong>Output:</strong> [[-2, 2], [0, 1]]<br><strong>Explanation:</strong> The Euclidean distances from the origin are:<br>Point (1, 3) = sqrt(10)<br>Point (-2, 2) = sqrt(8)<br>Point (5, 8) = sqrt(89)<br>Point (0, 1) = sqrt(1)<br>The two closest points to the origin are [-2, 2] and [0, 1].</pre>
<pre><strong>Input:</strong> k = 1, points = [[2, 4], [-1, -1], [0, 0]]<br><strong>Output:</strong> [[0, 0]]<br><strong>Explanation: </strong>The Euclidean distances from the origin are:<br>Point (2, 4) = sqrt(20)<br>Point (-1, -1) = sqrt(2)<br>Point (0, 0) = sqrt(0)<br>The closest point to origin is (0, 0)</pre>
<p><strong>Constraints:</strong></p>
<ul>
<li>1 &lt;= k &lt;= points.size()&lt;= 10<sup>5</sup></li>
<li>-10<sup>4</sup> &lt;= x<sub>i</sub>, y<sub>i</sub> &lt;= 10<sup>4</sup></li>
</ul></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Sorting</code>&nbsp;<code>Heap</code>&nbsp;<code>Mathematical</code>&nbsp;<code>priority-queue</code>&nbsp;<code>Divide and Conquer</code>&nbsp;<code>Geometric</code>&nbsp;<code>Arrays</code>&nbsp;