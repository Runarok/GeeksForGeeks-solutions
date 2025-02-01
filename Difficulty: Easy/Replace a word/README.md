<h2><a href="https://www.geeksforgeeks.org/problems/replace-a-word5553/1?page=2&company=Flipkart,Adobe&difficulty=Easy,Medium&status=unsolved&sortBy=submissions">Replace a word</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given three strings <strong>S</strong>, <strong>oldW&nbsp;</strong>and <strong>newW</strong>. Find all occurrences of the word <strong>oldW</strong>&nbsp;in <strong>S</strong> and replace them&nbsp;with word <strong>newW</strong>.</span><br>
<br>
<span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>: 
S = "xxforxx xx for xx</span><span style="font-size:18px">"
oldW = "xx"
newW = "Geeks"
<strong>Output:</strong>&nbsp;
"geeksforgeeks geeks for geeks</span><span style="font-size:18px">"&nbsp;
<strong>Explanation</strong>: 
Replacing each "xx" with
"Geeks" in S.
</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: 
</strong>S = "india is the xx country"
oldW = "xx"
newW = "best"
<strong>Output:&nbsp;
</strong>"india is the best country</span><span style="font-size:18px">"
<strong>Explanation</strong>: 
Replacing each "xx" with
"best" in S.</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:&nbsp;&nbsp;</strong><br>
You dont need to read input or print anything. Complete the function <strong>ReplaceAll()&nbsp;</strong>which takes S, oldW and newW as input parameters and returns the string S after replacing all oldW with newW.<br>
<br>
<strong>Expected Time Complexity:</strong> O(n<sup>2</sup>)<br>
<strong>Expected Auxiliary Space:</strong> O(1)<br>
<br>
<strong>Constraints:</strong><br>
1&lt;= |S|&nbsp;&lt;=1000<br>
1&lt;= |oldW|,&nbsp;|newW| &lt;=|S|</span></p>
</div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Adobe</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>Data Structures</code>&nbsp;