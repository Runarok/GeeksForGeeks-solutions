<h2><a href="https://www.geeksforgeeks.org/problems/chocolate-station2951/1?page=1&company=Amazon&status=unsolved,attempted&sortBy=accuracy">Chocolate Station</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Geek has an array <strong>arr</strong>, where arr[i] (1-based indexing) denotes the number of chocolates corresponding to each station. When he moves from station i to station i+1 he gets arr[i] - arr[i+1] chocolates for free, if this number is negative, he loses that many chocolates also.<br>He can only move from station i to station i+1 if he has a non-negative number of chocolates with him.<br>Given the cost of one chocolate Rs. <strong>price</strong>. Find the minimum cost incurred in reaching the last station from the first station (station 1).<br><strong>Note</strong>: Initially Geek has 0 chocolates.</span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [1, 2, 3], price = 10
<strong>Output:</strong>  30
<strong>Explanation</strong>: 
To reach the first station from the starting point, we need to buy 1 chocolate,To reach station 2 form station 1, we get arr[1] - arr[2] = -1 chocolates i.e. we lose 1 chocolate. <br>Hence, we need to buy 1 chocolate.Similarly, we need to buy 1 chocolate to reach station 3 from station 2.
<strong>Hence, total cost incurred = (1+1+1)*10 = 30</strong></span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [10, 6, 11, 4, 7, 1], price = 5
<strong>Output:</strong> 55
<strong>Explanation</strong>: 
To reach to&nbsp;the first station from starting
point he need to buy 10 chocolates.&nbsp;</span>
<span style="font-size: 18px;"><strong>Chocolates Bought = 10,Chocolates balance = 0
</strong>On reaching second station he will get (10-6)= 4 chocolates.
</span><span style="font-size: 18px;"><strong>Chocolates Bought= 10 , Chocolates balance = 4.</strong>
To reach to 3 station , he has to buy (6- 11) = 5 chocolates.But he has 4 chocolates as balance. So the chocolates he need to buy is (5 -4 ) =1;</span>
<span style="font-size: 18px;"><strong>Chocolates Bought= 11&nbsp;, Chocolates balance = 0.</strong>
On reaching station 4 , he will get (11 - 4)= 7 chocolates.</span>
<span style="font-size: 18px;"><strong>Chocolates Bought= 11&nbsp;, Chocolates balance = 7.</strong>
To reach to 5 station , he has to buy (4- 7)= 3 chocolates. But he has 7 chocolates as balance .</span>
<span style="font-size: 18px;"><strong>Chocolates Bought= 11&nbsp;, Chocolates balance = 4.</strong>
To reach to 6 station , he will get (7- 1) = 6 chocolates. </span>
<span style="font-size: 18px;"><strong>Chocolates Bought= 11&nbsp;, Chocolates balance = 10.</strong>
Therefore, total chocolates he has&nbsp;to buy is 11.</span>
<span style="font-size: 18px;"><strong>Hence, Amount=11*5=55.</strong></span></pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(n)<br><strong>Expected Auxiliary Space:</strong> O(1).</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ arr.size() ≤ 10<sup>6<br></sup></span><span style="font-size: 18px;">1 ≤ arr[i] ≤ 10</span><sup>3</sup><br><span style="font-size: 18px;">1 ≤ price ≤ 10</span><sup>2</sup></p></div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Amazon</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Data Structures</code>&nbsp;