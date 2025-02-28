<h2><a href="https://www.geeksforgeeks.org/problems/minimum-element-whose-n-th-power-is-greater-than-product-of-an-array4640/1?page=3&category=Arrays&status=unsolved,attempted&sortBy=accuracy">Minimum element whose N-th power is greater than product of an array</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 14pt;">Given an array <strong>arr</strong> of integers, your task is to determine the minimum positive integer <strong><code>x</code></strong> such that when each element in the array is replaced by <code>x</code>, the product of the new array is strictly greater than the product of the original array.</span></p>
<p><span style="font-size: 14pt;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 14pt;"><strong>Input:</strong> arr[] = [4, 2, 1, 10, 6]
<strong>Output:</strong> 4<br><strong>Explanation:</strong>
The product of the initial array is: 4 * 2 * 1 * 10 * 6 = 480.
To find the smallest x, we check:
If x = 4: Product of new array = 4 * 4 * 4 * 4 * 4 = 1024 (greater than 480).
If x = 3: Product of new array = 3 * 3 * 3 * 3 * 3 = 243 (less than 480).
Thus, the minimum required x is 4.<br></span></pre>
<pre><span style="font-size: 14pt;"><strong>Input :</strong> arr[] = [3, 2, 1, 4]
<strong>Output :</strong> 3<br><strong>Explanation:</strong>
The product of the initial array is: 3 * 2 * 1 * 4 = 24.
To find the smallest x, we check:
If x = 3: Product of new array = 3 * 3 * 3 * 3 = 81 (greater than 24).
If x = 2: Product of new array = 2 * 2 * 2 * 2 = 16 (less than 24).
Thus, the minimum required x is 3.</span></pre>
<p><span style="font-size: 14pt;"><strong>Expected Time Complexity:</strong> O(n)<br><strong>Expected Auxiliary Space:</strong>&nbsp;O(1).</span></p>
<p><span style="font-size: 14pt;"><strong>Constraints:</strong><br>2 ≤ arr.size() ≤ 10<sup>6</sup><br>1 ≤ arr[i] ≤ 10<sup>4</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Mathematical</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;