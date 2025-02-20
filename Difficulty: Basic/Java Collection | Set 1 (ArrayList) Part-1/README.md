<h2><a href="https://www.geeksforgeeks.org/problems/java-arraylist5312/1?page=3&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">Java Collection | Set 1 (ArrayList) Part-1</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">ArrayList are dynamic size arrays. Try this problem using ArrayList.</span></p>

<p><span style="font-size:18px">Given a ArrayList of <strong>N</strong>&nbsp;elements and a integer <strong>Q</strong>&nbsp;defining the type of query(which will be either 1 or 2) :<br>
<strong>Q = 1</strong> includes two integers <strong>p</strong> and <strong>r</strong>. Which means insert the&nbsp;value r at index p in the ArrayList and print the whole updated ArrayList.<br>
<strong>Q =&nbsp;2</strong> includes one integer <strong>p</strong>. In this query print the index at which the value p is last found in the ArrayList. If the value p is not found in the ArrayList then print "<strong>-1</strong>".&nbsp;</span></p>

<p><span style="font-size:18px"><strong>NOTE: Assume 0 based indexing</strong></span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px">N = 5, Q = 1 </span>
<span style="font-size:18px">A[] = {1, 4, 5, 9, 3} </span>
<span style="font-size:18px">Query[] = {2, 6} </span>
<span style="font-size:18px"><strong>Output:</strong> </span>
<span style="font-size:18px">1 4 6 5 9 3 
<strong>Explanation: </strong>
p=Query[0]=2 
r=Query[1]=6 
After inserting the element 
r=6 at index p=2 ,the updated 
arraylist ={1,4,6,5,9,3}</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N = 4 , Q = 2
A[]= {1, 9, 2, 4}
Query[]= {4}
<strong>Output:</strong>
3 
<strong>Explanation: 
</strong>p = 4 
The element 4 is last found
in A at index = 3   </span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:&nbsp;</strong><br>
You don't need to read input or print anything. Your task is to complete the function<strong>&nbsp;solve()</strong>&nbsp;which takes the <strong>N&nbsp;</strong>(number of elements in Array A) ,ArrayList <strong>A</strong>, <strong>Q</strong>(Type of the&nbsp;of query)&nbsp;and the ArrayList <strong>Query</strong>. If the Q = 1 then return the updated ArrayList of integers. else return the ArrayList which contains the index at which the value p is last found in the ArrayList A&nbsp;(where p = Query[0] )&nbsp;,If the value of p is not found then return the ArrayList which contains -1.&nbsp;</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong>&nbsp;O(N)<br>
<strong>Expected Auxiliary Space:</strong>&nbsp;O(N)</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= N &lt;= 10<sup>4</sup></span><br>
<span style="font-size:18px">1 &lt;= Q &lt;= 2</span><br>
<span style="font-size:18px">If Q = 1 then size of Query is 2 ,</span><br>
<span style="font-size:18px">where Query[0] represents the value of p and Query[0] represents the value of r.</span><br>
<span style="font-size:18px">If Q = 2 then size of Query is 1 ,</span><br>
<span style="font-size:18px">where Query[0] represents the value of p.</span><br>
<span style="font-size:18px">1 &lt;= A[i] &lt;= 10<sup>3</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Java</code>&nbsp;<code>Java-Collections</code>&nbsp;