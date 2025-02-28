<h2><a href="https://www.geeksforgeeks.org/problems/ways-to-split-string-such-that-each-partition-starts-with-distinct-letter5723/1?page=3&category=Strings&status=unsolved,attempted&sortBy=accuracy">Ways to split string such that each partition starts with distinct letter</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a string <strong>S</strong>. Let&nbsp;<strong>k</strong>&nbsp;be the maximum number of partitions possible of the given string with each partition starts with a distinct letter. The task is to find the number of ways string <strong>S </strong>can be split into&nbsp;<strong>k</strong>&nbsp;partition (non-empty) such that each partition starts with a distinct letter. Print number modulo&nbsp;1000000007.</span></p>

<p><span style="font-size:18px"><strong>Note : </strong>S consists of lowercase letters only.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
<strong>S =</strong> "abb"
<strong>Output:</strong>
2
<strong>Explanation:</strong>
 "abb" can be maximum split into 2 partitions
{a, bb} with distinct starting letter, for k = 2.
And, the number of ways to split "abb"
into 2 partitions with distinct starting letter
are 2 {a, bb} and {ab, b}.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
<strong>S =</strong> "abbcc"
<strong>Output:</strong>
4
<strong>Explanation:</strong>
"abbcc" can be maximum split into 3 partitions
with distinct letter, so k=3. Thus the number
of ways to split "abbcc" into 3 partitions with
distinct letter is 4 i.e. {ab, b, cc},
{ab, bc, c},{a, bb, cc} and {a, bbc, c}. </span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>waysToSplit()</strong> which takes a String S and returns the answer.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(|S|)<br>
<strong>Expected Auxiliary Space:</strong> O(|1|)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= |S| &lt;=10<sup>5</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>Data Structures</code>&nbsp;