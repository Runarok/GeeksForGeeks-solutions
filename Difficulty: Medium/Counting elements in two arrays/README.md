<h2><a href="https://www.geeksforgeeks.org/problems/counting-elements-in-two-arrays/1?page=1&category=Binary%20Search&difficulty=Medium,Hard&status=unsolved,attempted&sortBy=accuracy">Counting elements in two arrays</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 14pt;">You are given two unsorted arrays <strong><code>a[]</code></strong> and <strong><code>b[]</code></strong>. Both arrays may contain duplicate elements. For each element in <code>a[]</code>, your task is to count how many elements in <code>b[]</code> are less than or equal to that element.</span></p>
<p><span style="font-size: 14pt;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 14pt;"><strong>Input:</strong> a[] = [1, 2, 3, 4, 7, 9], b = [0, 1, 2, 1, 1, 4]
<strong>Output: </strong>[4, 5, 5, 6, 6, 6]<strong>
Explanation: </strong>
For a[0] = 1, there are 4 elements in b (0, 1, 1, 1) that are ≤ 1.
For a[1] = 2, there are 5 elements in b (0, 1, 1, 1, 2) that are ≤ 2.
For a[2] = 3, there are 5 elements in b that are ≤ 3.
Similarly, for a[3] = 4, there are 6 elements in b that are ≤ 4, and for a[4] = 7 and a[5] = 9, there are also 6 elements in b that are ≤ 7 and ≤ 9, respectively.</span></pre>
<pre><span style="font-size: 14pt;"><strong>Input:</strong> a[] = [4, 8, 7, 5, 1], b = [4, 48, 3, 0, 1, 1, 5]
<strong>Output: </strong>[5, 6, 6, 6, 3]
<strong>Explanation: <br></strong>For a[0] = 4, there are 5 elements in b (4, 3, 0, 1, 1) that are ≤ 4.
For a[1] = 8 and a[2] = 7, there are 6 elements in b that are ≤ 8 and ≤ 7.
For a[3] = 5, there are 6 elements in b that are ≤ 5.
For a[4] = 1, there are 3 elements in b (0, 1, 1) that are ≤ 1.</span></pre>
<pre><span style="font-size: 14pt;"><strong>Input:</strong> a[] = [10, 20], b = [30, 40, 50]
<strong>Output: </strong>[0, 0]
<strong>Explanation: <br></strong>For a[0] = 10 and a[1] = 20, there are no elements in b that are less than or equal to 10 or 20. Hence, the output is [0, 0].</span></pre>
<p><span style="font-size: 14pt;"><strong>Constraints:</strong><br>1 ≤ a.size(), b.size() ≤ 10<sup>5</sup><br>0 ≤ a[i], b[j] ≤ 10<sup>5</sup></span></p></div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Amazon</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Searching</code>&nbsp;<code>Binary Search</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;