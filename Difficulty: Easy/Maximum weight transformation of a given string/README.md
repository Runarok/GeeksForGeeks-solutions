<h2><a href="https://www.geeksforgeeks.org/problems/maximum-weight-transformation-of-a-given-string3551/1?page=12&status=unsolved&sortBy=accuracy">Maximum weight transformation of a given string</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given string <strong>s</strong> consisting of only A’s and B’s. You can transform the given string to another string by toggling any character. Thus many transformations of the given string are possible. The task is to find the Weight of the maximum weight transformation.</span></p>

<p><span style="font-size:18px">The weight of a string is calculated using the below formula.</span></p>

<div><span style="font-size:18px">Weight of string = Weight of total pairs + weight of single characters - Total number of toggles.</span></div>

<div>&nbsp;</div>

<div><span style="font-size:18px"><strong>Note: </strong></span></div>

<div><span style="font-size:18px">1. Two consecutive characters are considered a pair only if they are different.<br>
2. Weight of a single pair (both characters are different) = 4<br>
3. Weight of a single character = 1 </span></div>

<div>&nbsp;</div>

<div>
<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong> s = "AA"
<strong>Output:</strong> 3
<strong>Explanation:</strong> Transformations of given 
string are "AA", "AB", "BA" and "BB". 
Maximum weight transformation is "AB" 
or "BA".  And weight is "One Pair - 
One Toggle" = 4-1 = 3.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong> s = "ABB"
<strong>Output:</strong> 5
<strong>Explanation:</strong> Transformations are "ABB", 
"ABA", "AAB", "AAA", "BBB", "BBA", "BAB" 
and "BAA" Maximum weight is of original 
string 4 + 1 (One Pair + 1 character)</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:&nbsp;&nbsp;</strong><br>
You don't need to read input or print anything. Complete the function <strong><code>getMaxWeight</code>()&nbsp;</strong>which takes string<strong> s </strong>as input and return an integer<br>
<br>
<strong>Expected Time Complexity:</strong> O(<strong>N</strong>)<br>
<strong>Expected Auxiliary Space:</strong> O(<strong>N</strong>)<br>
<br>
<strong>Constraints:</strong><br>
1 ≤ N ≤ 10<sup>5</sup></span></p>
</div>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Dynamic Programming</code>&nbsp;<code>Algorithms</code>&nbsp;