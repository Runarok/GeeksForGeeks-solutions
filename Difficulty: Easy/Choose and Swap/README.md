<h2><a href="https://www.geeksforgeeks.org/problems/choose-and-swap5932/1?page=10&status=unsolved&sortBy=accuracy">Choose and Swap</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">You are given a string <strong>str</strong> of lower case english alphabets. You can choose any two characters in the string and replace all the occurences of the first character with the second character and replace all the occurences of the second character with the first character. Your aim is to find the lexicographically smallest string that can be obtained by doing this operation at most once.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Exampel 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>str = "ccad"
<strong>Output: </strong>"aacd"
<strong>Explanation: </strong>In ccad, we choose ‘a’ and ‘c’
and after doing the replacement operation 
once we get, aacd and this is the 
lexicographically smallest string possible.</span>
</pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>"abba"
<strong>Output: </strong>"abba"
<strong>Explanation: </strong>In abba, we can get baab after 
doing the replacement operation once for ‘a’ 
and ‘b’ but that is not lexicographically 
smaller than abba and so the answer is abba.</span>
</pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read or print anything. Your task is to complete the function&nbsp;<strong>LexicographicallyMinimum()</strong>&nbsp;which takes string str as input parameter and retruns the lexicographically minimum possible string after doing the operation.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(n)<br>
<strong>Expected Space Complexity:&nbsp;</strong>O(1)</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= |str| &lt;= 10<sup>4</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Greedy</code>&nbsp;<code>Algorithms</code>&nbsp;