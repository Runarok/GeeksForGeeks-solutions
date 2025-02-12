<h2><a href="https://www.geeksforgeeks.org/problems/xor-cipher3009/1?page=17&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">XOR Cipher</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given a string <strong>str</strong> created by a cypher algorithm. Find and return the original hexadecimal string.</span></p>
<p><span style="font-size: 18px;"><strong>The cypher algorithm</strong>: A hexadecimal string is XORed,&nbsp;<strong>n </strong>number of times, where <strong>n</strong> is the string length and&nbsp;every&nbsp;XOR operation is done after shifting the consecutive string<strong>&nbsp;</strong>to the right.<br>For example : String: "</span><strong><span style="font-size: 18px;">abcd".&nbsp;</span>&nbsp;</strong><br><img src="https://contribute.geeksforgeeks.org/wp-content/uploads/pic1-2.jpg" alt=""><br>&nbsp;<strong style="font-size: 18px;">Note:</strong><span style="font-size: 18px;"> Alphabets are in uppercase.</span></p>
<p><span style="font-size: 18px;"><strong>Examples :</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>str = A1D0A1D
<strong>Output: </strong>ABCD
<strong>Explanation: </strong>Look at the matrix given in the problem statement.</span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>str = 653CABEBD24
<strong>Output: </strong>636F61</span>
<span style="font-size: 18px;"><strong>Explanation:
</strong></span><span style="font-size: 18px;">636F61
 </span><span style="font-size: 18px;">636F61
&nbsp; </span><span style="font-size: 18px;">636F61
   636F61
&nbsp;   636F61
&nbsp;    636F61
653CABEBD24</span>
</pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity: </strong>O(n)<br><strong>Expected Space Complexity: </strong>O(n)</span><br>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1&lt;= n &lt;=1001 and n</span><span style="font-size: 18px;">%2 = 1</span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>Bit Magic</code>&nbsp;<code>Binary Representation</code>&nbsp;<code>Data Structures</code>&nbsp;