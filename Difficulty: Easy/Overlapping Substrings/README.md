<h2><a href="https://www.geeksforgeeks.org/problems/overlapping-substrings2654/1?page=13&status=unsolved&sortBy=accuracy">Overlapping Substrings</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a string S and you need to check whether S contains two non overlapping substrings "XY" and "YX" in any order or not.</span></p>

<p><span style="font-size:18px"><strong>Note : </strong>All letters of the String are Uppercased.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
<strong>S = </strong>"XYYX"
<strong>Output:</strong>
YES
<strong>Explanation: </strong>
From stated input string "XY"
substring(1,2) and "YX" substring(3,4)
can be easily separated without overlap.
So output is "YES".</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
<strong>S = </strong>"XYX"
<strong>Output:</strong>
NO
<strong>Explanation: </strong>
"XY" and "YX" substrings are present.
But they overlap with each other.
So, Output is "NO".</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>overlapPresent()</strong> which takes a String S and returns the answer.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(|S|)<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= |S| &lt;= 10<sup>5</sup></span></p>
</div>