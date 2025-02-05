<h2><a href="https://www.geeksforgeeks.org/problems/josephus-circle-using-list/1?page=1&difficulty=Medium&status=unsolved&sortBy=accuracy">Josephus Circle using List</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">You are given two integers <strong>n </strong>and <strong>k</strong> where n represents the total number of people who are standing in a circle, and k represents the person who gets killed in each iteration. You need to find which person is the last man standing. The indexing here starts from one. The counting starts from the first&nbsp;person and after each killing, the counting resets and start from the next neighbour of the killed person.</span></p>
<p><span style="font-size: 18px;"><strong>Examples :</strong></span></p>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>n = 3, k = 2
<strong>Output: </strong>3<strong>
Explanation: </strong>There are 3 persons so skipping 1 person i.e 1st person 2nd person will be killed. Thus the safe position is 3.</span></pre>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>n = 5, k = 3
<strong>Output: </strong>4<strong>
Explanation: </strong>There are 5 persons so skipping 2 person i.e 3rd person will be killed. Thus the safe position is 4.</span></pre>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>2 &lt;= k, n &lt;= 20</span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>CPP</code>&nbsp;