<h2><a href="https://www.geeksforgeeks.org/problems/reducing-walls4443/1?page=9&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">Reducing Walls</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">You are given an array&nbsp;<strong>arr </strong>and an integer <strong>k</strong>. In one operation you can choose any element of array and decrease its value by k. You need find the minimum number of operation such that all the elements in the array becomes less or equal to k.</span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong> arr[] = [5, 3, 2, 6, 8] and k = 5
<strong>Output:</strong> 2
<strong>Explanation:</strong> Ishaan can climb a wall with height atmost 5. So he climbs the first 3 walls easily. Now he has to use his power to reduce the height of the 4th wall. After using his power, Now to climb the last wall, he again uses his power.
</span></pre>
<pre><span style="font-size: 18px;"><strong>Input:</strong> arr[] = [2, 6, 4, 8, 1, 6] and k = 4 <strong>
Output:</strong> 3 <br><strong>Explanation: </strong></span>Ishaan can climb a wall with height atmost 5. <span style="font-size: 14pt;">He can't climb the wall with height 6, 8, 6.</span></pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(n).<br><strong>Expected Auxiliary Space:</strong>&nbsp;O(1).</span></p>
<p><span style="font-size: 18px;"><strong>Constraints :</strong><br>1 ≤ arr.size() ≤ 10<sup>6</sup><br>1 ≤ k ≤ 10<sup>5</sup><br>1 ≤ arr[i] ≤ 10<sup>5</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Data Structures</code>&nbsp;