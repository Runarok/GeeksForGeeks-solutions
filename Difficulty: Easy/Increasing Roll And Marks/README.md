<h2><a href="https://www.geeksforgeeks.org/problems/increasing-roll-and-marks/1?page=2&status=unsolved,attempted&sortBy=accuracy">Increasing Roll And Marks</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">We will be given the<strong> roll number along with marks</strong>.</span>&nbsp;<span style="font-size:18px">One student may have a <strong>different number of subjects</strong>. We will also be given<strong> subjects code</strong> in <strong>numeric forms</strong>. We need to<strong> return the list in ascending order</strong> such that if roll numbers are the same then we should return the list in ascending order of the marks and if marks are also same then return the list in <strong>ascending order of their subject code</strong>.</span></p>

<p><span style="font-size:18px"><strong>Input Format:</strong><br>
First-line will contain the number of test cases T. Each testcase will contain N, the total number of data available. The next 3 lines will contain N numbers, first denoting roll number, second denoting marks and third denoting subject codes.</span></p>

<p><span style="font-size:18px"><strong>Output Format:</strong><br>
For each testcase, in a new line, print the data in sorted order as mentioned.</span></p>

<p><span style="font-size:18px"><strong>Users Task: </strong><br>
This is a<strong> </strong>function problem. You need to complete the function <strong>increasing_List</strong> that takes a vector of pair of pairs as parameter and returns the output in the same format. </span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= T &lt;= 100</span><br>
<span style="font-size:18px">1 &lt;= N &lt;= 50</span><br>
<span style="font-size:18px">1 &lt;= R[i], M[i], S[i] &lt;= 1000</span></p>

<p><span style="font-size:18px"><strong>Example:<br>
Input:</strong></span><br>
<span style="font-size:18px">1<br>
4<br>
1 2 1 2<br>
3 4 4 4<br>
1 3 2 4</span><br>
<span style="font-size:18px"><strong>Output:</strong><br>
1 1 2 2<br>
3 4 4 4<br>
1 2 3 4</span></p>

<p><strong><span style="font-size:18px">Explanation:<br>
Testcase1: </span></strong><span style="font-size:18px">The data of a student are represented as {Roll Number, Marks, Subject code}. The first data is {1 3 1}. The second data is {2 4 3}. The third data is {1 4 2}. The fourth data is {2 4 4}. Now sorting the data according to the given conditions we get {1 3 1} at first, then&nbsp; {1 4 2}, then {2 4 3}, and then {2 4 4}</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>STL</code>&nbsp;