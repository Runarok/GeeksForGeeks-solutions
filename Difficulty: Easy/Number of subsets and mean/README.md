<h2><a href="https://www.geeksforgeeks.org/problems/number-of-subsets-and-mean1225/1?page=8&status=unsolved&sortBy=accuracy">Number of subsets and mean</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Let Max be the maximum possible mean of a multiset of values obtained from an array <strong>Arr </strong>of length <strong>N</strong>. Let Min be the minimum possible mean of a multiset of values obtained from the same array. Note that in a multiset values may repeat. The task is to find the <strong>number of multisets</strong> with mean as Max and the number of multisets with mean as Min. The answer may be too large so output the number of multisets modulo 10<sup>9</sup>+7. </span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>N = </strong>5
<strong>Arr = </strong>{3, 1, 2, 3, 4}</span> 
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">1 1</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">The maximum possible Mean of a Subset
of the array is 4. There can be only 1
such subset - {3, 1, 2, 3, <strong>4</strong>}.
The minimum possible Mean of a Subset
of the array is 1. There can be only 1
such subset - {3, <strong>1</strong>, 2, 3, 4}.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>N = </strong>3
<strong>Arr = </strong>{1, 2, 1}</span> 
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">1 3</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">The maximum possible Mean of a Subset
of the array is 2. There can be only 1
such subset - {1, <strong>2</strong>, 1}.
The minimum possible Mean of a Subset
of the array is 1. There can be 3 such
subsets - {<strong>1</strong>, 2, 1}; {1, 2, <strong>1</strong>}; {<strong>1</strong>, 2, <strong>1</strong>}.</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>numOfSubsets()</strong> which takes an Integer N and an array Arr[] as input and returns a vector of two numbers- the number of multisets with mean as Max and the number of multisets with mean as Min.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(N)<br>
<strong>Expected Auxiliary Space:</strong> O(N)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong></span><br>
<span style="font-size:18px">1 &lt;= N &lt;= 10<sup>5</sup><br>
1 &lt;= Arr[i] &lt;= 10<sup>5</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;