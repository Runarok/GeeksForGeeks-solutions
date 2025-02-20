<h2><a href="https://www.geeksforgeeks.org/problems/java-collection-set-4-treemap/1?page=3&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">TreeMap Operations</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Implement different operations on Treemap. Operations will be performed by different types of queries.<br>A queries can be of four types:<br>1. <strong>a x y</strong>&nbsp;(adds an entry&nbsp;with key x and value&nbsp;y to the Treemap)<br>2. <strong>b x</strong> (print value of &nbsp;x if&nbsp;present in the Treemap else print -1.&nbsp;)<br>3. <strong>c</strong> (prints the size of the Treemap)<br>4. <strong>d x</strong> ( removes an entry&nbsp;with key x from the map )<br>5. <strong>e</strong> (print map sorted by key)</span></p>
<p><strong><span style="font-size: 18px;">Examples:</span></strong></p>
<pre><span style="font-size: 18px;"><strong>Input</strong>: queries[][] = [["a 1 2"], ["a 66 3"], ["b 66"], ["d 1"], ["c"], ["e"]]
<strong>Output</strong>: 3 1 66</span>
<span style="font-size: 18px;"><strong>Explanation:</strong>
There are five queries. Queries are performed in this order
1. a 1 2    ---&gt;  map has a key 1 with value 2 
2. a 66 3   ---&gt; map has a key 66 with value 3
3. b 66     ---&gt; prints the value of key 66 if its present in the map ie 3.
4. d 1      ---&gt; removes an entry from map with key 1
5. c        ---&gt; prints the size of the map ie 1
6. e        ---&gt; prints the map sorted by key</span></pre>
<pre><span style="font-size: 18px;"><strong>Input</strong>: queries[][] = [["a 1 66"], ["b 5"], ["c"], ["e"]]
<strong>Output</strong>: -1 1 1</span>
<span style="font-size: 18px;"><strong>Explanation:</strong>
There are three&nbsp;queries.&nbsp;Queries&nbsp;are&nbsp;performed in this order
1. a 1 66 &nbsp; ---&gt; adds a key 1 with a value of 66 in the map
2. b 5 &nbsp; &nbsp; &nbsp;---&gt; &nbsp;since the key 5 is not present in the map hence -1 is printed.
3. c &nbsp; &nbsp; &nbsp; &nbsp;---&gt; prints the size of the map ie 1 </span>
<span style="font-size: 18px;">4. e&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;---&gt; prints the map sorted by key</span></pre>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 &lt;= q &lt;= 100</span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Java</code>&nbsp;<code>Java-Collections</code>&nbsp;