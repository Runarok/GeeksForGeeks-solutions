<h2><a href="https://www.geeksforgeeks.org/problems/string-comparison5858/1?page=2&company=Microsoft&difficulty=Basic,Easy,Medium,Hard&status=unsolved,attempted&sortBy=accuracy">String comparison</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p>In a native language, the increasing order of priority of characters is a, b, c, d, e, f, g, h, i, j, k, l, m, n, ng, o, p, q, r, s, t, u, v, w, x, y, z. You are given two strings s1 and s2 and your task is to&nbsp;compare them on the basis of the given priority order.</p>
<p><strong>Note:</strong> Function must return <strong>0</strong> if both the strings are equal, <strong>1</strong> if s1 is greater than s2, and <strong>-1</strong> if s1 is lesser than s2.</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s1 = "adding", s2 = "addio"
<strong>Output:</strong> -1
<strong>Explanation:</strong> 'o' has greater priority 
than 'ng'</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s1 = "abcng", s2 = "abcno"
<strong>Output:</strong> 1
<strong>Explanation:</strong> 'ng' has greater priority 
than 'n'</pre>
<p><strong>Your Task:&nbsp;&nbsp;</strong><br>You don't need to read input or print anything. Your task is to complete the function <strong>stringComparsion()</strong>&nbsp;which takes the two strings<strong> </strong>as input and returns the integer value.<br><br><strong>Expected Time Complexity:</strong>&nbsp;O(|s1 + s2|)<br><strong>Expected Auxiliary Space:</strong>&nbsp;O(1)<br><br><strong>Constraints:</strong><br>1 ≤ |s1|, |s2| ≤ 105<br>The string contains lower case English alphabets</p></div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Microsoft</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>Data Structures</code>&nbsp;