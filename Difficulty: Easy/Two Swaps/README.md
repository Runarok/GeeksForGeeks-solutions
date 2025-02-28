<h2><a href="https://www.geeksforgeeks.org/problems/two-swaps--113428/1?page=2&category=Arrays&status=unsolved,attempted&sortBy=accuracy">Two Swaps</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given a permutation of first n natural numbers as an array<strong> arr[]</strong></span><span style="font-size: 18px;">. Your task is to sort&nbsp;the&nbsp;array&nbsp;in <strong>exactly</strong> two swaps. If It is possible to sort the array then return true otherwise return false.</span></p>
<p><span style="font-size: 18px;"><strong>Note:</strong> You can't swap the same pair of indexes two times.</span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong> arr[] = [4, 3, 2, 1]
<strong>Output: </strong>true
<strong>Explanation: 
</strong>swap(arr[1], arr[4]), now arr[] = [1, 3, 2, 4]
swap(arr[2], arr[3]), now arr[] = [1, 2, 3, 4]</span>
</pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [4, 3, 1, 2]
<strong>Output: </strong>false<strong>
Explanation: </strong>
Not possible to sort the array in 2 swaps.</span>
</pre>
<p><strong style="font-size: 18px;">Expected Time Complexity:&nbsp;</strong><span style="font-size: 18px;">O(n)</span><br style="font-size: 18px;"><strong style="font-size: 18px;">Expected Auxiliary Space:&nbsp;</strong><span style="font-size: 18px;">O(1)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ arr.size() ≤ 10<sup>6</sup><br>1 ≤ arr[i] ≤ arr.size()</span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Data Structures</code>&nbsp;