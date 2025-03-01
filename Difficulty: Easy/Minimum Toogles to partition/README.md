<h2><a href="https://www.geeksforgeeks.org/problems/minimum-toogles-to-partition0135/1?page=11&status=unsolved&sortBy=accuracy">Minimum Toogles to partition</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given an array <strong>arr[]</strong> of <strong>n</strong> integers containing only 0 and 1. Write a program to find the minimum toggles (switch from 0 to 1 or vice-versa) required such the array the array become partitioned, i.e., it has first 0s then 1s. There should be at least one 0 in the beginning, and there can be zero or more 1s in the end.</span></p>

<p><strong><span style="font-size:18px">Example 1:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong> n = 5
arr = {1, 0, 1, 1, 0}
<strong>Output:</strong> 2
<strong>Explaination:</strong> The changed array will be 
{0, 0, 1, 1, 1}. So the number of toggles 
here required is 2.</span></pre>

<p><strong><span style="font-size:18px">Example 2:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong> n = 7
arr = {0, 1, 0, 0, 1, 1, 1}
<strong>Output:</strong> 1
<strong>Explaination:</strong> The changed array will be 
{0, 0, 0, 0, 1, 1, 1}. Required toggles are 1.</span></pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You do not need to read input or print output. Your task is to complete the function <strong>minToggle()</strong> which takes n and arr as input parameters and returns the minimum number of toggles required to modify the array.&nbsp;</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(n)<br>
<strong>Expected Auxiliary Space:</strong> O(n)</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ n ≤ 10<sup>5</sup><br>
1 ≤ arr[i] ≤ 100</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;