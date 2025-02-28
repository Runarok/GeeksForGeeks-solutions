<h2><a href="https://www.geeksforgeeks.org/problems/minimal-moves-to-form-a-string4331/1?page=1&category=Strings&status=unsolved,attempted&sortBy=accuracy">Minimal moves to form a string</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given a string S, check if it is possible to construct the given string S by performing any of the below operations any number of times. In each step, we can:</span></p>
<ul>
<li><span style="font-size: 18px;">Add any character at the end of the string.</span></li>
<li><span style="font-size: 18px;">or, append the string to the string itself.</span></li>
</ul>
<p><span style="font-size: 18px;">The above steps can be applied any number of times. The task is to find the minimum steps required to form the string.</span></p>
<p><span style="font-size: 18px;"><strong>Example 1:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>S = "aaaaaaaa"
<strong>Output:</strong> 4
<strong>Explanation</strong>: 
move 1: add 'a' to form "a"
move 2: add 'a' to form "aa"
move 3: append "aa" to form "aaaa"
move 4: append "aaaa" to form "aaaaaaaa"</span>
</pre>
<p><span style="font-size: 18px;">â€‹<strong>Example 2:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input</strong>: S = "abcabca"
<strong>Output:</strong> 5
<strong>Explanation</strong>: 
move 1: add&nbsp;'a' to form "a"
move 2: add 'b' to form "ab"
move 3: add 'c' to form "abc"
move 4: append "abc" to form "abcabc"
move 5: add 'a' to form "abcabca"</span>

</pre>
<p><span style="font-size: 18px;"><strong>Your Task:&nbsp;&nbsp;</strong><br>You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>minSteps()</strong>&nbsp;which takes the string&nbsp;<strong>s&nbsp;</strong>as inputs and returns the answer.<br><br><strong>Expected Time Complexity:</strong>&nbsp;O(|S|<sup>2</sup>)<br><strong>Expected Auxiliary Space:</strong>&nbsp;O(|S|)<br><br><strong>Constraints:</strong><br>1 ≤ |S| ≤ 10<sup>3</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>Dynamic Programming</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;