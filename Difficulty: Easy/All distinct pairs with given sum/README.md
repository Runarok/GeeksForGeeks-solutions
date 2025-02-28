<h2><a href="https://www.geeksforgeeks.org/problems/all-distinct-pairs-with-given-sum/1?page=2&category=Arrays&status=unsolved,attempted&sortBy=accuracy">All distinct pairs with given sum</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an array&nbsp;<strong>arr[]</strong>&nbsp;and an integer&nbsp;<strong>target</strong>.&nbsp;</span><span style="font-size: 18px;">You have to find all <strong>distinct</strong> pairs in array <strong>arr[]</strong>&nbsp;which sums up to given&nbsp;<strong>target.</strong></span></p>
<p><span style="font-size: 18px;"><strong>Note:&nbsp;</strong></span></p>
<ol>
<li><span style="font-size: 18px;">(a, b) and (b, a) are considered the same. Also, the same numbers at different indices are considered same.</span></li>
<li><span style="font-size: 14pt;">Return the list of pairs sorted lexicographically by the first element, and then by the second element if necessary.</span></li>
</ol>
<p><strong style="font-size: 18px;">Examples:</strong></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong></span><span style="font-size: 18px;">arr[] = [1, 5, 7, -1, 5], target = 6 </span><span style="font-size: 18px;">
<strong>Output: </strong>[[1, 5], [-1, 7]]<strong>
Explanation: </strong></span><span style="font-size: 18px;">Pairs with sum 6 are (1, 5) and (-1, 7). </span></pre>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>arr[] = [1, 1, 1, 1], target = 2 
<strong>Output: </strong>[[1, 1]]<strong>
Explanation: </strong></span><span style="font-size: 18.6667px;">Pairs with sum 2 are (1, 1).</span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [10, 12, 10, 15, -1],</span><span style="font-size: 18px;"> target = 125</span><span style="font-size: 18px;">
<strong>Output: </strong>[]</span></pre>
<p><span style="font-size: 18px;"><strong>Constraints:<br></strong>1 &lt;= arr.size() &lt;= 10<sup>5</sup><strong><br></strong></span><span style="font-size: 18px;">-10<sup>4</sup>&nbsp;&lt;= arr[i]&nbsp;</span><span style="font-size: 18px;">&lt;= 10<sup>4<br></sup></span><span style="font-size: 18px;">1 &lt;= target &lt;= 10</span><sup>4</sup></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Hash</code>&nbsp;