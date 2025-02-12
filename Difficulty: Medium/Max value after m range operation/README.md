<h2><a href="https://www.geeksforgeeks.org/problems/max-value-after-m-range-operation4300/1?page=6&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Max value after m range operation</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p>Given an array <code>arr</code> of size <strong><code>n</code></strong>, with all initial values set to <code>0</code>, the task is to perform a series of range increment operations as described below:</p>
<p><strong>Increment(ai, bi, ki):</strong><br>Increment the values in <code>arr</code> from index <strong><code>ai</code></strong> to <strong><code>bi</code></strong> (both inclusive) by <strong><code>ki</code></strong>.</p>
<p>After performing <code>m</code> operations, calculate the maximum value in the array <code>arr[]</code>.</p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>n = 5, a[] = [0, 1, 2], b[] = [1, 4, 3], k[] = [100, 100, 100]
<strong>Output:</strong> 200
<strong>Explanation</strong>: <br>Initially, arr = [0, 0, 0, 0, 0]
After the first operation: arr = [100, 100, 0, 0, 0]
After the second operation: arr = [100, 200, 100, 100, 100]
After the third operation: arr = [100, 200, 200, 200, 100]
The maximum element after all operations is 200.</span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>n = 4, a[] = [1, 0, 3], b[] = [2, 0, 3], k[] = [603, 286, 882]
<strong>Output:</strong> 882
<strong>Explanation</strong>: <br>Initially, arr = [0, 0, 0, 0]
After the first operation: arr = [0, 603, 603, 0]
After the second operation: arr = [286, 603, 603, 0]
After the third operation: arr = [286, 603, 603, 882]
The maximum element after all operations is 882.</span></pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(m + n), m is the number of operations.<br><strong>Expected Auxiliary Space:</strong> O(n).</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ n ≤ 10<sup>6<br></sup></span><span style="font-size: 18px;">1 ≤ a.size() = b.size() = k.size() ≤ 10</span><sup>6</sup><br><span style="font-size: 18px;">0 ≤ a<sub>i </sub> ≤ b<sub>i</sub> ≤ n-1<br></span><span style="font-size: 18px;">0 ≤ k<sub>i</sub> ≤ 10<sup>6</sup></span></p></div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>FactSet</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>prefix-sum</code>&nbsp;<code>Arrays</code>&nbsp;<code>Mathematical</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;