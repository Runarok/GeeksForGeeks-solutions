<h2><a href="https://www.geeksforgeeks.org/problems/point-lies-or-not0417/1?page=30&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">Point lies or not</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given three corner points of a triangle(with coordinates (x1,y1), (x2,y2), and (x3,y3)), and one more point P. Write a function to check whether P lies within the triangle or not.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>x1 = </strong>0, <strong>y1 = </strong>0, <strong>x2 = </strong>20, <strong>y2 = </strong>0, 
<strong>x3 = </strong>10, <strong>y3 = </strong>30</span><strong>, </strong><span style="font-size:18px"><strong>x = </strong>10, <strong>y</strong><strong> = </strong>15</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">Yes</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">The point (x,y) lies within the 
Triangle.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>x1 = </strong>0, <strong>y1 = </strong>0, <strong>x2 = </strong>20, <strong>y2 = </strong>20, 
<strong>x3 = </strong>20, <strong>y3 = </strong>0</span><strong>, </strong><span style="font-size:18px"><strong>x = </strong>30, <strong>y</strong><strong> = </strong>0</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">No</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">The point (x,y) doesn't lie within the Triangle.</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>isInsideTri()</strong> which takes eight Integers&nbsp;x1,x2,x3,y1,y2,y3,x, and y as input and returns "Yes" if the Point lies inside the Triangle else returns "No".</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(1)<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong></span><br>
<span style="font-size:18px">1 ≤ x1,x2,x3,y1,y2,y3 ≤ 10<sup>4</sup><br>
1 ≤ x,y ≤ 10<sup>4</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;