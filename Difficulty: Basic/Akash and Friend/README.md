<h2><a href="https://www.geeksforgeeks.org/problems/akash-and-friend5145/1?page=31&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">Akash and Friend</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Akash is good at mathematics and games. He also has a nature of boasting about it. He invites his best friend to dinner and ask him to play his newly invented game.</span></p>

<p><span style="font-size:18px">He presents N numbers and an integer K. The game goes like this:</span></p>

<p><span style="font-size:18px">Each player will be given turn one by one. In each of their turn they can choose any number (non-zero) from the given array and divide (Integer division) it with K. The player who is unable to complete his move looses. Akash is very confident about his skills and knowledge about the game so he gives the first chance to his friends.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>nums = [1, 2, 3], k = 2
<strong>Output: </strong>Akash
<strong>Explanation: </strong>Friend will choose 2, then numbers
will become [1, 1, 3]. Akash will choose 3, 
then numbers will become [1, 1, 1].Friend will 
choose 1 then numbers become [0, 1, 1]. Akash 
will choose 1 then numbers will become 
[0, 0, 1]. Friend will choose 1 then numbers 
will become [0, 0, 0]. Now akash can't make 
a move.</span>
</pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>nums = [2, 4, 6], k = 2
<strong>Output: </strong>Friend
<strong>Explanation: </strong>Akash will win the game.</span>
</pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't have to read or print anything. Your task is to complete the function&nbsp;<strong>Play()</strong>&nbsp;which takes the&nbsp;list of numbers as input parameter and returns "Akash" if his friend wins otherwise returns "Friend"&nbsp;(Without quotes).</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(n * c) where c is constant.<br>
<strong>Expected Space Complexity:&nbsp;</strong>O(1)</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= n &lt;= 100000<br>
2 &lt;= k &lt;= 1000000<br>
1 &lt;= numbers &lt;= 1000000</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>number-theory</code>&nbsp;<code>Misc</code>&nbsp;