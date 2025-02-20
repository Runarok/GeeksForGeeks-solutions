<h2><a href="https://www.geeksforgeeks.org/problems/make-coprime-array3058/1?page=1&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">Make Co-prime Array</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 14pt;">Given an array of elements, find the minimum number of insertions to convert the given array into a co-prime array adjacent pair-wise.&nbsp;</span></p>
<p><span style="font-size: 14pt;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>arr[] = [2, 7, 28]
<strong>Output: </strong>1<strong>
Explanation: </strong>Here, 1st pair = {2, 7} are co-primes( gcd(2, 7) = 1). 2nd pair = {7, 28} are not co-primes, insert 9 between them. gcd(7, 9) = 1 and gcd(9, 28) = 1.</span></pre>
<pre><span style="font-size: 14pt;"><strong>Input:</strong> arr[] = [5, 10, 20]
<strong>Output : </strong>2<strong>
Explanation: </strong>Here, there is no pair which are co-primes. Insert 7 between (5, 10) and 1 between (10, 20).</span></pre>
<p><span style="font-size: 14pt;"><strong>Expected Time Complexity:</strong> O(n).<br><strong>Expected Auxiliary Space:</strong>&nbsp;O(1).</span></p>
<p><span style="font-size: 14pt;"><strong>Constraints:</strong><br>1&lt;= arr.size() &lt;=10<sup>6</sup><br>1&lt;= arr[i] &lt;=10</span><sup>6</sup></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Data Structures</code>&nbsp;