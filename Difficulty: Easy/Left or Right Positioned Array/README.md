<h2><a href="https://www.geeksforgeeks.org/problems/left-or-right-positioned-array5757/1?page=1&category=Arrays&status=attempted&sortBy=accuracy">Left or Right Positioned Array</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an array <strong>arr[]</strong>, determine if it can be rearranged such that each element is equal to the number of elements to its left or the number of elements to its right. Return <strong>true</strong> if the condition is met, otherwise return <strong>false</strong>.</span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [1, 3, 3, 2]
<strong>Output: </strong>true
<strong>Explanation: </strong>This array has one such arrangement [3, 1, 2, 3]. In this arrangement, first element '3' indicates that three numbers are after it, the 2nd element '1' indicates that one number is before it, the 3rd element '2' indicates that two elements are before it.</span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [1, 6, 5, 4, 3, 2, 1]
<strong>Output: </strong>false
<strong>Explanation: </strong>No such arrangement is possible</span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [2, 0, 1, 3]
<strong>Output: </strong>true
<strong>Explanation: </strong>Possible arrangement is [0, 1, 2, 3]</span></pre>
<p><span style="font-size: 18px;"><br></span><span style="font-size: 18px;"><strong>Expected Time Complexity: </strong>O(n)<br><strong>Expected Auxiliary Space: </strong>O(n)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ arr.size() ≤ 10<sup>6</sup><br>0≤ arr[i] ≤ 10<sup>6</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Data Structures</code>&nbsp;