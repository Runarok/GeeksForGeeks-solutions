<h2><a href="https://www.geeksforgeeks.org/problems/convertible-string2643/1?page=3&category=Strings&status=unsolved,attempted&sortBy=accuracy">Convertible string</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given two strings check whether first string could be converted to the second string but the conditions are:</span></p>

<p><span style="font-size:18px"><strong>1.</strong>If the character is at odd place you can swap this character with the characters only at the odd places in &nbsp; &nbsp;the given first string.<br>
<strong>2.</strong>If the character is at even place you can swap this character with the characters only at the even places &nbsp; &nbsp; &nbsp;in the given first string.<br>
<strong>3.</strong>You cannot insert or delete any character on your own.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>geeks for</span>

<span style="font-size:18px"><strong>Output: </strong>0</span>

<span style="font-size:18px"><strong>Explanation: </strong>Two strings are of
different length. They can't be equal.</span>
</pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>skeeg geeks</span>

<span style="font-size:18px"><strong>Output: </strong>1</span>

<span style="font-size:18px"><strong>Explanation:</strong></span>

<span style="font-size:18px">In first string characters at odd indices are 
's', 'e', 'g'</span>
<span style="font-size:18px">In second string characters at odd indices are </span>
<span style="font-size:18px">'g', 'e', 's'</span>
<span style="font-size:18px">After swaping index 1st and 3rd of first
string all the characters at odd positions 
become equal.</span>
<span style="font-size:18px">Same for even indices.</span>
</pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong></span></p>

<p><span style="font-size:18px">You don't need to read or print anything. Your task is to complete the function<strong> EqualString()&nbsp;</strong>which takes first string as first parameter and second string as second parameter&nbsp;and returns 1 if first string can be made equal to the second string otherwise returns 0.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(n)</span></p>

<p><span style="font-size:18px"><strong>Expected Space Complexity:&nbsp;</strong>O(K) where K is constant.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong></span></p>

<p><span style="font-size:18px">1 &lt;= length of both strings &lt;= 1000</span></p>
</div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Bidgely</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>Data Structures</code>&nbsp;