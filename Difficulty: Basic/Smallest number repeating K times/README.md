<h2><a href="https://www.geeksforgeeks.org/problems/smallest-number-repeating-k-times3239/1?page=1&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">Smallest number repeating K times</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an array <strong>arr</strong>, the goal is to find out the smallest number that is repeated exactly ‘<strong>k</strong>’ times.<br></span><span style="font-size: 18px;"><strong>Note:</strong>&nbsp;If there is no such element then return&nbsp;<strong>-1</strong>.</span></p>
<p><span style="font-size: 18px;"><strong>Example:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [2, 2, 1, 3, 1], k = 2
<strong>Output:</strong> 1
<strong>Explanation</strong>: Here in array, 2 is repeated 2 times, 1 is repeated 2 times, 3 is repeated 1 time. Hence 2 and 1 both are repeated 'k' times i.e 2 and min(2, 1) is 1 .</span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [3, 5, 3, 2], k = 1
<strong>Output:</strong>  2 
<strong>Explanation: </strong>Both 2 and 5 are repeating 1 time but min(5, 2) is 2.</span></pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(n)<br><strong>Expected Auxiliary Space:</strong> O(n)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ arr.size() ≤ 10<sup>6</sup><br>1 ≤ arr[i] ≤ 10<sup>4</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Hash</code>&nbsp;<code>Data Structures</code>&nbsp;