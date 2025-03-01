<h2><a href="https://www.geeksforgeeks.org/problems/prime-factors-of-lcm-of-array-elements3940/1?page=16&status=unsolved&sortBy=accuracy">Prime factors of LCM of array elements</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given an array of elements find all the prime factors of the LCM of the given numbers.</span></p>

<p><br>
<span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N = 8
Arr = {1 , 2, 3, 4, 5, 6, 7, 8}
<strong>Output:</strong> 2 3 5 7
<strong>Explaination:</strong> LCM of N elements is 840 
and 840 = 2*2*2*3*5*7.so prime factors 
would be 2, 3, 5, 7.</span></pre>

<p><br>
<span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N = 4
Arr = {20, 10, 15, 60}</span><span style="font-size:18px">
<strong>Output:</strong> 2 3 5
<strong>Explaination:</strong> LCM of N elements is 60
and 60 = 2*2*3*5.so prime factors
would be 2, 3, 5.</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>primeFactorLcm()</strong>&nbsp;which takes the array <strong>Arr[]</strong> and its size <strong>N&nbsp;</strong>as input parameters&nbsp;and returns all the prime factors of the LCM of the given numbers.</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(Nsqrt(max(Arr<sub>i</sub>))<br>
<strong>Expected Auxiliary Space:</strong> O(N)</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ N ≤ 10<sup>4</sup><br>
1 ≤ Arr<sub>i</sub>&nbsp;≤ 10<sup>4 </sup>where 0≤i&lt;N</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;