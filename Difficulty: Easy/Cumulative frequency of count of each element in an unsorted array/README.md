<h2><a href="https://www.geeksforgeeks.org/problems/frequency-of-each-element-in-an-unsorted-array0759/1?page=3&category=Arrays&status=unsolved,attempted&sortBy=accuracy">Cumulative frequency of count of each element in an unsorted array</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an array <strong>arr[]</strong> of elements. The task is to calculate the cumulative frequency of each distinct element of the array.</span></p>
<p><span style="font-size: 18px;"><strong>Note:</strong>&nbsp;Cumulative frequency should be taken according to the sorted order of elements.</span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input :</strong> arr[] = [1, 2, 2, 1, 3, 4]
<strong>Output :</strong> [2, 4, 5, 6]
<strong>Explanation: </strong>The elements are first counted for their frequencies, resulting in {1: 2, 2: 2, 3: 1, 4: 1}. These elements are then sorted by their value, yielding the order [1, 2, 3, 4]. The cumulative frequencies are calculated by adding up the frequencies of the elements as we progress through the sorted order. Thus, the output is [2, 4, 5, 6], representing the cumulative count of elements in the sorted order.</span></pre>
<pre><span style="font-size: 18px;"><strong>Input :</strong> arr[] = [1, 2, 1, 2, 1, 2]
<strong>Output :</strong> [3, 6]
</span></pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(nlogn).<br><strong>Expected Auxiliary Space:</strong> O(n)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ arr.size() ≤ 10<sup>5</sup><br>1 ≤ arr[i] ≤ 10<sup>5</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Hash</code>&nbsp;<code>Sorting</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;