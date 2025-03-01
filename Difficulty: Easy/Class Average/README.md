<h2><a href="https://www.geeksforgeeks.org/problems/class-average4642/1?page=9&status=unsolved&sortBy=accuracy">Class Average</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given an Integer <strong>N </strong>and an array <strong>arr[] </strong>of length N. If index of the element is a Fibonacci Number, multiply the number by the index. After multiplying, if the number becomes greater than 100, make the element equal to the last two digits of the multiplied number. After doing these for all elements, find out the average of the N numbers in the Array.</span><br>
<span style="font-size:18px"><strong>Note: </strong>The array is in 1-based indexing (also in the Input). Also, print the floor value of the answer.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>N = </strong>5<strong>, </strong><strong>arr[] = </strong>{ 34, 78, 80, 91, 99 }</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">63</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">There are 5 elements.
1 is a fibonacci number and hence
34 is multiplied by 1.
2 is a fibonacci number and hence 78 is
multiplied by 2 and becomes 156 which being
greater than 100 is reduced to 56.
3 is a fibonacci number and hence 80 is
multiplied by 3 and it becomes 240, which
being greater than 100 is reduced to 40.
4 is not a fibonacci number and hence 91
is kept as it is.
5 is a fibonacci number and hence 99 is
multiplied by 5 and becomes 495 which being
greater than 100 is reduced to 95.
The total becomes 316 and the average is
63.2, floor of which is 63.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>N = </strong>2<strong>, </strong><strong>arr[] = </strong>{ 34, 99 }</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">66</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">There are 2 elements.
1 is a fibonacci number and hence
34 is multiplied by 1.
2 is a fibonacci number and hence 99 is
multiplied by 2 and becomes 198 which being
greater than 100 is reduced to 98.
The total becomes 132 and the average is 66.</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>getAvg()</strong> which takes an Integer N and an Array arr[] of length N as input and returns the answer.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(N)<br>
<strong>Expected Auxiliary Space:</strong> O(N)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong></span><br>
<span style="font-size:18px">1 &lt;= N &lt;= 10<sup>5</sup><br>
1 &lt;= arr[i] &lt;= 100</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;