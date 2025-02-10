<h2><a href="https://www.geeksforgeeks.org/problems/largest-sum-contiguous-subarray-in-range-1587115620/1?page=1&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Largest Sum Contiguous Subarray in Range</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given an Array <strong>arr</strong> of size <strong>N</strong>, and <strong>Q</strong> queries of two types <strong>1</strong> and <strong>2</strong>. In </span><span style="font-size:18px">the type-1</span><span style="font-size:18px"> query, you will be given a range (left, right) and </span><span style="font-size:18px">the task</span><span style="font-size:18px"> is to print the <a href="https://www.geeksforgeeks.org/maximum-subarray-sum-given-range/" rel="noopener">Largest sum Contiguous Subarray</a> from the Array arr between the range (left, right). For type 2 queries, you will be given </span><span style="font-size:18px">the index</span><span style="font-size:18px">, an integer value, you need to update value to </span><strong><span style="font-size:18px">arr</span></strong><strong><sub>index</sub></strong>.</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>N = 8, Q = 3
arr[] = {-2,-3,4,-1,-2,1,5,-3}
Queries: query(5,8)
&nbsp;        update(1,11)
&nbsp;        query(1,3)
<strong>Output:
</strong>6
12<strong>
Explanation: </strong>In the first query, the task
is to print the largest sum of contiguous
subarray in range 5-8, which consists of
{-2, 1, 5, -3}. The largest sum is 6,
which is formed by the subarray {1, 5}.
In the second query, an update operation
is done, which updates a[1] to 10, hence
the sequence is {10,-3,4,-1,-2,1,5,-3}. 
In the third query, the task is to print 
the largest sum of a contiguous subarray
in range 1-3, which consists of {10,-3,4}
The largest sum is 11, which is formed by
the subarray {10, -3, 4}.</span></pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
Your task is to complete the function <strong>query()</strong> that should return the Largest Sum Contiguous Subarray in the given range and <strong>update() </strong>that should update the value in the array. A Tree has been already implemented for you(see driver's code)</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= N &lt;= 10<sup>3</sup><br>
1 &lt;= Q &lt;= 500<br>
-10<sup>3 </sup>&lt;= A[] &lt;= 10<sup>3</sup><br>
1 &lt;= left,right &lt;= N&nbsp;<br>
1 &lt;= Index &lt;= N</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Segment-Tree</code>&nbsp;<code>Advanced Data Structure</code>&nbsp;