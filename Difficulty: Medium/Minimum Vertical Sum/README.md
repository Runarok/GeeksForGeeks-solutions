<h2><a href="https://www.geeksforgeeks.org/problems/minimum-vertical-sum-1593518814/1?page=1&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Minimum Vertical Sum</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an ArrayList of ArrayLists <strong>arr[][]</strong>. Find the <strong>minimum vertical sum.</strong> ArrayLists inside the ArrayList <strong>arr </strong>may not be of the same size.</span></p>
<p><strong><span style="font-size: 18px;">Example:</span></strong></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr = [[2, 3, 5], [1, 2], [1, 4, 5, 1]]</span>
<span style="font-size: 18px;"><strong>Output: </strong>1</span>
<strong><span style="font-size: 18px;">Explanation:</span></strong><span style="font-size: 18px;">
2 3 5
1 2
1 4 5 1
So, the vertical sums are [2+1+1], [3+2+4], [5+5], [1]. 1 is the minimum vertical sum.</span></pre>
<pre><strong><span style="font-size: 18px;">Input: </span></strong><span style="font-size: 18px;">arr = [[1, 2, 3, 4], [3, 3], [1, 2, 5, 9]]<br><strong>Output:</strong> 5<br><strong>Explanation:</strong><br>1 2 3 4<br>3 3<br>1 2 5 9<br>So, the vertical sums are [1+3+1], [2+3+2], [3+5], [4+9]. 5 is the minimum vertical sum.</span></pre>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 &nbsp;&lt;= &nbsp;arr.size() &nbsp;&lt;= &nbsp;10<sup>3</sup><br>1 &nbsp;&lt;= &nbsp;arr.get(i).size() &nbsp;&lt;= &nbsp;10<sup>3</sup><br>1 &nbsp;&lt;= &nbsp;arr<sub>ij</sub>&nbsp; &lt;= &nbsp;10<sup>5</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Java</code>&nbsp;<code>Java-Collections</code>&nbsp;