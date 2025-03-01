<h2><a href="https://www.geeksforgeeks.org/problems/ritikas-money4334/1?page=16&status=unsolved&sortBy=accuracy">Ritika's Money</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Ritika has a&nbsp;coin of &nbsp;$N but she is the type of person who loves to have as much money as possible. A coin of $N can be exchanged in a bank into three coins of: $n/2, $n/3 and $n/4. But these numbers are all rounded down. Ritika decides to exchange her coin in the greed of money and makes profit. Your task is to find the maximum amout of money she can have at the end of exchange.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>N = 5
<strong>Output: </strong>5
<strong>Explanation: </strong>5 =&gt; 5/2 + 5/3 + 5/4 = 2 + 1 
+ 1 = 4 &lt; 5 which means 5 can't be 
exchanged to earn profit so it itself is 
the maximum amount.</span>
</pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>N = 12
<strong>Output: </strong>13
<strong>Explanation: </strong>12 =&gt; 12/2 + 12/3 + 12/4 = 6 + 4
+ 3 = 13 (&gt;12) after exchange.Now 6,4,3 can't 
be exchanged further to get profit.</span>
</pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read or print anything. Your task is to complete the function&nbsp;<strong>MaxExchangeMoney()</strong>&nbsp;which takes N as input parameter and returns maximum amount of money she can make by exchanging.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>&nbsp;O(log(N))<br>
<strong>Expected Space Complexity:&nbsp;</strong>O(K) where K is constant.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= N &lt;= 10<sup>10</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Misc</code>&nbsp;