<h2><a href="https://www.geeksforgeeks.org/problems/minimum-notes-required2535/1?page=10&status=unsolved&sortBy=accuracy">Minimum Notes Required</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">An employee's wallet can contain no more than <strong>M </strong>notes or coins. A boss pays his salary by the minimum notes possible. However the employee may have to leave out some money. Find how much money he has to lose if his original salary is <strong>N</strong>.<br><strong>Note</strong>: The values of notes or coins available are 1000, 500, 100, 50, 20, 10, 5, 2 and 1.</span></p>
<p><span style="font-size: 18px;"><strong>Example 1:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong></span>
<span style="font-size: 18px;"><strong>N = </strong>1712, <strong>M </strong>= 4</span>
<span style="font-size: 18px;"><strong>Output:</strong></span>
<span style="font-size: 18px;">12</span>
<span style="font-size: 18px;"><strong>Explanation:</strong></span>
<span style="font-size: 18px;">The boss will give him one 1000, one 500
and two 100 notes, one note of 10 and
one of 2. But because the employee can't
have more notes than 4, he can have a
maximum amount of 1700.
So, he will lose 12.</span></pre>
<p><span style="font-size: 18px;"><strong>Example 2:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong></span>
<span style="font-size: 18px;"><strong>N = </strong>1023, <strong>M </strong>= 2</span>
<span style="font-size: 18px;"><strong>Output:</strong></span>
<span style="font-size: 18px;">3</span>
<span style="font-size: 18px;"><strong>Explanation:</strong></span>
<span style="font-size: 18px;">The boss will give him one 1000, one 20
one 2 and one note of 1. But because the
employee can't have more notes than 2,
he can have a maximum amount of 1020.
So, he will lose 3.</span>
</pre>
<p><span style="font-size: 18px;"><strong>Your Task:</strong><br>You don't need to read input or print anything. Your task is to complete the function <strong>getLoss()</strong> which takes 2 Integers N and M as input and returns the answer.</span></p>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(1)<br><strong>Expected Auxiliary Space:</strong> O(1)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong></span><br><span style="font-size: 18px;">1 &lt;= N,M &lt;= 10<sup>5</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;