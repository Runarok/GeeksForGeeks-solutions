<h2><a href="https://www.geeksforgeeks.org/problems/the-light-problem4217/1?page=3&category=Arrays&status=unsolved,attempted&sortBy=accuracy">The Light Problem</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 14pt;">You are given some cubicles placed in a straight line. Each cubicle may have a light bulb that can brighten itself and up to <strong>k</strong> cubicles on either side. The array A represents the presence of bulbs in cubicles: arr[i] = 1 indicates a bulb is present, and arr[i] = 0 indicates no bulb. Your task is to determine if all cubicles can be brightened.</span></p>
<p><span style="font-size: 14pt;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 14pt;"><strong>Input:</strong> arr[] = [0, 1, 0, 1], k = 3
<strong>Output:</strong> true
<strong>Explaination:</strong> The first cubicle can be brightened by 2nd cubicle. The third cubicle can be brightened by 4th cubicle.</span></pre>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>arr[] = [1, 0, 0, 0, 0, 0, 1], k = 2
<strong>Output:</strong> false
<strong>Explaination:</strong> The fourth cubicle cannot be brightened in any way.</span></pre>
<p><span style="font-size: 14pt;"><strong>Expected Time Complexity:</strong> O(n)<br><strong>Expected Auxiliary Space:</strong> O(1)</span></p>
<p><span style="font-size: 14pt;"><strong>Constraints:</strong><br>1 ≤ arr.size() ≤ 10<sup>6</sup><br>1 ≤ k ≤ 10<sup>2</sup><br>0 ≤ arr[i] ≤ 1&nbsp;</span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Misc</code>&nbsp;<code>Data Structures</code>&nbsp;