<h2><a href="https://www.geeksforgeeks.org/problems/lottery-money0853/1?page=11&status=unsolved&sortBy=accuracy">Lottery Money</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">There is a game "Choose a number and win money", in which, a person playing a game&nbsp;has to select a number N and he/she will be awarded some money in Rupees accordingly. Some of the observations of selecting a number N and money awarded(M) are:-</span></p>

<p><span style="font-size:18px">N: 1&nbsp; &nbsp;2&nbsp; &nbsp;3&nbsp; &nbsp;4&nbsp; &nbsp;5&nbsp; &nbsp;6&nbsp; &nbsp;7&nbsp; &nbsp;8&nbsp; &nbsp;9&nbsp; &nbsp;10&nbsp; &nbsp;11&nbsp; &nbsp;12&nbsp; &nbsp;13&nbsp; &nbsp;14&nbsp; &nbsp;15&nbsp; &nbsp;16&nbsp; &nbsp;17&nbsp; &nbsp;18&nbsp; &nbsp;19&nbsp; &nbsp;20&nbsp; &nbsp;21&nbsp; &nbsp;22&nbsp; &nbsp;23&nbsp; &nbsp;24 ..........</span></p>

<p><span style="font-size:18px">M: 3&nbsp; &nbsp;2&nbsp; &nbsp;1&nbsp; &nbsp;6&nbsp; &nbsp;5&nbsp; &nbsp;4&nbsp; &nbsp;3&nbsp; &nbsp;2&nbsp; &nbsp;1&nbsp; &nbsp;12&nbsp; &nbsp;11&nbsp; &nbsp;10&nbsp; &nbsp;9&nbsp; &nbsp; &nbsp;8&nbsp; &nbsp; &nbsp;7&nbsp; &nbsp; &nbsp; 6&nbsp; &nbsp; &nbsp; 5&nbsp; &nbsp; &nbsp;4&nbsp; &nbsp; &nbsp;3&nbsp; &nbsp; 2&nbsp; &nbsp; &nbsp;1&nbsp; &nbsp;&nbsp;24&nbsp; 23&nbsp;&nbsp;22...............</span></p>

<p><span style="font-size:18px">i.e. if you&nbsp;selects a number N=1,she gets M=Rs 3,if N=2,M=Rs 2,if N=3&nbsp;,M=Rs 1&nbsp;and so on..</span></p>

<p>&nbsp;</p>

<p><strong><span style="font-size:18px">Example 1:</span></strong></p>

<pre><strong><span style="font-size:18px">Input:</span></strong>
<span style="font-size:18px">N = 30</span>
<strong><span style="font-size:18px">Output:</span></strong>
<span style="font-size:18px">16</span>
<strong><span style="font-size:18px">Explanation:</span></strong>
<span style="font-size:18px">As per the distribution,</span>
<span style="font-size:18px">you earn Rs 16.</span></pre>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p><strong><span style="font-size:18px">Example 2:</span></strong></p>

<pre><strong><span style="font-size:18px">Input:</span></strong>
<span style="font-size:18px">N = 1</span>
<strong><span style="font-size:18px">Output:</span></strong>
<span style="font-size:18px">3</span>
<strong><span style="font-size:18px">Explanation:</span></strong>
<span style="font-size:18px">As per the distribution,</span>
<span style="font-size:18px">you earn Rs 3.</span></pre>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p><strong><span style="font-size:18px">Your Task:</span></strong></p>

<p><span style="font-size:18px">You don't need to read input or print anything. Your task is to complete the function totalMoney() which takes an integer N and returns total money.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity: </strong>O(log(N))<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1&lt;=N&lt;=10<sup>9</sup></span></p>

<p>&nbsp;</p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>logical-thinking</code>&nbsp;<code>implementation</code>&nbsp;