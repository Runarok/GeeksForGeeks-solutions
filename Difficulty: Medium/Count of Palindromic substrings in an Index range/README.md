<h2><a href="https://www.geeksforgeeks.org/problems/count-of-palindromic-substrings-in-an-index-range3752/1?page=1&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Count of Palindromic substrings in an Index range</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a string <strong>S</strong> of lowercase english&nbsp;alphabetic characters and a substring range starting from <strong>q1</strong> and ending at <strong>q2</strong>,&nbsp;the task is to find out the count of palindromic substrings in the given substring range.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N = 7 
S = "xyaabax"
q1 = 3
q2 = 5
<strong>Output:</strong> 4
<strong>Explanation</strong>: The substring in the given range 
is "aba". Hence, the palindromic substrings are:
"a", "b", "a" and "aba".</span>
</pre>

<p><span style="font-size:18px">â€‹<strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>: 
N = 7
S = "xyaabax" 
q1 = 2 
q2 = 3. 
<strong>Output:</strong> 3
<strong>Explanation</strong>: The substring in the given range
is "aa". Hence, the palindromic substrings are: 
"a", "a" and "aa".</span></pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>countPalinInRange()&nbsp;</strong>which takes the string S, its length N and the range variables q1 and q2 as input parameters&nbsp;and returns the count of the Palindromic substrings in the given substring range.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(|S|<sup>2</sup>).<br>
<strong>Expected Auxiliary Space:&nbsp;</strong>O(1).</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤&nbsp;|S| ≤&nbsp;1000<br>
0 ≤ q1, q2 &lt; |S|</span></p>
</div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>SAP Labs</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>Dynamic Programming</code>&nbsp;<code>palindrome</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;