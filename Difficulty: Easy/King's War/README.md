<h2><a href="https://www.geeksforgeeks.org/problems/kings-war2448/1?page=2&category=Arrays&status=unsolved,attempted&sortBy=accuracy">King's War</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">You are given an array <strong>arr[]</strong> where each element arr[i] represents the power of the i-th enemy. You can only defeat enemies with the highest and lowest power, and each soldier can defeat only one enemy. Your task is to calculate the number of soldiers required.</span></p>
<p><span style="font-size: 18px;"><strong>Note:</strong> The array may contain duplicate values.</span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [1, 5]
<strong>Output: </strong>0
<strong>Explanatation: </strong>The king will itself be able to defeat all the enemies.</span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [1, 2, 5]
<strong>Output: </strong>1</span>
<span style="font-size: 18px;"><strong>Explanatation: </strong></span><span style="font-size: 18px;">The king will defeat enemies with power 1 and 5, and he will need 1 soldier to defeat the enemy with power 2.</span></pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(n)<br><strong>Expected Auxiliary Space:</strong> O(1)</span><br>&nbsp;<br><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ arr.size() ≤ 10<sup>6 </sup><br>1 ≤ arr[i] ≤ 10<sup>6</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Data Structures</code>&nbsp;