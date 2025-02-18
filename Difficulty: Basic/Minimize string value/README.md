<h2><a href="https://www.geeksforgeeks.org/problems/minimize-string-value1010/1?page=13&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">Minimize string value</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a string of lowercase alphabets and a number k, the task is to find the&nbsp;minimum <strong>value</strong> of the string after&nbsp;removal of ‘k’ characters.&nbsp;<br>
The <strong>value</strong>&nbsp;of a string is defined as the sum of squares of the count of each distinct character.<br>
For example consider the string “geeks”, here frequencies of characters are g -&gt; 1, e -&gt; 2, k -&gt; 1, </span><span style="font-size:18px">s -&gt; 1 and value of the string is 1<sup>2 </sup>+ 2<sup>2 </sup>+ 1<sup>2 </sup>+ 1<sup>2</sup> = 7</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>S = "abccc", K = 1
<strong>Output:</strong> 6
<strong>Explanation</strong>: Remove one 'c', then frequency
will be a -&gt; 1, b -&gt; 1, c -&gt; 2.
1<sup>2 </sup>+ 1<sup>2 </sup>+ 2<sup>2 </sup>= 6</span>
</pre>

<p><span style="font-size:18px">â€‹<strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>: S = "aaab", K = 2
<strong>Output:</strong> 2
<strong>Explanation</strong>: Remove 2 'a's, then frequency
will be a -&gt; 1, b -&gt; 1.
1<sup>2 </sup>+ 1<sup>2</sup><sup> </sup>= 2</span>
</pre>

<p><span style="font-size:18px"><strong>Your Task:&nbsp;&nbsp;</strong><br>
You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>minValue()</strong>&nbsp;which takes the string&nbsp;<strong>s&nbsp;</strong>as inputs and returns the answer.<br>
<br>
<strong>Expected Time Complexity:</strong>&nbsp;O(K*log(|S|))<br>
<strong>Expected Auxiliary Space:</strong>&nbsp;O(constant)<br>
<br>
<strong>Constraints:</strong><br>
1 ≤ K, |S| ≤ 10<sup>4</sup></span></p>
</div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Amazon</code>&nbsp;<code>Microsoft</code>&nbsp;<code>FactSet</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>Data Structures</code>&nbsp;