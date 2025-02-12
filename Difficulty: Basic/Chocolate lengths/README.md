<h2><a href="https://www.geeksforgeeks.org/problems/chocolate-lengths0332/1?page=28&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">Chocolate lengths</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Adam has <strong>N</strong> chocolates of unequal lengths. He wants that each chocolate should be of equal lengths. In order to do so,at each step, he picks two unequal length chocolates and takes their length difference 'd' and then he eats the bigger one and&nbsp;make it's length&nbsp; 'd' . He stops when all the chocolates are of&nbsp;equal length . Find the final length of all chocolates.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>N = </strong>2 </span>
<span style="font-size:18px"><strong>A[] = </strong>{10 , 12}</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">2</span>
<span style="font-size:18px"><strong>Explanation:
</strong>{10,12} -&gt; {10,2} -&gt; {8,2} -&gt; {6,2}
-&gt; {4,2} -&gt; {2,2} </span>
<span style="font-size:18px">So, the final length is 2.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>N = </strong>3</span>
<span style="font-size:18px"><strong>A[] = </strong>{6 , 10 , 15}</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">1</span>
<span style="font-size:18px"><strong>Explanation:</strong>
{6,10,15}&nbsp;-&gt; {6,10,9}&nbsp;-&gt; {6,4,9}&nbsp;-&gt;
{6,4,3}&nbsp;-&gt; {2,4,3} -&gt; {2,4,1}&nbsp;-&gt;
{2,2,1} -&gt; {1,2,1} -&gt; {1,1,1}
So, the final length is 1.
[Note:this is one way of eating chocolates,
there could be many..]</span> </pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>chocolateLength()</strong> which takes an Integer N and an Array A[] as input and returns the answer.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(N*log(N))<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong></span><br>
<span style="font-size:18px">1 &lt;= N &lt;= 10<sup>5</sup></span><br>
<span style="font-size:18px">1 &lt;= A[i] &lt;= 10<sup>8</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;