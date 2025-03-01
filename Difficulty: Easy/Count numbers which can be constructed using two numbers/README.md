<h2><a href="https://www.geeksforgeeks.org/problems/count-numbers-which-can-be-constructed-using-two-numbers0636/1?page=11&status=unsolved&sortBy=accuracy">Count numbers which can be constructed using two numbers</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given three positive integers <strong>x</strong>, <strong>y</strong> and <strong>n</strong>, the task is to find count of all numbers from 1 to n that can be formed using x and y. A number can be formed using x and y if we can get it by adding any number of occurrences of x and/or y.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>x = </strong>2, <strong>y = </strong>3, <strong>n = </strong>10</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">9</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">We can form 9 out of 10 numbers using
2 and 3 and 10; 2 = 2, 3 = 3, 4 = 2+2,
5 = 2+3, 6 = 3+3 7 = 2+2+3, 8 = 3+3+2,
9 = 3+3+3 , 10 = 3+3+2+2.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>x = </strong>5, <strong>y = </strong>7, <strong>n = </strong>10</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">3</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">We can form 3 out of 10 numbers using
5 and 7 and 10; 5 = 5, 7 = 7, 5+5 = 10.</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>getCount()</strong> which takes 3 Integers x,y and n respctively as input and returns the answer.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(n)<br>
<strong>Expected Auxiliary Space:</strong> O(n)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong></span><br>
<span style="font-size:18px">1 &lt;= x,y,n &lt;= 10<sup>5</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;