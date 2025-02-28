<h2><a href="https://www.geeksforgeeks.org/problems/rahul-lucky-unlucky5101/1?page=1&category=Arrays&status=unsolved,attempted&sortBy=accuracy">Rahul lucky-unlucky</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 14pt;">You are given a string <code>s</code> consisting of characters 'H' (heads) and 'T' (tails). The goal is to perform the minimum number of operations to flip all the coins to heads.</span></p>
<p><span style="font-size: 14pt;">An operation consists of flipping both the coin at the index <code>i</code> and the coin at the index <code>i+1</code> if the coin at the index <code>i</code> is a tail ('T'). Additionally, you can flip the coin at the last index <code>N</code> (using 1-based indexing) if it's a tail. This operation can be performed for any index <code>i</code> such that <code>1 &lt;= i &lt;= N</code>.</span></p>
<p><span style="font-size: 14pt;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>s = "HTHTH"
<strong>Output: </strong>[2, 3]
<strong>Explanation:</strong> Coins at index 2 and 3 need to be flipped to make all coins heads-up.</span></pre>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>s = "HHH"
<strong>Output:</strong> []
<strong>Explanation: </strong>No index to be flipped.</span></pre>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>s = "HHT"
<strong>Output:</strong> [3]
<strong>Explanation: </strong>Flip the coin at index 3.</span></pre>
<p><span style="font-size: 14pt;"><strong>Expected Time Complexity:</strong> O(n)<br><strong>Expected Auxiliary Space:</strong> O(n)</span></p>
<p><span style="font-size: 14pt;"><strong>Constraints:<br></strong>1 ≤ s.size() ≤ 10<sup>6</sup><br>s[i] ∈ {'H', 'T'}</span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Data Structures</code>&nbsp;