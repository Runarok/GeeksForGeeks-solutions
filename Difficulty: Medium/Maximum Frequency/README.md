<h2><a href="https://www.geeksforgeeks.org/problems/maximum-frequency-1662528911/1?page=1&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Maximum Frequency</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an interger array <strong>arr[]&nbsp;</strong>of size <strong>n</strong>&nbsp;and an interger <strong>k</strong>. Return the <strong>maximum frequency</strong> of an element in the array after using <strong>atmost</strong> k <strong>Increment&nbsp;</strong>operations.&nbsp;</span><span style="font-size: 18px;">In one operation, you can choose an index and increment its value by 1. After performing <strong>atmost k</strong> operations return the&nbsp;</span><strong style="font-size: 18px;">maximum frequency</strong><span style="font-size: 18px;"> of an element in the array.</span></p>
<p><span style="font-size: 18px;"><strong>Example 1:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong>
n=3
arr[] = {2,2,4},k=4
<strong>Output:</strong> 3
<strong>Explanation</strong>: Apply two <strong>increment </strong>operations on index 0 and two operations
on index 1 to make arr[]={4,4,4}.Frequency of 4 is 3.</span>
</pre>
<p><span style="font-size: 18px;"><strong>Example 2:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong>
n=4
arr[] = {7,7,7,7},k=5
<strong>Output:</strong> 4
<strong>Explanation</strong>: It is optimal to not use any operation and the Frequency of 7 is 4.</span></pre>
<p><br><span style="font-size: 18px;"><strong>Your Task:</strong><br>You don't need to read input or print anything. Your task is to complete the function <strong>max</strong><strong>Frequency()&nbsp;</strong>which takes the array arr[] ,interger n &nbsp;and integer&nbsp; k as input and returns the maximum frequency of an element.</span></p>
<p><br><span style="font-size: 18px;"><strong>Expected Time Complexity:&nbsp;</strong>O(nlogn).<br><strong>Expected Auxiliary Space:&nbsp;</strong>O(1).</span></p>
<p><br><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ n,k&nbsp;≤ 10<sup>5</sup><br>1 ≤ arr[i]&nbsp;≤ 10<sup>6</sup></span></p></div>