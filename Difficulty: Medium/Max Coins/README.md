<h2><a href="https://www.geeksforgeeks.org/problems/max-coins--170647/1?page=2&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Max Coins</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">You are given a 2D integer array <strong>ranges </strong>whose length is <strong>n </strong>where&nbsp;<strong>ranges[i]=[start<sub>i</sub>, end,coins<sub>i</sub>]</strong> means all integers from start<sub>i</sub> to end<sub>i</sub> inclusive start<sub>i</sub> and end<sub>i</sub> are present and we get <strong>coins<sub>i</sub></strong>&nbsp;amount of <strong>coins</strong> when we select this <strong>i<sup>th</sup></strong> range. You can select <strong>at most</strong>&nbsp;two intervals so as to collect maximum coins but if you select two ranges then those two ranges <strong>should not intersect or overlap but can touch each other.</strong></span></p>
<p><span style="font-size: 18px;"><strong>Note</strong>: <br></span><span style="font-size: 18px;">1. You can select at max 2 ranges and they should not intersect with each other but they can touch themselves.<br>2. Two ranges (A1,A2) and (A3,A4) are overlapping when A3&lt;A2, for example (2,3) and (2,4) are overlapping, (2,5) and (4,6) are overlapping, but (2,3) and (3,4) are not overlapping also (2,2) and (2,2) are not overlapping.</span></p>
<p><strong><span style="font-size: 18px;">Example 1:</span></strong></p>
<pre><span style="font-size: 18px;"><strong>Input :
</strong>n=3
ranges={{1,3,4},{2,3,5},{3,4,2}}</span>
<span style="font-size: 18px;"><strong>Output: </strong>7</span>
<span style="font-size: 18px;"><strong>Explanation:</strong>
We can see that we can take 2nd and 
3rd ranges as they are not intersecting
(only touching) we get maximum Coins by 
taking these ranges(5+2=7).</span></pre>
<p><strong><span style="font-size: 18px;">Example 2:</span></strong></p>
<pre><span style="font-size: 18px;"><strong>Input :</strong>
n=5
ranges={{1,3,4},{2,3,5},{3,4,2},{5,8,9},{2,8,10}}</span>
<span style="font-size: 18px;"><strong>Output: </strong>14</span>
<span style="font-size: 18px;"><strong>Explanation:</strong>
We can see that we can take 2nd and 
4th ranges as they are not intersecting 
we get maximum Coins(5+9=14) by taking 
these ranges.</span></pre>
<p><span style="font-size: 18px;"><strong>Your Task:</strong><br>You don't need to read input or print anything. Your task is to complete the function <strong>maxCoins()</strong> which takes an integer <strong>n</strong>(<strong>length of ranges</strong>), integer 2D integer array<strong> ranges,&nbsp;</strong>and you have to return the <strong>maximum</strong> number of <strong>coins</strong>&nbsp;you got after selecting <strong>at most</strong>&nbsp;two ranges that are not intersecting.</span></p>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(nlogn)<br><strong>Expected Space Complexity:</strong> O(n)</span><br><br><span style="font-size: 18px;"><strong>Constraints:</strong><br>1&lt;=<strong>n</strong>&lt;=10<sup>5</sup><br>0&lt;=<strong>ranges</strong>[i][0]&lt;=<strong>ranges</strong>[i][1]&lt;=10<sup>9</sup><br>0&lt;=<strong>ranges</strong>[i][2](coins)&lt;=10<sup>6</sup><br>The sum of n over all test cases won't exceed 10<sup>6</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Dynamic Programming</code>&nbsp;<code>Greedy</code>&nbsp;<code>Sorting</code>&nbsp;<code>Algorithms</code>&nbsp;