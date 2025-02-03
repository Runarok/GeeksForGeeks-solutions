<h2><a href="https://www.geeksforgeeks.org/problems/save-the-nation3110/1?page=2&category=Matrix,Graph&difficulty=Easy&status=unsolved&sortBy=accuracy">Save The Nation</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">An Encryption algorithm works in the following way<br>
<strong>Message:</strong> eNEMYwILLaTTACK<br>
<strong>Enrypted Form:</strong> eYLA NwaC EITK MLT<br>
<br>
The way to do it is that the number of rows and the number of columns in the figure (formed from the alphabets of the Message) lie between <strong>floor</strong> (sqrt(len(message))) and <strong>ceil </strong>(sqrt(len(message))). It also states that the number of rows is less than or equal to the number of columns, and that the area of rectangle thus formed is minimum. Based on the this criteria, we have to choose a set of values for rows and columns.<br>
<br>
For the string<strong> haveaniceday,</strong>&nbsp;we have floor(sqrt(len(message))) = 3 and ceil(sqrt(len(message))) = 4.<br>
<br>
3 * 3 = 9 &lt; len(message) = 15<br>
3 * 4 = 12 = len(message)<br>
4 * 3 = 12 = len(message)<br>
4 * 4 = 16 &gt; len(message)<br>
<br>
Out of the 4 possible squares, we can see that, rows = 3 and columns = 4 is the best fit.<br>
On building the figure, we get<br>
<br>
have<br>
anic<br>
eday<br>
<br>
So, the Encrypted form is "hae and via ecy".</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>S = </strong>"</span><span style="font-size:18px">eNEMYwILLaTTACK"</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">eYLA NwaC EITK MLT</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">The encrypted form of the given String
is printed.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>S = </strong>"</span><span style="font-size:18px">SavetheMines"</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">Sti ahn vee eMs</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">The encrypted form of the given String
is printed.</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>encryptString()</strong> which takes an String S as input and returns the encrypted form as a String.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(|S|)<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong></span><br>
<span style="font-size:18px">1 &lt;= |S| &lt;= 10<sup>5</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Matrix</code>&nbsp;<code>Data Structures</code>&nbsp;