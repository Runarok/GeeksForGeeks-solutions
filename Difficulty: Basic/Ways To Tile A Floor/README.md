<h2><a href="https://www.geeksforgeeks.org/problems/ways-to-tile-a-floor5836/1?page=12&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">Ways To Tile A Floor</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given a floor of dimensions 2 x n and tiles of dimensions 2 x 1, the task is to find the number of ways the floor can be tiled. A tile can either be placed horizontally i.e as a 1 x 2 tile or vertically i.e as 2 x 1 tile.&nbsp;</span></p>
<p><span style="font-size: 18px;"><strong>Examples :</strong></span></p>
<pre><span style="font-size: 18px;"><strong><span style="font-size: 18px;">Input:</span> </strong></span><span style="font-size: 18px;">n<strong> = </strong>3</span>
<span style="font-size: 18px;"><strong><span style="font-size: 18px;">Output:</span> </strong></span><span style="font-size: 18px;">3</span>
<span style="font-size: 18px;"><strong><span style="font-size: 18px;">Explanation:</span> </strong></span><span style="font-size: 18px;">We need 3 tiles to tile the boardof size  2 x 3. 
We can tile in following ways:
1) Place all 3 tiles vertically. 
2) Place first tile verticallyand remaining 2 tiles horizontally.
3) Place first 2 tiles horizontally and remaining tiles vertically.</span></pre>
<pre><span style="font-size: 18px;"><strong><span style="font-size: 18px;">Input:</span> </strong></span><span style="font-size: 18px;">n<strong> = </strong>4</span>
<span style="font-size: 18px;"><strong>Output: </strong></span><span style="font-size: 18px;">5</span>
<span style="font-size: 18px;"><strong><span style="font-size: 18px;">Explanation:</span> </strong></span><span style="font-size: 18px;">For a 2 x 4 board, there are 5 ways
1) All 4 vertical
2) All 4 horizontal
3) First 2 vertical, remaining 2 horizontal.
4) First 2 horizontal, remaining2 vertical.
5) Corner 2 vertical, middle 2 horizontal.<br></span></pre>
<pre><span><strong><span>Input:</span> </strong></span><span>n<strong> = </strong>2</span>
<span><strong>Output: </strong></span><span>2</span></pre>
<p><span style="font-size: 18px;"><strong>Constraints:</strong></span><br><span style="font-size: 18px;">1 &lt;= n &lt;= 10<sup>5</sup></span></p></div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Amazon</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Fibonacci</code>&nbsp;