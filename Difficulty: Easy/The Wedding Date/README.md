<h2><a href="https://www.geeksforgeeks.org/problems/the-wedding-date5302/1?page=3&category=Strings&status=unsolved,attempted&sortBy=accuracy">The Wedding Date</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a date in&nbsp;<strong>dd mm yyyy&nbsp;</strong>format. Find the nearest date greater than the given date&nbsp;such that all the digits in both the dates should be equal provided order of digits may be change.<br>
<strong>Note: </strong>Assume that every month of the year has 30 days.</span></p>

<p><br>
<span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: 
</strong>12 02 2014
<strong>Output:
</strong>21 02 2014
<strong>Explanation:
</strong>If we change the positions of 
date 12 to 21 then it will be 
a valid date.
</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>09 05 1998
<strong>Output:</strong>
05 09 1998
<strong>Exaplanation:
</strong>Switch day with the month and we 
will get the nearest valid date.
</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read or print anything. Your task is to complete the function <strong>closest_date()&nbsp;</strong>which takes date as the first parameter, month as the second parameter, year as the third parameter(All in string form) and returns the nearest date in&nbsp;<strong>dd mm yyyy&nbsp;</strong>format in string form. If not possible return "-1"(Without quotes).<br>
<br>
<strong>Expected Time Complexity:&nbsp;</strong>O(n)<br>
<strong>Expected Space Complexity:&nbsp;</strong>O(n)</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ date ≤ 30<br>
1 ≤ month ≤ 12<br>
1000 ≤ year ≤ 9999</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>Date-Time</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;