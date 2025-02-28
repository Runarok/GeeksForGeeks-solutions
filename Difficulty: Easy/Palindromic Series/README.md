<h2><a href="https://www.geeksforgeeks.org/problems/palindromic-series5346/1?page=1&category=Strings&status=unsolved,attempted&sortBy=accuracy">Palindromic Series</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 14pt;">You have given a number <strong>n</strong>. He has to create a lowercase alphabetical string from that number and tell whether the string is palindrome. a = 0 , b = 1….. and so on. The number of digits represents the character and you have to repeat the string till the sum of all digits.<br><strong>Note:</strong> No number will start with zero. Consider alphabets ' a to j '&nbsp;only i.e. single digit numbers from 0 to 9.</span></p>
<p><span style="font-size: 14pt;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 14pt;"><strong>Input:</strong> n = 61
<strong>Output:</strong> true
<strong>Explanation: </strong>n = 61 the substring “gb” will be printed till 7 (6+1) characters i.e. “gbgbgbg” and it is palindrome. return true.
</span></pre>
<pre><span style="font-size: 14pt;"><strong>Input:</strong> n = 1998 <strong>
Output:</strong> false<br><strong>Explanation: </strong>The substring formed will be bjji and repeat 1+9+9+8=27 times.</span></pre>
<p><span style="font-size: 14pt;"><strong>Expected Time Complexity:</strong> O(n).<br><strong>Expected Auxiliary Space:</strong> O(n).</span></p>
<p><span style="font-size: 14pt;"><strong>Constraints:<br></strong></span><span style="font-size: 14pt;">1 ≤ n ≤ 10<sup>7</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Strings</code>&nbsp;<code>Numbers</code>&nbsp;<code>palindrome</code>&nbsp;<code>alphabets</code>&nbsp;<code>Data Structures</code>&nbsp;