<h2><a href="https://www.geeksforgeeks.org/problems/bheem-wants-ladoos--170647/1?page=1&category=Tree&difficulty=Easy,Medium&status=unsolved,attempted&sortBy=accuracy">Bheem Wants Ladoos</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 14pt;">Given a binary tree where each node contains a number of ladoos equal to its value, and a starting node, <strong>src,</strong> find the maximum sum of ladoos that can be collected within a distance <strong><code>k</code></strong> from the starting node. The value at the starting node, <strong>src</strong>, should be included in the sum. Each node has a unique number of ladoos.</span></p>
<p><span style="font-size: 14pt;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 14pt;"><strong>Input:</strong>
    &nbsp;              <strong>1</strong>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp; &nbsp;\
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   2&nbsp; &nbsp; &nbsp; <strong>9</strong>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    /&nbsp; &nbsp; &nbsp;&nbsp;/&nbsp;&nbsp;\
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;     4&nbsp; &nbsp; &nbsp; <strong>5</strong>&nbsp; &nbsp; &nbsp;<strong>7</strong>
&nbsp; &nbsp; &nbsp; &nbsp;     /&nbsp; &nbsp;\&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;/&nbsp; \
&nbsp; &nbsp; &nbsp;      8&nbsp; &nbsp;  19&nbsp; &nbsp; &nbsp;20&nbsp; &nbsp; 11
&nbsp; &nbsp;       /&nbsp; &nbsp; &nbsp;/&nbsp; \
 &nbsp;       30&nbsp; &nbsp;40&nbsp; &nbsp;50
src = 9, k = 1
<strong>Output: </strong>22
<strong>Explanation: </strong>Initially we're at 9, so sum = 9. In 2nd move we went to 5, sum=9+5=14. In 3rd move we went to 7, sum=14+7=21. In 4th move we went to 1, sum=21+1=22. So, within k distance we can get 22 ladoos.  
</span></pre>
<pre><span style="font-size: 14pt;"><strong>Input:</strong>
    &nbsp;              1
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp; &nbsp;\
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   2&nbsp; &nbsp; &nbsp; 9
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    /&nbsp; &nbsp; &nbsp;&nbsp;/&nbsp;&nbsp;\
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;     <strong>4</strong>&nbsp; &nbsp; &nbsp; 5&nbsp; &nbsp; &nbsp;7
&nbsp; &nbsp; &nbsp; &nbsp;     /&nbsp; &nbsp;\&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;/&nbsp; \
&nbsp; &nbsp; &nbsp;      8&nbsp; &nbsp;  <strong>19</strong>&nbsp; &nbsp; &nbsp;20&nbsp; &nbsp; 11
&nbsp; &nbsp;       /&nbsp; &nbsp; &nbsp;/&nbsp; \
 &nbsp;       30&nbsp; &nbsp;<strong>40</strong>&nbsp; &nbsp;<strong>50</strong>
src = 40, k = 2
<strong>Output: </strong>113
<strong>Explanation: </strong>Initially we're at 40, so sum = 40. In 2nd move we went to 19, sum=40+19=59. In 3rd move we went to 4, sum=59+4=63. In 4th move we went to 50, sum=63+50=113. So, within K distance we can get 113 ladoos.
</span></pre>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>1
src = 1, k = 1
<strong>Output: </strong>1</span></pre>
<p><span style="font-size: 14pt;"><strong>Constraints:</strong><br>1 ≤ number of nodes, src ≤ 10<sup>5<br></sup><span style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">1 ≤ node-&gt;data ≤ 10</span><sup style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">5<br></sup><span style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">1 ≤ k ≤ 20</span></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Binary Search Tree</code>&nbsp;<code>Tree</code>&nbsp;<code>Data Structures</code>&nbsp;