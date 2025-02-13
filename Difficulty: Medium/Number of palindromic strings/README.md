<h2><a href="https://www.geeksforgeeks.org/problems/number-of-palindromic-strings2706/1?page=1&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Number of palindromic strings</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given two integers <strong>n</strong> and <strong>k</strong>, the task is to find the count of palindromic strings of length lesser than or equal to <strong>n</strong>, with first <strong>k</strong> characters of lowercase English language, such that each character in a string doesn’t appear more than twice.</span></p>
<p><span style="font-size: 18px;"><strong>Note:</strong> Anwer can be very large, so, output answer modulo 10<sup>9</sup>+7</span></p>
<p><strong><span style="font-size: 18px;">Example 1:</span></strong></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong> n = 3, k = 2
<strong>Output:</strong> 6
<strong>Explanation:</strong> </span><span style="font-size: 20px;">The possible strings are:
"a", "b", "aa", "bb", "aba", "bab".</span></pre>
<p><strong><span style="font-size: 18px;">Example 2:</span></strong></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong> n = 4, k = 3
<strong>Output:</strong> 18
<strong>Explanation:</strong> </span><span style="font-size: 20px;">The possible strings are: 
"a", "b", "c", "aa", "bb", "cc", "aba",
"aca", "bab", "bcb", "cac", "cbc", 
"abba", "acca", "baab", "bccb", "caac", 
"cbbc".&nbsp;</span></pre>
<p><span style="font-size: 18px;"><strong>Your task:</strong><br>You do not need to read any input or print anything. The task is to complete the function <strong>palindromicStrings()</strong>, which takes two integers as input and returns the count. </span></p>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(k<sup>2</sup>)<br><strong>Expected Auxiliary Space:</strong> O(k<sup>2</sup>)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong></span><br><span style="font-size: 18px;">1 ≤ k ≤ 26<br>1 ≤ n ≤ 52<br>n ≤ 2*k</span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>Dynamic Programming</code>&nbsp;<code>Mathematical</code>&nbsp;<code>Combinatorial</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;