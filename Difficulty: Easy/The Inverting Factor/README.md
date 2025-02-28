<h2><a href="https://www.geeksforgeeks.org/problems/the-inverting-factor3932/1?page=1&category=Arrays&status=unsolved,attempted&sortBy=accuracy">The Inverting Factor</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">You are given an array <strong>arr[]</strong> of positive integers. Your task is to find the smallest possible "Inverting Factor" among all pairs of integers in the array. The "Inverting Factor" of two integers is defined as the absolute difference between the reverse of the two integers.</span></p>
<p><span style="font-size: 18px;"><strong>Note:</strong> Trailing zeros in a number of ignored while reversing, i.e. 1200 becomes 21 when reversed.</span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input :</strong> arr[] = [56, 20, 47, 93, 45]
<strong>Output :</strong> 9
<strong>Explanation: </strong>The minimum inverting factor is 9 of the pair (56,47).Reverse (56 -&gt; 65) and (47 -&gt; 74) so,difference between them is 9.</span></pre>
<pre><span style="font-size: 18px;"><strong>Input :</strong> arr[] = [48, 23, 100, 71, 56, 89]<strong>
Output :</strong>  14 </span></pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(nlogn)<br><strong>Expected Auxiliary Space:</strong> O(1)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints :&nbsp;</strong><br>2 ≤ arr.size() ≤ 10<sup>5</sup><br>1 ≤ arr[i] ≤ 10<sup>5</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Numbers</code>&nbsp;<code>Reverse</code>&nbsp;<code>Data Structures</code>&nbsp;