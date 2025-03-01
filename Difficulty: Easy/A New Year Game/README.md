<h2><a href="https://www.geeksforgeeks.org/problems/a-new-year-game1648/1?page=13&status=unsolved&sortBy=accuracy">A New Year Game</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Rahul and his friends decided to play a game in a New Year Party and the winner will be given some cash prize as decided among them.The game is as follows:-<br>
1.N carpets will be arranged in a row and each of them will have a number written on it.<br>
2.A basket full of chocolate is kept there and a person has to take out M chocolates from the basket before starting the game.<br>
3.A person with M chocolates will start at the first carpet ,eat one chocolate and move to the&nbsp;second one,then again eat one chocolate and move to the third one...and so on..<br>
4.If on reaching&nbsp;any carpet ,the number of chocolates in the persons hand is less than the number written on the carpet ,then that&nbsp;&nbsp;person loses the game.<br>
Find the minimum number of chocolate Rahul should take out of the basket to ensure that he wins the game.<br>
Note:Number of chocolates and the number written on the carpet are compared before the person eats the chocolate on that carpet.See the examples given.</span>&nbsp;</p>

<p><br>
<span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N = 5
arr = {6, 5, 4, 3, 2}
<strong>Output:</strong> 6
<strong>Explaination:</strong> If Rahul&nbsp;takes 6 chocolates, 
on the first step we have 6 &gt;= 6 everything 
is OK, then after he ate one chocolate,&nbsp; 
the chocolates decreased to 5 and on the 
2nd carpet&nbsp;we'll receive 5 &gt;= 5, again OK, 
and so on.</span><span style="font-size:18px">
</span></pre>

<p><br>
<span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N = 5
Arr = {3, 4, 3, 1, 1}
<strong>Output:</strong> 5
<strong>Explaination:</strong> If Rahul takes 4 chocolates, 
then he&nbsp;will loose the game&nbsp;on reaching 
the 2nd carpet.</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>minimumChocolates()</strong>&nbsp;which takes the array a<strong>rr[]</strong> and its size <strong>N&nbsp;</strong>as input parameters&nbsp;and returns&nbsp;the minimum number of chocolate Rahul should take out of the basket to ensure that he wins the game.</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(N)<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ N ≤ 10<sup>5</sup><br>
1 ≤ arr[i]&nbsp;≤ 10<sup>5</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Misc</code>&nbsp;