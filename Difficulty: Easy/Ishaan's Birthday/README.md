<h2><a href="https://www.geeksforgeeks.org/problems/ishaans-birthday4141/1?page=10&status=unsolved&sortBy=accuracy">Ishaan's Birthday</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a List <strong>Arr,</strong> of 26 integers denoting the number of Alphabets of each type. You have to make all alphabets same. Exchanging an alphabet with another costs the difference in their ASCII value. For example, to exchange A with C, it will cost him 67-65 = 2.<br>
Calculate the minimum amount you must spend to make all the alphabets same.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1: </strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
<strong>Arr = </strong>{2 3 4 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0}
<strong>Output:</strong>
6
<strong>Explanation:</strong>
Exchanging all the alphabets to B
will cost the minimum.
Exchanging 2 A's for B's: 2*(66-65)=2
Exchanging 4 C's for B's: 4* (67-66)=4
Total cost = 6</span></pre>

<p><span style="font-size:18px"><strong>Example 2: </strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
<strong>Arr =</strong> { 3 4 0 0 0 0 0 0 6 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 }
<strong>Output:</strong>
45
<strong>Explanation:</strong>
Exchanging all the alphabets to B
will cost the minimum.
Exchanging 3 A's for B's: 3*(66-65)= 3
Exchanging 6 I's for B's: 6*(73-66)= 42
Total cost = 45 </span>
</pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>getMinCost()</strong> which takes an Array/List Arr as input and return an answer.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(|Arr|<sup>2</sup>)<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong></span><br>
<span style="font-size:18px">1 &lt;= Total number of alphabets &lt;= 26*(10^5)</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Algorithms</code>&nbsp;