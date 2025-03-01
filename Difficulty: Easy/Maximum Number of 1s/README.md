<h2><a href="https://www.geeksforgeeks.org/problems/maximum-number-of-1s1304/1?page=10&status=unsolved&sortBy=accuracy">Maximum Number of 1s</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given binary string <strong>s</strong> consisting of 0s and 1s only. You are allowed to do exactly one move that is you have to choose two indices <strong>i</strong> and <strong>j</strong> (1 ≤ i ≤ j ≤ |str| where |str| is string length) and toggle all the characters at position <strong>k</strong> where i ≤ k ≤ j. Toggling means changing 0 to 1 and 1 to 0. The task is to count the maximum possible number of 1's after exactly one move.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>: s = "</span><span style="font-size:20px">1010"</span><span style="font-size:18px">
<strong>Output:</strong> 3
<strong>Explanation</strong>: You can make move on [2, 2]
or [2, 4]</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>s = "0000"
<strong>Output: </strong>4
<strong>Explanation</strong>: Make move on [1, 4]</span>
</pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:&nbsp;&nbsp;</strong><br>
You don't need to read input or print anything. Complete the function <strong><code>maxOnes</code>()&nbsp;</strong>which takes <strong>s</strong> as an input parameter and returns the maximum number of 1's count.<br>
<br>
<strong>Expected Time Complexity:</strong> O(<strong>N</strong>)<br>
<strong>Expected Auxiliary Space:</strong> O(<strong>N</strong>)<br>
<br>
<strong>Constraints:</strong><br>
1 ≤ N ≤ 10<sup>5</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Dynamic Programming</code>&nbsp;<code>Algorithms</code>&nbsp;