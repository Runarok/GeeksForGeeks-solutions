<h2><a href="https://www.geeksforgeeks.org/problems/lucky-number-22638/1?page=11&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">Lucky Number-2</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">A Lucky number is the largest number made up of only digits 2,3 and 5 such that the count for each digit is divisible by the number obtained by multiplication of remaining two digits. You are provided with the number N and you have to output the lucky number of <strong>N </strong>digits. If no lucky number exists for the given N output -1.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>N = </strong>4</span>
<span style="font-size:18px"><strong>Output:
</strong>-1</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">There isn't any 4 digit Lucky Number.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>N = </strong>16</span>
<span style="font-size:18px"><strong>Output:
</strong></span><span style="font-size:20px">5555553333333333</span> 
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">There are six '5' and ten '3' in the
number. And also, 2*3=6 and 2*5=10.
There is no 16 digit number greater
which satisfies the conditions.</span>
</pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>getLuckyNum()</strong> which takes an Integer N as input and returns the answer as a String.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(N<sup>3</sup>)<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong></span><br>
<span style="font-size:18px">1 &lt;= N &lt;= 10<sup>3</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;