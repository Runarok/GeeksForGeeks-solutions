<h2><a href="https://www.geeksforgeeks.org/problems/the-size-of/1?page=1&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">The Size of</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p>Now, we'll learn the use of <strong>sizeof </strong>operator in CPP. This operator is a<strong> unary type</strong>--it takes only one operand as input and outputs the <strong>size in bytes of the operand</strong>.<br>You will be given four different variables of different data types: <strong>a (int)</strong>, <strong>b (float)</strong>, <strong>c (double)</strong>, <strong>l (long long)</strong>, <strong>d (string)</strong>. Your task is to do step-wise operations as given below:<br>1. Divide <strong>b</strong> <strong>by c</strong>.<br>2. Divide <strong>b</strong> <strong>by a</strong>.<br>3. Divide <strong>c</strong> <strong>by a</strong>.<br>4. Add <strong>result</strong> at step 3 with <strong>l</strong>.<br>5. Print the <strong>sizeof(result) of each step in a single line</strong>. The outputs should be separated by spaces.<br>6. Print the <strong>sizeof(d) and sizeof(d[3]) separated by a space on a new line</strong>.</p>
<p><strong>Example:</strong></p>
<pre><strong>Input:</strong>
a = 1 
b = 2
c = 3
l = 5
d = gfgc
<strong>Output:
</strong>4 8 4 8
32 1

<strong>User Task: </strong>
Your task is to complete the provided function . </pre>
<p><strong>Constraints:</strong><br>1 &lt;= a, b, c &lt;= 10<sup>6</sup><br>1 &lt;= l &lt;= 10<sup>18</sup></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>cpp-operator</code>&nbsp;