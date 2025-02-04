<h2><a href="https://www.geeksforgeeks.org/problems/rahul-and-the-lift1006/1?page=26&difficulty=Medium&status=unsolved&sortBy=accuracy">Rahul and The Lift</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Rahul entered lift on the ground floor of his building which consists of Z floors including the ground floor.<br>The lift already had N people in it. It is known that they will leave the lift in groups. Let us say that<br>there are M groups. Rahul is curious to find the number of ways in which these M groups can leave the lift.<br>It is assumed that each group is unique and no one leaves the lift on the ground floor.</span></p>
<p><span style="font-size: 18px;"><strong>Example 1:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>z = 3, n = 10, m = 2
<strong>Output: </strong>6
<strong>Explanation: </strong>Let the groups are A and B.
1. Both A and B gets down on first floor A 
going first followed by B
2. Both A and B gets down on first floor B 
going first followed by A
3. Both A and B gets down on second floor A 
going first followed by B
4. Both A and B gets down on second floor B 
going first followed by A
5. A gets down of first floor and B gets 
down on second.
6. B gets down of first floor and A gets 
down on second.</span></pre>
<p><span style="font-size: 18px;"><strong>Your Task:</strong><br>You don't need to read or print anyhting. Your task it to complete the function&nbsp;<strong>noOfWays()&nbsp;</strong>which takes z, n and m as input parameter and returns total number of ways <strong>modulo 10<sup>9</sup>+7.</strong></span></p>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:&nbsp;</strong>O(z*log(z))<br><strong>Expected Space Compelxity:&nbsp;</strong>O(z)</span><br>&nbsp;</p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 &lt;= z &lt;= 10<sup>5</sup><br>1 &lt;= m &lt;= n &lt;= 10<sup>5</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Combinatorial</code>&nbsp;<code>Modular Arithmetic</code>&nbsp;