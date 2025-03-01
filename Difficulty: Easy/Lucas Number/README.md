<h2><a href="https://www.geeksforgeeks.org/problems/lucas-number4515/1?page=3&status=unsolved&sortBy=accuracy">Lucas Number</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">A Lucas Number is a number which is represented by the following recurrence<br>L<sub>n</sub>&nbsp;= L<sub>n-1</sub>&nbsp;+ L<sub>n-2</sub>&nbsp;for<strong> n&gt;1</strong><br>L<sub>0</sub>&nbsp;= 2<br>L<sub>1</sub>&nbsp;= 1</span></p>
<p><span style="font-size: 18px;">Given a number <strong>n,</strong> find the n<strong><sup>th</sup></strong> lucas number.</span></p>
<p><span style="font-size: 18px;"><strong>Note:</strong>&nbsp;Since the output may be very large calculate the answer&nbsp;<strong>modulus 10^9+7.</strong></span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>n = 5
<strong>Output:</strong> 11
<strong>Explanation</strong>: L<sub>3</sub> + L<sub>4</sub> = L<sub>5, </sub>L<sub>3 </sub>= 4 and L<sub>4</sub> = 7</span></pre>
<pre><span style="font-size: 18px;"><strong>Input</strong>: n= 7
<strong>Output:</strong> 29
<strong>Explanation</strong>: L<sub>5</sub></span><span style="font-size: 18px;">&nbsp;+ L<sub>6</sub></span><span style="font-size: 18px;">&nbsp;= L<sub>7, </sub></span><span style="font-size: 18px;">L<sub>5</sub></span><sub> </sub><span style="font-size: 18px;">= 11 and L<sub>6</sub></span><span style="font-size: 18px;"> = 18</span></pre>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 &lt;= n &lt;= 10<sup>6</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Dynamic Programming</code>&nbsp;<code>series</code>&nbsp;<code>Algorithms</code>&nbsp;