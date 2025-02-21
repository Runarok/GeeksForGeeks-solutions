<h2><a href="https://www.geeksforgeeks.org/problems/countries-at-war2936/1?page=1&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">Countries at war</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 14pt;">The two countries of <strong>A</strong> and <strong>B</strong> are at war against each other. The power of these soldiers is given by <strong>arr1[i] </strong>of<strong>&nbsp;A and arr2[i] </strong>of<strong> B</strong>. They can only attack their counterpart enemies like <strong>arr1[i]</strong> can attack only <strong>arr2[i]</strong> and not anyone else. Both countries have equal number of counterparts. A soldier with a higher power can kill the enemy soldier. If both soldiers have the same power, they both die. You need to find the winning country.<br>Note: If no one winning, then return "DRAW".</span></p>
<p><span style="font-size: 14pt;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 14pt;"><strong>Input:</strong> arr1[] = [2, 2], arr2[] = [5, 5]
<strong>Output:</strong> B
<strong>Explanation: </strong>Both countries have 2 soldiers. arr2[0] kills arr1[0], arr2[1] kills arr1[1]. A has 0 soldiers alive at the end. B has both soldiers alive at the end.Return "B" as a winner.
</span></pre>
<pre><span style="font-size: 14pt;"><strong>Input:</strong> arr1[] = [9], arr2[] = [8]  <strong>
Output:</strong> A
<strong>Explanation: </strong>arr1[0] &gt; arr2[0], So A is the winner.
</span></pre>
<p><span style="font-size: 14pt;"><strong>Expected Time Complexity:</strong> O(n).<br><strong>Expected Auxiliary Space:</strong>&nbsp;O(1).</span></p>
<p><span style="font-size: 14pt;"><strong>Constraints:</strong></span><br><span style="font-size: 14pt;">1 ≤ arr1.size() ≤ 10<sup>6</sup><br>0 ≤ arr1[i],arr2[i] ≤ 10<sup>5</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Data Structures</code>&nbsp;