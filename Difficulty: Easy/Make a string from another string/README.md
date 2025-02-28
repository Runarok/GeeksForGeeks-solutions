<h2><a href="https://www.geeksforgeeks.org/problems/make-a-string-from-another-string--141625/1?page=2&category=Strings&status=unsolved,attempted&sortBy=accuracy">Make a string from another string</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given two strings <strong>A</strong> and <strong>B</strong>, find if the first string can be made from second by deleting some characters from second and rearranging the&nbsp;remaining characters.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
A = "GeeksforGeeks" 
B = "rteksfoGrdsskGeggehes"
<strong>Output:</strong> 1
<strong>Explanation</strong>: Keeping the bold characters and
discarding others: "<strong>r</strong>t<strong>eksfoG</strong>rds<strong>skGe</strong>gg<strong>e</strong>h<strong>e</strong>s".
</span></pre>

<p><span style="font-size:18px">â€‹<strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>: 
A = "Hello" 
B = "Geek"
<strong>Output:</strong> 0
<strong>Explanation</strong>: We can't make A from B after
any deletions.
</span></pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>isPoss()&nbsp;</strong>which takes the string A and string B&nbsp;as input parameters&nbsp;and returns true&nbsp;if A can be made from B after some deletions and rearranging the remaining characters. Else, returns false.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(|A| + |B|).<br>
<strong>Expected Auxiliary Space:&nbsp;</strong>O(1).</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ |A|, |B| ≤ 10<sup>5</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>Data Structures</code>&nbsp;