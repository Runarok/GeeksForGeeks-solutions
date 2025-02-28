<h2><a href="https://www.geeksforgeeks.org/problems/ada-noise2029/1?page=2&category=Strings&status=unsolved,attempted&sortBy=accuracy">ADA Noise</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">You are given a message string <strong>S</strong> consisting of lowercase English alphabet letters. "<strong>ada</strong>" is a noise word and all the words that can be formed by adding “da” any number of times at the end of any noise word is also considered as a noise word. For example, the words “adada”, “adadadadada”, ”adada” are noise words but “dada”, ”ad”, ”aad” are not considered noise words.<br>
You&nbsp;have to move all the noise words&nbsp;present in the message signal to the end of the message (in the same order as they occur in the message S) so that the filter can truncate the noise&nbsp;from the end.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
S = "heyadadahiadahi"
<strong>Output: </strong>"heyhihiadadaada" 
<strong>Explanation: </strong>”adada” and “ada” are the 
noise words. Noises are moved to the end 
in the same order as they appear in the 
string S.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>S = "heyheyhello"
<strong>Output: </strong>"heyheyhello"
<strong>Explanation: </strong>There is no noise in the signal.</span></pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You need not take any input or print anything. Your task is to complete the function <strong>updateString()&nbsp;</strong>which takes string S as input parameter&nbsp;and returns the message&nbsp;string with noise words at the end. </span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(|S|).<br>
<strong>Expected Auxiliary Space:&nbsp;</strong>O(|S|).</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ length (string) ≤ 10^5</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>Data Structures</code>&nbsp;