<h2><a href="https://www.geeksforgeeks.org/problems/withdrawing-money5323/1?page=16&status=unsolved&sortBy=accuracy">Withdrawing Money</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Geek has N dollars in his bank account. He wants to withdraw all of it but the bank only allows withdrawal of an amount that is&nbsp;a divisor of the current amount in the bank and is less than the current amount.<br>
If Geek withdraws the maximum possible amount each day, how many days does he need to take out all of his money from the bank?&nbsp;<br>
<strong>Note:</strong> If the remaining amount is 1, he can withdraw it.</span></p>

<p>&nbsp;</p>

<p><strong><span style="font-size:18px">Example 1:</span></strong></p>

<pre><strong><span style="font-size:18px">Input:</span> </strong><span style="font-size:18px">N = 12</span>
<strong><span style="font-size:18px">Output:</span> </strong><span style="font-size:18px">5</span>
<strong><span style="font-size:18px">Explanation:</span> </strong><span style="font-size:18px">N = 12
Withdraws 6, Remaining = 6
Withdraws 3, Remaining = 3
Withdraws 1, Remaining = 2
Withdraws 1, Remaining = 1
Withdraws 1, Remaining = 0</span>
</pre>

<p>&nbsp;</p>

<p><strong><span style="font-size:18px">Example 2:</span></strong></p>

<pre><strong><span style="font-size:18px">Input:</span> </strong><span style="font-size:18px">N = 21</span>
<strong><span style="font-size:18px">Output:</span> </strong><span style="font-size:18px">7</span>
<strong><span style="font-size:18px">Explanation:</span> </strong><span style="font-size:18px">N = 21
Withdraws 7, Remaining = 14
Withdraws 7, Remaining = 7
Withdraws 1, Remaining = 6
Withdraws 3, Remaining = 3
Withdraws 1, Remaining = 2
Withdraws 1, Remaining = 1
Withdraws 1, Remaining = 0</span></pre>

<p>&nbsp;</p>

<p><strong><span style="font-size:18px">Your Task:</span></strong></p>

<p><span style="font-size:18px">You don't need to read input or print anything. Your task is to complete the function <strong>numberOfDays()</strong> which takes an integer N as input parameter and returns the number of days Geek&nbsp;needs to withdraw all of his money.&nbsp;</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity: </strong>O(sqrt(N))<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints :&nbsp;</strong><br>
1 &lt;= N &lt;= 10<sup>12</sup></span></p>

<p>&nbsp;</p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Division</code>&nbsp;<code>Algorithms</code>&nbsp;