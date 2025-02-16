<h2><a href="https://www.geeksforgeeks.org/problems/keep-indices-after-sorting/1?page=1&difficulty=Easy&status=unsolved,attempted&sortBy=accuracy">Keep Indices After Sorting</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">You are given an integer array <strong>arr[]</strong>. You need to create an ArrayList of objects of class <strong>ArrItem</strong> and then you have to sort this ArrayList by the first field. The sorting has to be done in increasing order. If the item field clashes then sort by index field in increasing order.</span></p>
<p><strong><span style="font-size: 18px;">Examples:</span></strong></p>
<pre><span style="font-size: 18px;"><strong>Input</strong>: arr[] = [5, 5, 4, 3, 2, 5]
<strong>Output: </strong>(2,4) (3,3) (4,2) (5,0) (5,1) (5,5)</span>
<span style="font-size: 18px;"><strong>Explanation: </strong>Elements are sorted in increasing order and are printed in the format (item, index).</span>
</pre>
<pre><span style="font-size: 18px;"><strong>Input</strong>: arr[] = [8, 5, 99, 1]
<strong>Output: </strong>(1,3) (5,1) (8,0) (99,2)</span>
<span style="font-size: 18px;"><strong>Explanation: </strong>Elements are sorted in increasing order and are printed in the format (item, index).</span></pre>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ arr.length ≤ 10<sup>3</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Java</code>&nbsp;<code>Java-Collections</code>&nbsp;