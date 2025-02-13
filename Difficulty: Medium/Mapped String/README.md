<h2><a href="https://www.geeksforgeeks.org/problems/mapped-string0501/1?page=1&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Mapped String</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given <strong>N</strong>&nbsp;unique characters (in infinite supply),&nbsp;find the number of possible mapped strings&nbsp;of length <strong>N</strong>.<br>A mapped string follows following properties:<br>1. Both left and right halves of the string contains same set of&nbsp;characters.<br>2. Each half contains <strong>N / 2 </strong>unique characters.<br>For example: “<strong>abccba</strong>” is Mapped string since the left and right halves&nbsp;contain unique characters and both halves contain same set of characters but "<strong>abcbcd</strong>" is not.<br>As the answer can be very large, find it modulo 10<sup>9</sup> + 7.<br><strong>Note</strong>: <strong>N</strong> is always even.</span></p>
<p><span style="font-size: 18px;"><strong>Example 1:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input</strong>: N = 2
<strong>Output:</strong>&nbsp;2&nbsp;
<strong>Explanation</strong>: Suppose two unique characters
are 'a' and 'b', then there will be two 
mapped strings - 'aa' and 'bb'.
</span></pre>
<p><span style="font-size: 18px;"><strong>Example 2:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>N = 4
<strong>Output:&nbsp;</strong>24
<strong>Explanation</strong>: Suppose four unique characters
are 'a', 'b', 'c' and 'd' and for each pair of
them there will be four mapped strings. Hence, 
there are total 6 pairs so 6 * 4 = 24 total 
mapped strings.</span></pre>
<p><span style="font-size: 18px;"><strong>Your Task:&nbsp;&nbsp;</strong><br>You dont need to read input or print anything. Complete the function <strong>mapStr()&nbsp;</strong>which takes N&nbsp;as input parameter and returns the number of possible mapped strings&nbsp;of length N.</span></p>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(N)<br><strong>Expected Auxiliary Space:</strong> O(N)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>2 ≤ N&nbsp;≤ 100000</span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>Combinatorial</code>&nbsp;<code>Data Structures</code>&nbsp;