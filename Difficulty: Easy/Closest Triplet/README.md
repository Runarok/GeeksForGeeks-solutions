<h2><a href="https://www.geeksforgeeks.org/problems/closest-triplet3807/1?page=8&status=unsolved&sortBy=accuracy">Closest Triplet</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:20px">Given three sorted arrays A[] of size P, B[] of size Q and C[] of size R.Find a number X such that when&nbsp; 3 elements i, j and k are chosen from A, B and C respectively,then&nbsp;X=max(abs(A[i] – B[j]), abs(B[j] – C[k]), abs(C[k] – A[i])) is minimized. Here abs() indicates absolute value.</span></p>

<p><strong><span style="font-size:20px">Example 1:</span></strong></p>

<pre><span style="font-size:20px"><strong>Input: </strong>
P=3
A[] = {1, 4, 10}
Q=3
B[] = {2, 15, 20}
R=2
C[] = {10, 12}
<strong>Output:</strong>
5
<strong>Explanation:</strong>
We take 10 from A, 15 from B and
10 from C, so,
X=max(abs(10-15),abs(15-12),abs(10-10))
which gives X=18</span></pre>

<p><strong><span style="font-size:20px">Example 2:</span></strong></p>

<pre><span style="font-size:20px"><strong>Input: </strong>
P=3
A[] = {20, 24, 100}
Q=5
B[] = {2, 19, 22, 79, 800}
R=5
C[] = {10, 12, 23, 24, 119}
<strong>Output:
</strong>2
<strong>Explanation:</strong>
We take 24 from A,22 from B and 24 from C.X
=max(abs(24-22),max(abs(24-22),abs(24-24)))
which is 2.</span></pre>

<p><br>
<span style="font-size:20px"><strong>Your Task:</strong><br>
You don't need to read input or print anything.Your task is to complete the function <strong>findClosest()</strong> which takes P,Q,R,A[],B[],C[] as input parameters and returns the minimum X where X=max(abs(A[i]-B[j]),max(abs(A[i]-C[k]),abs(B[j]-C[k]))).</span></p>

<p><br>
<span style="font-size:20px"><strong>Expected Time Complexity:</strong>O(P+Q+R)<br>
<strong>Expected Auxillary Space:</strong>O(1)</span></p>

<p><br>
<span style="font-size:20px"><strong>Constraints:</strong><br>
1&lt;=P,Q,R&lt;=10<sup>4</sup><br>
1&lt;=A[i],B[j],C[k]&lt;=10<sup>6 </sup></span><span style="font-size:18px">where 0&lt;=i&lt;P , 0&lt;=j&lt;Q , 0&lt;=k&lt;R</span></p>
</div>