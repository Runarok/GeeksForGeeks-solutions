<h2><a href="https://www.geeksforgeeks.org/problems/pass-the-semester2515/1?page=26&difficulty=Medium&status=unsolved&sortBy=accuracy">Pass the semester</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Satish is preparing for an exam and knows the marks and study time for each topic, given in a 2D array <strong>arr </strong>of size<strong> n</strong> where each element is [marks, time] for each topic. Given the remaining study time before the exam <strong>w</strong>, the number of topics <strong>n</strong>, and the passing marks <strong>p</strong>, determine the maximum marks Satish can achieve by studying topics within the given time <strong>w</strong>. If it is not possible for Satish to meet or exceed the passing marks <strong>p</strong>, return -1.</span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input :</strong> arr[ ] = {{12, 10},{16, 10},{20, 10},{24, 10},{8, 3}}, n = 5, w = 40, p = 21
<strong>Output :</strong> YES 36
<strong>Explanation:</strong> Marks needed to pass the subject 10 + 10 + 3 = 23 Time taken to achieve the 23 marks : 12 + 16 + 8 =36 So, return 36.
</span></pre>
<pre><span style="font-size: 18px;"><strong><br>Input :</strong> arr[ ] = {{1, 3}, {5, 10}, {3, 12}}, n = 3, w = 9, p = 10  <strong>
Output :</strong>  YES 9</span></pre>
<p>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(n*w).<br><strong>Expected Auxiliary Space:</strong> O(n*w).</span></p>
<p>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong></span></p>
<p><span style="font-size: 18px;">1 ≤ n ≤ 1000</span></p>
<p><span style="font-size: 18px;">1 ≤ w ≤ 1000</span></p>
<p><span style="font-size: 18px;">1 ≤ p ≤ 100</span></p>
<p><span style="font-size: 18px;">1 ≤ u,v ≤ 25</span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Dynamic Programming</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;