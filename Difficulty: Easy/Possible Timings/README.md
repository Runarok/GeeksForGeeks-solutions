<h2><a href="https://www.geeksforgeeks.org/problems/possible-timings2437/1?page=1&status=unsolved&sortBy=accuracy">Possible Timings</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a one/two-digit timing, calculate the possibilities of occurrence of other timings(including the glowing one) with relevant to glowing segments, assuming some segments may not be glowing.<br>
<strong>Displaying the numbers is done using a seven-segment display. It is guaranteed that the sticks currently displaying are working fine.</strong></span></p>

<p><span style="font-size:18px"><img alt="" src="https://contribute.geeksforgeeks.org/wp-content/uploads/possible-timings.jpg"></span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
S = "78"
<strong>Output:</strong>
5
<strong>Explanation:</strong>
<strong>7</strong> can be replaced by 
<strong>5</strong> different numbers 
9, 3, 8, 0, and 7
(if none of the segment 
is broken) and <strong>8</strong> can be 
replaced by only <strong>1</strong> 
number i.e 8 itself
(if none of the the 
segment is broken), 
therefore the answer 
is <strong>5*1=5</strong>.</span></pre>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px">S = "05"</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">8</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px"><strong>0</strong> can be replaced by </span>
<span style="font-size:18px"><strong>2</strong> numbers, 8 and 0,</span>
<span style="font-size:18px">while <strong>5</strong> can be replaced</span>
<span style="font-size:18px">by <strong>4</strong> different numbers.</span>
<span style="font-size:18px">So, the answer is <strong>4*2=8</strong>.</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong></span></p>

<p><span style="font-size:18px">You don't need to read input or print anything. Your task is to complete the function numberOfPossibleTimings() which takes a string S and return number of possible timings.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(1)<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
0&lt;=x&lt;=99<br>
<strong>Note:&nbsp;</strong> The number <strong>x</strong> should contain 2 digits like 1 should be written as 01.</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Date-Time</code>&nbsp;