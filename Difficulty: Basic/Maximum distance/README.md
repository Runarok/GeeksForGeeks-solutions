<h2><a href="https://www.geeksforgeeks.org/problems/maximum-distance3248/1?page=28&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">Maximum distance</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">There are <strong>N </strong>bikes and each can cover 100 km when fully fueled. What is the maximum amount of distance you can go using N bikes?&nbsp;You may assume that all bikes are similar and a bike takes 1 litre to cover 1 km.</span></p>

<p><span style="font-size:18px"><strong>Note: </strong>The answer may contain decimal value but&nbsp;print the integer value of the float value obtained.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>N = </strong>2</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">150</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">The 2 bikes can travel 50 Kms
together and then, the fuel of
the First bike can be transferred
to the Second, resulting in a full
tank for the second bike. The 2nd bike
will be able to travel 100 Kms more.
So, the Ouput is 150.</span>
</pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>N = </strong>3</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">183</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">The 3 bikes can travel 33.33 Kms
together and then, rest of the fuel of
the First bike can be transferred
to the Second and Third bike, resulting in
a full tank for the second and third bike.
The 2nd and 3rd bike can travel 50 Kms more
together. Now, both the bikes will have half
fuel. The 2nd bike can transfer the fuel to
the 3rd. The 3rd will have a full tank and
travel 100 Kms more. So, the Distance
will be 183.33</span>
</pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>maxDist()</strong> which takes an Integer N as input and returns the answer.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(N)<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong></span><br>
<span style="font-size:18px">1 &lt;= N &lt;= 10<sup>5</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;