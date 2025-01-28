<h2><a href="https://www.geeksforgeeks.org/problems/find-minimum-s-t-cut-in-a-flow-network2902/1?page=6&difficulty=Hard&status=unsolved&sortBy=accuracy">Find minimum s-t cut in a flow network</a></h2><h3>Difficulty Level : Difficulty: Hard</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a weighted graph of <strong>N</strong> vertices numbered from <strong>0</strong>&nbsp;to<strong> N-1</strong> in the form of&nbsp;adjacency matrix <strong>A[ ][ ]</strong> and two&nbsp;integers<strong> S </strong>denoting the number of source vertex and<strong> T</strong> denoting the number of sink vertex. The task is to find minimum capacity s-t cut of the given network.&nbsp;An s-t cut is a cut that requires the source node ‘<strong>S</strong>’ and the sink node ‘<strong>T</strong>’ to be in different subsets, and it consists of edges going from the source’s side to the sink’s side.&nbsp;The capacity of an s-t cut is defined by the sum of the capacity of each edge in the cut-set. In other words,&nbsp;you have to find out all the edges which has to be removed to make it impossible to reach the sink node from source node, and the edges you select should have a&nbsp;minimum sum of weights. You have to return all the edges included in the&nbsp;minimum capacity s-t cut and if there are no edges in&nbsp;minimum capacity s-t cut, return "-1".</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N = 2
A[][] = [[0, 3],
&nbsp;        [0, 0]]
S = 0
T = 1
<strong>Output:</strong>
0 1
<strong>Explanation: </strong>We have to remove the edge going
from 0<sup>th</sup> vertex to 1<sup>st</sup> vertex.</span>
</pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N = 5
A[][] = [[0, 0, 0, 0, 0],
&nbsp;        [0, 0, 2, 3, 0],
&nbsp;        [0, 0, 0, 0, 0],
&nbsp;        [0, 0, 0, 0, 0],
&nbsp;        [0, 0, 0, 0, 0]]
S = 0
T = 4
<strong>Output:</strong>
-1
<strong>Explanation: </strong>There are no edges in 
minimum capacity s-t cut.</span>
</pre>

<p><span style="font-size:18px"><strong>Your Task:&nbsp;</strong><br>
You don't need to read input or print anything. Your task is to complete the function<strong>&nbsp;minimumCut()</strong>&nbsp;which takes the adjacency matrix <strong>A[ ][ ]</strong>,&nbsp;source node number <strong>S</strong>, sink node number <strong>T</strong> and number of vertices&nbsp;<strong>N</strong>&nbsp;and returns a list of integers <strong>res[ ]</strong> where <strong>res[2*i-1]</strong> and <strong>res[2*i]</strong> denotes an edge in&nbsp;minimum capacity s-t cut where <strong>1 ≤ i ≤&nbsp;length(res)/2</strong>, if there are no edges in&nbsp;minimum capacity s-t cut, return only one integer "<strong>-1</strong>" in <strong>res[ ]</strong>.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong>&nbsp;O(max_flow * N<sup>2</sup>)<br>
<strong>Expected Auxiliary Space:</strong>&nbsp;O(N<sup>2</sup>)</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤&nbsp;N ≤&nbsp;50<br>
0 ≤ S, T&nbsp;&lt;&nbsp;N</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Graph</code>&nbsp;<code>Data Structures</code>&nbsp;