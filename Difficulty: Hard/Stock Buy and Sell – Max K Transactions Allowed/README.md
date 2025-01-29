<h2><a href="https://www.geeksforgeeks.org/problems/maximum-profit4657/1?page=4&difficulty=Hard&status=unsolved&sortBy=accuracy">Stock Buy and Sell – Max K Transactions Allowed</a></h2><h3>Difficulty Level : Difficulty: Hard</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">In the stock market, a person buys a stock and sells it on some future date. You are given an array <strong>arr[]</strong> representing&nbsp;</span><span style="font-size: 18px;">stock prices on different days </span><span style="font-size: 18px;">and a positive integer </span><strong style="font-size: 18px;">k</strong><span style="font-size: 18px;">, find out the <strong>maximum</strong> profit a person can make in at-most </span><strong style="font-size: 18px;">k </strong><span style="font-size: 18px;">transactions. A transaction consists of buying and subsequently selling a stock and new transaction can start only when the previous transaction has been completed.</span></p>
<p><strong><span style="font-size: 18px;">Examples :</span></strong></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong> arr[] = [10, 22, 5, 75, 65, 80], k = 2
<strong>Output:</strong> 87
<strong>Explaination:<br></strong>1st transaction: Buy at 10 and sell at 22. 
2nd transaction : Buy at 5 and sell at 80.</span></pre>
<pre><span style="font-size: 18px;"><strong>Input:</strong> arr[] = [20, 580, 420, 900], k = 3
<strong>Output:</strong> 1040
<strong>Explaination:</strong> <br></span><span style="font-size: 14pt;">1st transaction: Buy at 20 and sell at 580. <br>2nd transaction : Buy at 420 and sell at 900.</span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [100, 90, 80, 50, 25],  k = 1
<strong>Output:</strong> 0
<strong>Explaination:</strong> Selling price is decreasing continuously
leading to loss. So seller cannot have profit.</span></pre>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ arr.size() ≤&nbsp;<span style="font-size: 18.6667px;">10</span><sup>3</sup><br>1 ≤ k ≤ 200<br>1 ≤ arr[i] ≤ </span><span style="font-size: 18.6667px;">10</span><sup>3</sup></p></div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Accolite</code>&nbsp;<code>Amazon</code>&nbsp;<code>Microsoft</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Dynamic Programming</code>&nbsp;<code>Algorithms</code>&nbsp;