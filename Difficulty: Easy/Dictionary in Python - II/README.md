<h2><a href="https://www.geeksforgeeks.org/problems/dictionary-in-python-ii/1?page=1&status=unsolved&sortBy=accuracy">Dictionary in Python - II</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 14pt;">You are now familiar with the dictionary in Python. It's time to dive deeper into the dictionary in Python. How can you use a dictionary&nbsp;to store the frequency of elements in list L. Given below is one method:</span></p>
<pre><span style="font-size: 14pt;">for i in L:
     dict[i] = 0

for i in L:
     dict[i] += 1</span></pre>
<p><span style="font-size: 14pt;">Now, use this concept to solve a question. Given a list&nbsp;<strong>arr[]</strong>, of<strong>&nbsp;</strong>positive integers, and an integer&nbsp;<strong>sum</strong>. The task is to check if any pair exists in the array whose sum is equal to the given&nbsp;<strong>sum</strong>. If such a pair exists return true, otherwise, return false.</span></p>
<p><span style="font-size: 14pt;"><strong>Example:</strong></span></p>
<pre><span style="font-size: 14pt;"><strong>Input:</strong> arr[] = [1, 2, 3, 3, 5], sum = 8 
<strong>Output:</strong> true
<strong>Explanation: </strong>Pair with sum 8 is present in the array which is (3, 5).<br></span></pre>
<pre><span style="font-size: 14pt;"><strong>Input:</strong> arr[] = [3, 2, 5], sum = 6 
<strong>Output:</strong> false
<strong>Explanation: </strong>No such pair exists in the array.</span></pre>
<p><span style="font-size: 14pt;"><strong>Constraints:</strong></span><br><span style="font-size: 14pt;">1 &lt;= arr.size() &lt;= 10<sup>4</sup></span><br><span style="font-size: 14pt;">1 &lt;= arr[i], sum &lt;= 10<sup>4</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>python-dict</code>&nbsp;<code>python</code>&nbsp;