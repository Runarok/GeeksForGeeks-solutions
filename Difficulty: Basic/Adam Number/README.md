<h2><a href="https://www.geeksforgeeks.org/problems/adam-number2650/1?page=8&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">Adam Number</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a number <strong>N</strong>, write a program to check whether given number is Adam Number or not.<br>
<strong>Adam number</strong> is a number when reversed, the square of the number and the square of the reversed number should be numbers which are reverse of each other.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span><span style="font-size:18px"> </span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>
<strong>N = </strong>12</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">YES</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">12<sup>2</sup> = 144 and 21<sup>2</sup> = 441. 144 reversed 
gives 441, So, it's an Adam Number.</span></pre>

<p><span style="font-size:18px"><strong>Example 1:</strong></span><span style="font-size:18px"> </span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>
<strong>N = </strong>14</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">NO</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">14<sup>2</sup> = 196. 196 reversed gives 691,
which isn't equal to 41<sup>2</sup> So,
it's not an Adam Number.</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>checkAdamOrNot()</strong> which takes an Integer N as input and returns the answer as "YES" if it is a Adam, number. Otherwise, returns "NO".</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(|N|)<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong></span><br>
<span style="font-size:18px">1 &lt;= N &lt;= 10<sup>4</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;