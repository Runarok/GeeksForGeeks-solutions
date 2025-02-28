<h2><a href="https://www.geeksforgeeks.org/problems/gifts-gifts-gifts1524/1?page=1&category=Arrays&status=attempted&sortBy=accuracy">Gift distribution according to preference</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Geek wants to distribute gifts to N students. He buys N gifts and asks his students to make a list of gifts arranged in order of their preference. Each student has a unique rank based on their performance in Geek's class. The gifts are distributed based on a student's rank and gift preference. The list submitted by a student with a better rank is given more importance. Find what gift each student gets.&nbsp;</span></p>

<p><br>
<span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N = 3
Arr[][] = { {Preference list of student 1},
            {Preference list of student 2},
            {Preference list of student 3},}
        = {{1, 3, 2}, {2, 1, 3}, {3, 1, 2}}
<strong>Output: </strong>1 2 3
<strong>Explanation:</strong> According to the gift preference 
of child with rank 1, he gets gift 1. Rank 2 
prefers gift 2 and gets that. Rank 3 prefers 
gift 3 and gets that.</span></pre>

<p><br>
<span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N = 3
Arr[][] = { {Preference list of student 1},
            {Preference list of student 2},
            {Preference list of student 3},}
        = {{1, 2, 3}, {3, 2, 1}, {1, 2, 3}}
<strong>Output:</strong> 1 3 2
<strong>Explanation:</strong> According to the gift preference 
of child with rank 1, he gets gift 1. Rank 2 
prefers gift 3 and gets that. Rank 3 prefers 
gift 1 but that was given to student with rank 1. 
Second on his list is gift 2 so he gets that.</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>distributeGift()</strong> which takes the 2D array of integers arr and n as input parameters and returns an array of integers of size N denoting the gift that each student got in order of their ranks.</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(N<sup>2</sup>)<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= N &lt;= 10<sup>3</sup><br>
Preference of each child is a permutation [1, N]</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Data Structures</code>&nbsp;