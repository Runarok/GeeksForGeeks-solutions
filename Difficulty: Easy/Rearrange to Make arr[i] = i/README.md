<h2><a href="https://www.geeksforgeeks.org/problems/rearrange-an-array-such-that-arri-i3618/1?page=1&status=unsolved&sortBy=accuracy">Rearrange to Make arr[i] = i</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given a permutation of size n. The range of values for the array elements is from 0 to n-1. All elements may not be present in the array. If the element is not present then there will be -1 present in the array. Rearrange the array such that arr[i] = i and if arr[i] is not present then -1 at that place. Index i is 0-based.</span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong> arr[] = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1]
<strong>Output:</strong> [-1, 1, 2, 3, 4, -1, 6, -1, -1, 9]
<strong>Explanation: </strong>In range 0 to 9, all except 0, 5, 7 and 8 are present. Hence, we print -1 instead of them.
</span></pre>
<pre><span style="font-size: 18px;"><strong>Input:</strong> arr[] = [0, 1, 2, 3, 4, 5] <strong>
Output:</strong> [0, 1, 2, 3, 4, 5]<br><strong>Explanation: </strong>In range 0 to 5, all number are present.</span></pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(nlogn).<br><strong>Expected Auxiliary Space:</strong>&nbsp;O(1).</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ arr.size() ≤ 10<sup>5</sup><br>0 ≤ arr[i] ≤ arr.size()-1</span></p></div>