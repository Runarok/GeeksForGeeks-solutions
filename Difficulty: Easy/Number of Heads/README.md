<h2><a href="https://www.geeksforgeeks.org/problems/number-of-heads3629/1?page=13&status=unsolved&sortBy=accuracy">Number of Heads</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">There are N&nbsp;coins&nbsp;numbered from 1&nbsp;to N, all turned tails.N&nbsp;persons flip&nbsp;these coins. When the ith&nbsp;person enters, he&nbsp;flips&nbsp;all coins&nbsp;whose number is divisible by i.Calculate&nbsp;the number of coins that will remain heads&nbsp;after N&nbsp;persons enter and perform fliping&nbsp;operation.</span></p>

<p><strong><span style="font-size:18px">Example 1:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N=3
<strong>Output:</strong>
1
<strong>Explanation:</strong>
initially the configuration is TTT
Person 1 flips all coins divisible
by 1.Now,Configuration is HHH.
Person 2 flips all coins divisible by
2.Now,Configuration is HTH.
Person 3 flips all coins divisible by 
3.Now,finally configuration is HTT.
Thus,Number of heads is 1.</span></pre>

<p><strong><span style="font-size:18px">Example 2:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N=5
<strong>Output:</strong>
2
<strong>Explanation:</strong>
Initial configuration=TTTTT
The configuration changes as follows:
TTTTT-&gt;HHHHH-&gt;HTHTH-&gt;HTTTH-&gt;
HTTHH-&gt;HTTHT.
So, finally number of heads is 2.</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything.Your task is to complete the function <strong>numberOfHeads()</strong> which takes the number N as input parameter and returns the number of coins that show heads after N persons have performed the flipping peration.</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity:</strong>O(LogN)<br>
<strong>Expected Auxillary Space:</strong>O(1)</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1&lt;=N&lt;=10<sup>18</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;