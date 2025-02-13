<h2><a href="https://www.geeksforgeeks.org/problems/water-the-plants--141631/1?page=1&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Closest Similar Elements</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Geek has an integer array <strong>arr </strong>of size <strong>n</strong>&nbsp;and integers <strong>indexDifference, valueDifference.</strong> Geek needs to find a pair of indexes (i, j) which follows all the given conditions<br></span></p>
<ul>
<li><strong><span style="font-size: 18px;">i != j</span></strong></li>
<li><strong><span style="font-size: 18px;">abs(i - j) &lt;= indexDifference</span></strong></li>
<li><strong><span style="font-size: 18px;">abs(Arr[i] - Arr[j]) &lt;= valueDifference</span></strong></li>
</ul>
<p><span style="font-size: 18px;">Geek needs your help to find out if such a pair, return <strong>True</strong> if such a pair exists else return <strong>False</strong>.</span></p>
<p><span style="font-size: 18px;"><strong>Examples :</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>n = 4, arr[] = {1, 2, 3, 1}, indexDifference = 3, valueDifference = 0
<strong>Output: </strong>True
<strong>Explanation: </strong>The index i = 0 and j = 3 follows all the given conditions hence the output is <strong>True</strong>.</span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>n = 6, arr[] = {1, 5, 9, 1, 5, 9}, indexDifference = 2, valueDifference = 3
<strong>Output: </strong>False
<strong>Explanation: </strong>No pair of indexes follow all the given conditions hence the output is <strong>False</strong>.</span></pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(nlogn)<br><strong>Expected Auxiliary Space:</strong> O(n)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ n ≤ 10<sup>5</sup><br>-10<sup>9</sup> ≤ arr[i] ≤ 10<sup>9</sup></span></p></div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Microsoft</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Greedy</code>&nbsp;<code>Sorting</code>&nbsp;<code>Algorithms</code>&nbsp;