<h2><a href="https://www.geeksforgeeks.org/problems/minimum-swaps-for-bracket-balancing2704/1?page=1&difficulty=Medium&status=unsolved&sprint=94ade6723438d94ecf0c00c3937dad55&sortBy=accuracy">Minimum Swaps for Bracket Balancing</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 14pt;">You are given a string <strong>s</strong> of <strong>2*n</strong> characters consisting of <strong>n</strong> ‘<strong>[</strong>‘ brackets and <strong>n</strong> ‘<strong>]</strong>’ brackets. A string is considered <strong>balanced</strong> if it can be represented in the form <strong>a[b]</strong> where <strong>a</strong> and <strong>b</strong>&nbsp;are balanced strings. We can make an unbalanced string balanced by swapping <strong>adjacent</strong> characters. Calculate the <strong>minimum number of swaps</strong> necessary to make a string balanced.<br>Note - Strings <strong>a </strong>and <strong>b</strong> can be <strong>empty</strong>.</span></p>
<p><span style="font-size: 14pt;"><strong>Examples :</strong></span></p>
<pre><span style="font-size: 14pt;"><strong>Input</strong>: s = "[]][]["
<strong>Output</strong>: 2
<strong>Explanation</strong>: First swap: Position 3 and 4 [][]][, Second swap: Position 5 and 6 [][][]
</span></pre>
<pre><span style="font-size: 14pt;"><strong>Input</strong>: s = "[][]"
<strong>Output</strong> : 0 
<strong>Explanation</strong>: String is already balanced.<br></span></pre>
<pre><span style="font-size: 14pt;"><strong>Input</strong>: s = "[[[][][]]]"
<strong>Output</strong>: 0 </span></pre>
<p><span style="font-size: 14pt;"><strong>Constraints:<br></strong>1&lt;= s.size() &lt;=10<sup>5</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>Greedy</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;