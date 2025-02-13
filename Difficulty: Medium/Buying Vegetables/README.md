<h2><a href="https://www.geeksforgeeks.org/problems/buying-vegetables0016/1?page=1&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Buying Vegetables</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Geek wants to inspect the quality of vegetables at each shop in the vegetable market. There are n different vegetable sellers in a line. A single kilogram each of brinjal, carrot and tomato are available with every seller but at different prices respectively. Geek wants to buy <strong>exactly one vegetable from one shop</strong> and <strong>avoid buying the same vegetables from adjacent shops</strong>.&nbsp;<br>Given the cost of each vegetable in each shop in a nx3 matrix, calculate the<strong> minimum amount of money that Geek must spend in the inspection.&nbsp;</strong></span></p>
<p><br><span style="font-size: 18px;"><strong>Example 1:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>
n = 3
cost = {{1, 50, 50}, 
        {50, 50, 50}, 
        {1, 50, 50}}
<strong>Output:</strong> 52
<strong>Explaination:</strong> 
Shop 1: Buy Brinjals for Rs 1.
Shop 2: Buy Carrot or Tomatoes for Rs 50.
Shop 3: Buy Brinjals for Rs 1.
Total = 1+50+1 = 52</span></pre>
<p><span style="font-size: 18px;"><strong>Example 2:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>
n = 3
cost = {{1, 4, 1}, 
        {3, 2, 2}, 
        {3, 2, 3}}
<strong>Output:</strong> 5
<strong>Explaination:</strong> 
Shop 1: Buy Brinjals for Rs 1.
Shop 2: Buy Tomatoes for Rs 2.
Shop 3: Buy Carrot for Rs 2.
Total = 1+2+2 = 5</span></pre>
<p><br><span style="font-size: 18px;"><strong>Your Task:</strong><br>You do not need to read input or print anything. Your task is to complete the function <strong>minCost()</strong> which takes n and nx3 matrix cost[][] as input parameters and returns he minimum amount of money that Geek must spend in the inspection.&nbsp;</span></p>
<p><br><span style="font-size: 18px;"><strong>Expected Time Complexity: </strong>O(n)<br><strong>Expected Auxiliary Space: </strong>O(n)</span></p>
<p><br><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ n ≤ 10<sup>4&nbsp;</sup><br>1 ≤ cost[i][j] ≤ 100&nbsp;</span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Dynamic Programming</code>&nbsp;<code>Algorithms</code>&nbsp;