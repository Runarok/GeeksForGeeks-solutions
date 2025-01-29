<h2><a href="https://www.geeksforgeeks.org/problems/elixir-of-life--141631/1?page=2&difficulty=Hard&status=unsolved&sortBy=accuracy">Elixir of Life</a></h2><h3>Difficulty Level : Difficulty: Hard</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Flamel is making the Elixir of Life but he is missing a secret ingredient, a set of <strong>contiguous</strong> plants (substring) from the Garden of Eden.<br>The garden consists of various plants represented by string <strong>S</strong>, where each letter represents a different plant.&nbsp; But the prophecy has predicted that the correct set of plants required to make the potion will appear in the same contiguous pattern (substring) at the beginning of the forest (<strong>prefix</strong>), the end of the forest (<strong>suffix</strong>), and will also be the <strong>most frequent</strong> sequence present in the entire forest.</span></p>
<p><span style="font-size: 18px;">Identify the substring of plants required to make the elixir and find out the number of times it appears in the forest.&nbsp;</span></p>
<p><span style="font-size: 18px;"><strong>Example 1:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong> <strong>S</strong> = "ababaaaab"
<strong>Output:</strong> 3
<strong>Explanation: </strong>Substring "ab" is a prefix, 
It is also a&nbsp;suffix and appears 3 times.</span>
</pre>
<p><br><span style="font-size: 18px;"><strong>Example 2:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: S</strong> = "aaaa"
<strong>Output:</strong> 4
<strong>Explanation: S</strong>ubstring "aaaa" occurs 1 time, 
Substring "aaa" occurs 2 times, substring 
"aa" occurs 3 times, substring "a" occurs 
4 times. All of them are proper prefixes 
and suffixes. But, "a" has the maximum 
frequency.</span></pre>
<p><span style="font-size: 18px;"><strong>Example 3:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong> <strong>S</strong> = "abcdef"
<strong>Output:</strong> 1
</span></pre>
<p><br><span style="font-size: 18px;"><strong>Your Task:&nbsp;</strong><br>You don't need to read input or print anything. Complete the function <strong>maxFrequency()</strong> which takes string S as input parameter and returns the frequency of the most frequent substring of S which is also a prefix and suffix of the original string.</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:&nbsp;</strong><br>1 ≤ |S| ≤ 10<sup>5</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>Data Structures</code>&nbsp;