<h2><a href="https://www.geeksforgeeks.org/problems/largest-permutation1351/1?page=2&category=Arrays&status=unsolved,attempted&sortBy=accuracy">Largest Permutation</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 14pt;">Given a permutation&nbsp;as an array and an integer k. Print the lexicographically largest permutation after at most k swaps.</span></p>
<p><span style="font-size: 14pt;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>arr[] = [4, 5, 2, 1, 3], k = 3
<strong>Output:</strong> [5, 4, 3, 2, 1]
<strong>Explanation</strong>: Swap 1<sup>st</sup> and 2<sup>nd</sup> elements: 5 4 2 1 3 Swap 3<sup>rd</sup> and 5<sup>th</sup> elements: 5 4 3 1 2 Swap 4<sup>th</sup> and 5<sup>th</sup> elements: 5 4 3 2 1 </span></pre>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>arr[] = [2, 1, 3], k = 1
<strong>Output: </strong>[3, 1, 2]
<strong>Explanation</strong>: Swap 1<sup>st</sup> and 3<sup>re</sup> elements: 3 1 2 </span></pre>
<p><span style="font-size: 14pt;"><strong>Expected Time Complexity:</strong> O(n).<br><strong>Expected Auxiliary Space:</strong> O(n).</span></p>
<p><span style="font-size: 14pt;"><strong>Constraints:</strong><br>2 ≤ arr.size() ≤ 10<sup>6<br></sup>1&nbsp;≤ k ≤ arr.size()</span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Greedy</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;