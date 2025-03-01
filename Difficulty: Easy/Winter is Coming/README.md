<h2><a href="https://www.geeksforgeeks.org/problems/winter-is-coming1535/1?page=12&status=unsolved&sortBy=accuracy">Winter is Coming</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Winter is coming, along with winter comes the white walkers who may destroy every human life on the planet. Only Brandon can stop it from happening but he is kidnapped by the White Walkers. His brother Jon wishes to set him free so that they can stop the destruction.<br>
To set his brother free Jon has to kill the White Walkers who stand against the cave where his brother is kept as slave. Jon has somehow managed to place few of his men among the White Walkers who may help him in rescuing Brandon. Jon has the power to kill at most <strong>k</strong>&nbsp;White Walkers at a time, after which he would need one of his friends to help him gain back his power. Every time Jon meets any of his friend his power is restored to <strong>k.</strong></span></p>

<p><span style="font-size:18px">The <strong>n</strong>&nbsp;White Walkers (all assumed to be White Walkers apparently) stand in the given order denoted by some numbers. The ith person will have the number a[i] associated with them. Jon can identify his friend with the help of the numbers. If the number is prime, it is Jon’s friend who stands there else it’s the White Walkers.</span></p>

<p><span style="font-size:18px">Given the order, comment whether Jon will be able to rescue his brother or not.</span></p>

<p><br>
<span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
n = 5, k = 2
Arr = {6 , 3, 4, 5, 6}
<strong>Output:</strong> 1
<strong>Explaination:</strong> Jon can kill at most 2 White 
Walkers before reaching his friend. 
He kills the first (6) and he finds his 
friend (3) then again he kills one (4) and 
finds his friend (5). He now only has to kill 
one White Walker (6) to reach his brother.</span></pre>

<p><br>
<span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
n = 6, k = 3
Arr = {1, 2, 10, 4, 6, 8}
<strong>Output:</strong> 0
<strong>Explaination:</strong> same logic as the previous one.</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>ableTorescue()</strong>&nbsp;which takes the array <strong>Arr[]</strong> and its size <strong>n</strong>&nbsp;and <strong>k&nbsp;</strong>as input parameters&nbsp;and returns 1&nbsp;if Jon is able to rescue his brother, 0&nbsp;if he cannot.</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(nloglogn)<br>
<strong>Expected Auxiliary Space:</strong> O(n)</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= k&nbsp;&lt;= n&nbsp;&lt;=10<sup>5</sup><br>
1 &lt;= Arr[i] &lt;= 10<sup>5</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Misc</code>&nbsp;