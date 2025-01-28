<h2><a href="https://www.geeksforgeeks.org/problems/sid-and-his-prime-money5736/1?page=7&difficulty=Hard&status=unsolved&sortBy=accuracy">Sid and his prime money</a></h2><h3>Difficulty Level : Difficulty: Hard</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an array<strong> arr[]</strong> of selling prices in the cities, find the longest subsequence of consecutive cities where prices are strictly increasing. Also, calculate the maximum sum of prime numbers in that subsequence. If multiple subsequences have the same length, choose the one with the highest prime sum. If no primes are present, the prime sum is 0.</span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [4, 2, 3, 5, 1, 6, 7, 8, 9]
<strong>Output:</strong> [5, 7]
<strong>Explanation: </strong>5 cities are maximum number of cities in which the trend followed, And  amount in those cities were 1, 6, 7, 8, 9.  Out of  these  amounts only 7 is prime money.</span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [2, 3, 5, 7, 4, 1, 6, 5, 4, 8]
<strong>Output: </strong>[4, 17]
<strong>Explanation: </strong>4 cities are maximum number of cities in which the trend followed, And  amount in those cities were 2, 3, 5, 7. Out of  these amounts, maximum total prime money is 2+3+5+7=17.</span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [2, 2, 2, 2, 2]
<strong>Output: </strong>[1, 2]
<strong>Explanation: </strong>He was successful in one city only, And maximum total prime money is 2.
</span></pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(n sqrt(n))<br><strong>Expected Auxiliary Space:</strong> O(n)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ arr.size() ≤ 10<sup>5</sup><br>1 ≤ arr[i] ≤ 10<sup>5 </sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Mathematical</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;