<h2><a href="https://www.geeksforgeeks.org/problems/mr-binary1141/1?page=3&category=Strings&status=unsolved,attempted&sortBy=accuracy">Mr. Binary</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a string S containing lowercase English alphabets. Initially, you are at index 1. You&nbsp;can only jump to some other location j (j&gt;i) only if s[j] = s[i] + 1. Find the maximum index you can reach.<br>
<br>
<strong>Note:&nbsp;</strong>First character of the string is always 'a'. He can only go 'a'-&gt;'b','b'-&gt;'c','c'-&gt;'d' and so on. 'a'-&gt;'c','b'-&gt;'d','b'-&gt;'a' is not a valid move. He can start from any of index of 'a'. Indexing is zero based.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>s<strong> </strong>=<strong> </strong>"aaabbcdbdt"</span>
<span style="font-size:18px"><strong>Output:
</strong>8</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">One can start from 'a' at index 0 or 1 
or 2 and then move to 'b' at index 3 or 
4, then jump to 'c' at index 5 and then 
go to  'd' at greater index than 6 which 
is 8. Thus the answer is 8.</span>
</pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>s =<strong> </strong>"aabcb"</span>
<span style="font-size:18px"><strong>Output:
</strong>4</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">Again one can&nbsp;starts from 'a' and proceed 
to 'b' and then 'c'. But we&nbsp;have 'b' at 
the highest index also, so he&nbsp;will not go 
to 'c' and from 'a', we will directly jump 
to 'b'.</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read or print anything. Your task is to complete the function <strong>maximum_index()&nbsp;</strong>which takes the string S as an input parameter and returns the maximum index where one can reach.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(|S|)</span><br>
<span style="font-size:18px"><strong>Expected Space&nbsp;Complexity:&nbsp;</strong>O(1)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= size of string &lt;= 100000</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>Dynamic Programming</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;