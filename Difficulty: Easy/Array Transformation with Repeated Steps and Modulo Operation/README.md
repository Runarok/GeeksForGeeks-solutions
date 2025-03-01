<h2><a href="https://www.geeksforgeeks.org/problems/array-transformation-with-repeated-steps-and-modulo-operation/1?page=14&status=unsolved&sortBy=accuracy">Array Transformation with Repeated Steps and Modulo Operation</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18.6667px;">You are given an array arr[] of integers. In each move, you need to perform the following operations on every element <strong>arr[i]</strong></span><span style="font-size: 18.6667px;"> in the array k times:</span></p>
<ul>
<li><span style="font-size: 14pt;">If every arr[i] equals 80 at some point, add another element 0 to the end of the array</span></li>
<li><span style="font-size: 14pt;">Replace each arr[i] by (arr[i] + 1) modulo 81.</span></li>
</ul>
<p><strong><span style="font-size: 18.6667px;">Examples:</span></strong></p>
<pre><span style="font-size: 14pt;"><span style="font-size: 18.6667px;"><strong>Input:</strong> arr[] = [65, 2, 80, 4], k = 3
<strong>Output:</strong> 5
<strong>Explanation:</strong> After first move array will be: [66, 3, 0, 5, 1], after second move array will be [67, 4, 1, 6, 2], after third move array will be [68, 5, 2, 7, 3]. Hence final size is 5.</span></span></pre>
<pre><span style="font-size: 14pt;"><span style="font-size: 18.6667px;"><strong>Input:</strong> arr[] = [80, 80, 79, 79], k = 2
<strong>Output:</strong> 8
<strong>Explanation:</strong> After first move array will be: {0,0,80,80,0,0}, after second move array  will be {1, 1, 0, 0, 1, 1, 0, 0}. Hence final size is 8.</span></span></pre>
<p><span style="font-size: 14pt;"><span style="font-size: 18.6667px;"><strong>Constraints:</strong><br>1 &lt;= arr.size(), k &lt;= 1000<br>1 &lt;= arr[i] &lt; 81<br></span></span></p></div>