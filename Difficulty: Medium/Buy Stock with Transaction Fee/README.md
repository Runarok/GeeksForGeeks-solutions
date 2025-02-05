<h2><a href="https://www.geeksforgeeks.org/problems/buy-stock-with-transaction-fee/1?page=1&difficulty=Medium&status=unsolved&sortBy=accuracy">Buy Stock with Transaction Fee</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">You are given an array arr[], in which <strong>arr[i]</strong>&nbsp;is the price of a given stock on the <strong>ith</strong> day and an integer <strong>k</strong> represents a transaction fee. </span><span style="font-size: 18px;">Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.</span></p>
<p><span style="font-size: 18px;"><strong>Note:</strong>&nbsp;You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).<br><br><strong>Examples:</strong></span></p>
<pre><strong><span style="font-size: 18px;">Input: </span></strong><span style="font-size: 18px;">arr[] = [1, 3, 2, 8, 4, 9] , k = 2
<strong>Output: </strong>8
<strong>Explanation:</strong></span>
<span style="font-size: 18px;">The maximum profit can be achieved by:
- Buying at prices[0] = 1
- Selling at prices[3] = 8
- Buying at prices[4] = 4
- Selling at prices[5] = 9
The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.</span></pre>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>arr[] = [81, 100, 52, 52, 54, 54, 31, 51] , k = 3
<strong>Output: </strong>33</span></pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity: </strong>O(n)<br></span><span style="font-size: 18px;"><strong>Expected Space Complexity: </strong>O(1)</span></p>
<p><span style="font-size: 18px;"><strong>Constraint:</strong><br>1 &lt;= arr.size()&lt;= 10<sup>6</sup></span><br><span style="font-size: 18px;">1 &lt;= arr[i] &lt;=10<sup>6</sup><br>0 &lt;= k &lt;= 10<sup>6</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Algorithms</code>&nbsp;