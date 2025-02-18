<h2><a href="https://www.geeksforgeeks.org/problems/student-record1752/1?page=11&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">Student record</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">A file contains data as follows : {Student name, marks in 3 subjects}.<br>
There are N students in a class. Find the student who has maximum average score.<br>
<strong>Note: </strong>The average score is always floored.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>N = </strong>2</span>
<strong><span style="font-size:18px">S = </span></strong><span style="font-size:18px">{"Shrikanth 20 30 10", "</span><span style="font-size:18px">Ram 100 50 10"}</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">Ram 53</span>
<span style="font-size:18px"><strong>Explantion:</strong></span>
<span style="font-size:18px">Shrikanth has an average of 20, whereas
Ram has a average of 53. So, Ram has the
maximum average.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px"><strong>N = </strong>3</span>
<strong><span style="font-size:18px">S = </span></strong><span style="font-size:18px">{"Adam 50 10 40", "Rocky 100 90 10", "Suresh 10 90 100</span><span style="font-size:18px">"}</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">Rocky Suresh 66</span>
<span style="font-size:18px"><strong>Explantion:</strong></span>
<span style="font-size:18px">Rocky and Suresh both have an average of 66, which is the
highest in the class.</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>studentRecord()</strong> which takes an Integer N and a vector of vector of strings where each string vector contains 4 space separated inputs, the first being the name of the student and the rest being the marks of the student. The function should return a string consisting of two or more words where the last word is the max average of the class and the preceding words are names of student/s who have the max average. The names of the students should appear in the same order as they are given in the Input.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(N)<br>
<strong>Expected Auxiliary Space:</strong> O(N)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong></span><br>
<span style="font-size:18px">1 &lt;= N &lt;= 10<sup>4</sup><br>
1 &lt;= marks &lt;= 100<br>
1 &lt;= Length of the Name &lt;= 10</span></p>
</div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Amazon</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;