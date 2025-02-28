<h2><a href="https://www.geeksforgeeks.org/problems/shoot-reload-repeat2415/1?page=1&category=Strings&status=unsolved,attempted&sortBy=accuracy">Shoot, Reload, Repeat</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Ishaan has bought a new gun. He is practicing his shooting, but he has to reload his gun again and again.<br>
You are given his shooting a bullet and reloading activity in the form of a string s.<br>
String s consists of 2 type of distinct characters: 'S' stands for shooting one bullet whereas 'R'&nbsp;stands for reloading the gun.<br>
You are also given an integer n, which is the bullet capacity of the gun. Each time Ishaan reloads the gun, it is filled up to n bullets.<br>
Given the string s and integer n, find out whether the activities are valid or not.<br>
Assume that the gun is loaded upto its full capacity in the beginning of each test case.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
s = "SSSRSRSS", n = 3
<strong>Output:</strong> 1
<strong>Explanation</strong>: He has 3 bullets at the start,
fires 3, reloades 3 bullets again, fires 1,
reloades 3 and then fires 2.</span>
</pre>

<p><span style="font-size:18px">â€‹<strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>: 
s = "SSSSR", n = 3
<strong>Output:</strong> 0
<strong>Explanation</strong>: He has 3 bullets at the start
and tries to fire 4 without reloading. 
Hence, not a valid activity.</span>
</pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>isValid()&nbsp;</strong>which takes the string s and the integer n as inputs and returns true if the string denotes a valid activity. Else, it returns false.</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(|s|).<br>
<strong>Expected Auxiliary Space:&nbsp;</strong>O(1).</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1&lt;=|s|&lt;=10<sup>5</sup><br>
1&lt;=n&lt;=10<sup>5</sup></span></p>

<p>&nbsp;</p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>Data Structures</code>&nbsp;