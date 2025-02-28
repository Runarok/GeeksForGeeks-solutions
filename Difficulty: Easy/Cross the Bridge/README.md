<h2><a href="https://www.geeksforgeeks.org/problems/cross-the-bridge4916/1?page=2&category=Strings&status=unsolved,attempted&sortBy=accuracy">Cross the Bridge</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a string&nbsp;S of '$'s and '.'s. '$' are planks on the bridge and '.'s are the broken sections of the bridge. You can jump up to only that much gap (number of '.')&nbsp;of the broken section which you have already jumped over previously&nbsp;otherwise it takes you 1 day to learn how to jump that far.&nbsp;You have to find how many days will you take to cross the bridge.</span></p>

<p><strong><span style="font-size:18px">Example 1:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
S = $$..$$...$.$</span><span style="font-size:18px">
<strong>Output:</strong>
2
<strong>Explanation:</strong>
1 day is required to practice
for 2 dots.Then next time 3 
dots are encountered so 1 more
day to practice. Then since 1 
dot is there you can easily do
that because you have already 
mastered for 3 dots.</span>
</pre>

<p><strong><span style="font-size:18px">Example 2:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
S = $$$$.$
<strong>Output:</strong></span><span style="font-size:20px">
</span><span style="font-size:18px">1
<strong>Explanation:
</strong>Only one is required to learn
to jump 1 gap.</span>
</pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>findDays()</strong>&nbsp;which takes the string S<strong>&nbsp;</strong>as input&nbsp;parameters&nbsp;and returns&nbsp;the total number of days you would take to cross the bridge.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(|S|)<br>
<strong>Expected Space Complexity: </strong>O(|S|)</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ T ≤ 100<br>
1 ≤ |S| ≤ 10<sup>4</sup><br>
<strong>S</strong> will consist of only the characters '$' and '.'<br>
The first and the last characters of <strong>S</strong> will be '$'</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>Data Structures</code>&nbsp;