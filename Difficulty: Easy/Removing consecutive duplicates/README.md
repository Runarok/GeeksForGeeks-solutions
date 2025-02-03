<h2><a href="https://www.geeksforgeeks.org/problems/removing-consecutive-duplicates-1587115621/1?page=1&category=Stack&difficulty=Easy,Medium,Hard&status=unsolved,attempted&sortBy=accuracy">Removing consecutive duplicates</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">You are given string <strong>s</strong>. You need to remove the consecutive duplicates from the given string using a Stack. </span>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input</strong>: s = "aaaaaabaabccccccc"
<strong>Output</strong>: ababc
<strong>Explanation</strong>: The order is in the following way 6-&gt;a, 1-&gt;b, 2-&gt;a, 1-&gt;b, 7-&gt;c. So, only one element from each group will remain and rest all are removed. Therefore, final string will be:- ababc.</span></pre>
<pre><span style="font-size: 18px;"><strong>Input</strong>: s = "abbccbcd"
<strong>Output</strong>: abcbcd
<strong>Explanation</strong>: The order is in the following way 1-&gt;a, 2-&gt;b, 2-&gt;c, 1-&gt;b, 1-&gt;c, 1-&gt;d. So, only one element from each group will remain and rest all are removed. Therefore, final string will be:- abcbcd.</span> </pre>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 &lt;= |s| &lt;= 10<sup>3</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Stack</code>&nbsp;<code>Data Structures</code>&nbsp;