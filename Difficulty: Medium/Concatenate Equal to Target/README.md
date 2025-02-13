<h2><a href="https://www.geeksforgeeks.org/problems/concatenate-equal-to-target/1?page=2&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Concatenate Equal to Target</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an array of&nbsp;<strong>digit</strong>&nbsp;strings&nbsp;<code>nums</code>&nbsp;and a&nbsp;<strong>digit</strong>&nbsp;string&nbsp;<code>target</code>, return&nbsp;the number of pairs of indices&nbsp;<code>(i,j)</code><em>&nbsp;</em>(where&nbsp;<code>i != j</code>) such that the&nbsp;<strong>concatenation</strong>&nbsp;of&nbsp;<code>nums[i] + nums[j]</code>&nbsp;equals&nbsp;<strong><code>target.</code></strong></span></p>
<p><span style="font-size: 18px;"><strong><code>Note:</code></strong></span></p>
<ul>
<li><span style="font-size: 18px;">nums[i] &amp; target consists of digits</span></li>
<li><span style="font-size: 18px;">nums[i] &amp; target do not have leading zeros.</span></li>
</ul>
<p><strong>Example 1:</strong></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong>
N = 4 
<code>nums</code>[] = {"1","212","12","12"} target = "1212" <strong>Output:</strong> 3 <strong>Explanation:</strong> We can obtain target = "1212" by concatenating: <code>nums</code>[0] = "1" with <code>nums</code>[1] = "212" <code>nums</code>[2] = "12" with <code>nums</code>[3] = "12" <code>nums</code>[3] = "12" with <code>nums</code>[2] = "12" </span></pre>
<p><span style="font-size: 18px;"><strong>Example 2:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>
N = 3
<code>nums</code>[] = {"11","11","110"} target = "11011" <strong>Output:</strong> 2 <strong>Explanation: </strong>We can obtain target = "11011" by concatenating: <code>nums</code>[2] = "110" with <code>nums</code>[0] = "11" <code>nums</code>[2] = "110" with <code>nums</code>[1] = "11"</span></pre>
<p><span style="font-size: 18px;"><strong>Example 3:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>
N = 3
<code>nums</code>[] = {"1","1","1"} target = "11" <strong>Output:</strong> 6 <strong>Explanation: </strong>We can obtain target = "11" by concatenating: <code>nums</code>[0] = "1" with <code>nums</code>[1] = "1" <code>nums</code>[1] = "1" with <code>nums</code>[0] = "1" <code>nums</code>[0] = "1" with <code>nums</code>[2] = "1" <code>nums</code>[2] = "1" with <code>nums</code>[0] = "1" <code>nums</code>[1] = "1" with <code>nums</code>[2] = "1" <code>nums</code>[2] = "1" with <code>nums</code>[1] = "1"</span></pre>
<p><span style="font-size: 18px;"><strong>Your Task:</strong><br>You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>countPairs()&nbsp;</strong>which takes<strong>&nbsp;</strong>the integer&nbsp;<strong>N,&nbsp;</strong>the string&nbsp;<strong>target</strong>&nbsp;and the string array&nbsp;<strong>nums[]&nbsp;</strong>as the input parameters and returns the number of pairs which satisfies the above condition.</span></p>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong>&nbsp;O(N)<br><strong>Expected Auxiliary Space:</strong>&nbsp;O(N)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>2 ≤ N&nbsp;≤ 10<sup>5</sup><br>1 ≤ nums[]&nbsp;≤ 10<sup>5</sup></span><br><span style="font-size: 18px;">2 ≤ target ≤ 10<sup>5</sup></span><br>&nbsp;</p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>Arrays</code>&nbsp;<code>Map</code>&nbsp;