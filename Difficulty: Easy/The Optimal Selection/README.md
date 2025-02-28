<h2><a href="https://www.geeksforgeeks.org/problems/the-optimal-selection5413/1?page=1&category=Arrays&status=unsolved,attempted&sortBy=accuracy">The Optimal Selection</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 14pt;">Given an array <strong>arr[] </strong>of positive integers, you need to select all integers from the array in an order that maximizes the total points. For each selected integer, the points earned are equal to the integer's value multiplied by the number of integers already selected before it. Calculate the maximum points possible and return the result modulo </span><span class="katex"><strong><span class="katex-mathml" style="font-size: 14pt;">10^9 + 7</span></strong><span class="katex-html" aria-hidden="true"><span class="base"><span style="font-size: 14pt;"><span class="mord">.</span></span></span></span></span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong style="font-size: 18px;">Input:</strong><span style="font-size: 18px;"> arr[] = [1, 2, 2, 4, 9]
</span><strong style="font-size: 18px;">Output:</strong><span style="font-size: 18px;"> 54
</span><strong style="font-size: 18px;">Explanation:</strong><span style="font-size: 18px;">
Select 1: Points = 1 * 0 = 0
Select 2: Points = 2 * 1 = 2
Select 2: Points = 2 * 2 = 4
Select 4: Points = 4 * 3 = 12
Select 9: Points = 9 * 4 = 36
Total Points: 0 + 2 + 4 + 12 + 36 = 54.</span></span></pre>
<pre><span style="font-size: 18px;"><strong>Input:</strong> arr[] = [2, 2, 2, 2] <strong>
Output:</strong> 12 </span></pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(nlogn)<br><strong>Expected Auxiliary Space:</strong> O(1)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints :</strong><br>1 ≤ arr.size() ≤ 10<sup>5</sup><br>1 ≤ arr[i] ≤ 10<sup>5</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Sorting</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;