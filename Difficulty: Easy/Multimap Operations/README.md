<h2><a href="https://www.geeksforgeeks.org/problems/multimap-operations/1?page=1&status=unsolved&sortBy=accuracy">Multimap Operations</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 14pt;"><span style="color: #1e2229; font-family: Nunito; background-color: #ffffff;">You are given an array</span><span style="box-sizing: border-box; font-weight: bolder; line-height: 1.7em; color: #1e2229; background-color: #ffffff; font-family: var(--gfg-font-secondary) !important;">&nbsp;arr</span><span style="color: #1e2229; font-family: Nunito; background-color: #ffffff;">. You need to&nbsp;</span><span style="box-sizing: border-box; font-weight: bolder; line-height: 1.7em; color: #1e2229; background-color: #ffffff; font-family: var(--gfg-font-secondary) !important;">insert&nbsp;</span><span style="color: #1e2229; font-family: Nunito; background-color: #ffffff;">the elements of&nbsp;</span><span style="box-sizing: border-box; font-weight: bolder; line-height: 1.7em; color: #1e2229; background-color: #ffffff; font-family: var(--gfg-font-secondary) !important;">arr</span><span style="color: #1e2229; font-family: Nunito; background-color: #ffffff;">&nbsp;into a multimap</span><span style="box-sizing: border-box; font-weight: bolder; line-height: 1.7em; color: #1e2229; background-color: #ffffff; font-family: var(--gfg-font-secondary) !important;">(element as key and index as value</span><span style="color: #1e2229; font-family: Nunito; background-color: #ffffff;">).&nbsp;</span><span style="box-sizing: border-box; line-height: 1.7em; font-family: Nunito; color: #1e2229; background-color: #ffffff;"><span style="box-sizing: border-box; line-height: 1.7em;">Also, you need to</span><span style="box-sizing: border-box; line-height: 1.7em; font-weight: bolder; font-family: var(--gfg-font-secondary) !important;">&nbsp;erase a given element x</span><span style="box-sizing: border-box; line-height: 1.7em;"> from the multimap and print "</span><span style="box-sizing: border-box; line-height: 1.7em; font-weight: bolder; font-family: var(--gfg-font-secondary) !important;">erased x</span><span style="box-sizing: border-box; line-height: 1.7em;">" if&nbsp;</span><span style="box-sizing: border-box; line-height: 1.7em; font-weight: bolder; font-family: var(--gfg-font-secondary) !important;">successfully&nbsp;</span><span style="box-sizing: border-box; line-height: 1.7em;">erased, else print "</span><span style="box-sizing: border-box; line-height: 1.7em; font-weight: bolder; font-family: var(--gfg-font-secondary) !important;">not found</span><span style="box-sizing: border-box; line-height: 1.7em;">".</span></span></span><br style="box-sizing: border-box; line-height: 1.7em; font-family: Nunito; font-size: 17px; color: #1e2229; background-color: #ffffff;"><span style="font-size: 14pt;"><span style="color: #1e2229; font-family: Nunito; background-color: #ffffff;">Complete&nbsp;</span><span style="box-sizing: border-box; font-weight: bolder; line-height: 1.7em; color: #1e2229; background-color: #ffffff; font-family: var(--gfg-font-secondary) !important;">print()</span><span style="color: #1e2229; font-family: Nunito; background-color: #ffffff;">&nbsp;function to print the multimap.</span></span></p>
<p><span style="font-size: 18px;"><strong>Example:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [9, 8, 7, 4, 4, 2, 1, 1, 9, 8], x = 1
<strong>Output:</strong> 
1 6
1 7
2 5
4 3
4 4
7 2
8 1
8 9
9 0
9 8
erased 1
2 5
4 3
4 4
7 2
8 1
8 9
9 0
9 8</span></pre>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 &lt;= arr.size() &lt;= 1000<br>1 &lt;= arr[i] &lt;= 10<sup>6</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Map</code>&nbsp;<code>STL</code>&nbsp;<code>Data Structures</code>&nbsp;