<h2><a href="https://www.geeksforgeeks.org/problems/start-elements3447/1?page=3&company=Amazon&status=unsolved,attempted&sortBy=accuracy">Star elements</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an unsorted array <strong>arr</strong>. Find all the star elements in the array. Star elements are those elements that are strictly greater than all the elements on its right side.</span></p>
<p><span style="font-size: 18px;"><strong>Note: </strong>Assume the first element is greater than all the elements on its left side and the last element is greater than all the elements on its right side.</span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [1, 6, 5, 4, 7, 8, 4, 3, 2, 1]
<strong>Output:</strong> [8, 4, 3, 2, 1] 
<strong>Explanation:</strong> Star elements are 8, 4, 3, 2 and 1.
</span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [1, 2, 10, 3, 4, 5, 8, 10, 4]
<strong>Output:</strong> [10, 4] 
<strong>Explanation:</strong> Star elements are 10 and 4.
</span></pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong>&nbsp;O(n)<br><strong>Expected Auxiliary Space:</strong> O(n)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 &lt;= arr.size() &lt;= 10<sup>6</sup><br>0 &lt;= arr[i] &lt;= 10<sup>6</sup></span></p></div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Amazon</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Data Structures</code>&nbsp;