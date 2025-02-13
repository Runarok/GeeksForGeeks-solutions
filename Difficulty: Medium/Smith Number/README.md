<h2><a href="https://www.geeksforgeeks.org/problems/smith-number4132/1?page=1&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Smith Number</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given a number <strong>n</strong>, the task is to find out whether this number is a <strong>Smith number</strong> or not. A Smith number is <strong>a composite</strong> <strong>number</strong> whose sum of digits is equal to the <strong>sum of digits of its prime factorization</strong>.</span></p>
<p><span style="font-size: 18px;"><strong>Example 1:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong></span>
<span style="font-size: 18px;">n = 648</span>
<span style="font-size: 18px;"><strong>Output:</strong></span>
<span style="font-size: 18px;">1</span>
<span style="font-size: 18px;"><strong>Explanation:</strong></span>
<span style="font-size: 18px;">648 = 2<sup>3</sup>*3<sup>4</sup>, 6+4+8 = 2+2+2+3+3+3+3. And since 648 is a <strong>composite number</strong>, 648 is a Smith number.</span></pre>
<p><span style="font-size: 18px;"><strong>Example 2:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong></span>
<span style="font-size: 18px;">n = 762</span>
<span style="font-size: 18px;"><strong>Output:</strong></span>
<span style="font-size: 18px;">1</span>
<span style="font-size: 18px;"><strong>Explanation:</strong></span>
<span style="font-size: 18px;">762 = 2<sup>1</sup>*3<sup>1</sup>*127<sup>1</sup> is a Smith number since 7+6+2 = 2+3+(1+2+7) and it is a <strong>composite number</strong>.</span></pre>
<p><span style="font-size: 18px;"><strong>Example 3:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong></span>
<span style="font-size: 18px;">n = 7</span>
<span style="font-size: 18px;"><strong>Output:</strong></span>
<span style="font-size: 18px;">0</span>
<span style="font-size: 18px;"><strong>Explanation:</strong></span>
<span style="font-size: 18px;">7 is not a Smith number since 7 is <strong>not</strong> a <strong>composite number</strong>.</span></pre>
<p><span style="font-size: 18px;"><strong>Your Task:</strong><br>You don't need to read input or print anything. Your task is to complete the function <strong>smithNum()</strong> which takes an Integer n as input and returns the answer.</span></p>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(sqrt(n) * log(n))<br><strong>Expected Auxiliary Space:</strong> O(1)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong></span><br><span style="font-size: 18px;">1 &lt;= n &lt;= 10<sup>9</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>series</code>&nbsp;<code>sieve</code>&nbsp;<code>Algorithms</code>&nbsp;