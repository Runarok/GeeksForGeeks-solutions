<h2><a href="https://www.geeksforgeeks.org/problems/surpasser-count0615/1?page=1&company=Google&difficulty=Basic,Easy,Medium,Hard&status=unsolved,attempted&sortBy=submissions">Surpasser Count</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an array containing distinct integers, find the number of surpassers for each of its elements.</span></p>
<blockquote>
<p><span style="font-size: 18px;">An element <strong>y</strong> is said to be the surpasser of element <strong>x</strong> if it is a greater element on the right of x. ie if x = arr[i] and y = arr[j], i&lt;j and arr[i] &lt; arr[j].&nbsp;<br></span></p>
</blockquote>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [4, 5, 1, 2, 3]<br></span><span style="font-size: 18px;"><strong>Output:</strong> [1, 0, 2, 1, 0]</span>
<span style="font-size: 18px;"><strong>Explanation:</strong> There are no elements greater than 3 at the right of 3. There is one element at right of 2 and greater than 2. There are 2 elements greater than 1 at the right of 1. And so on.</span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [2, 7, 5, 3, 8, 1]</span>
<span style="font-size: 18px;"><strong>Output:</strong> [4, 1, 1, 1, 0, 0]</span></pre>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ arr.size() ≤ 10<sup>5</sup><br>1 ≤ arr[i] ≤ 10<sup>6</sup></span></p></div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Google</code>&nbsp;<code>Yahoo</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Data Structures</code>&nbsp;