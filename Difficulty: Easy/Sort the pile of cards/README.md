<h2><a href="https://www.geeksforgeeks.org/problems/sort-the-pile-of-cards3733/1?page=2&category=Arrays&status=unsolved,attempted&sortBy=accuracy">Sort the pile of cards</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given a shuffled array <strong>arr[]&nbsp;</strong> where each element represents a card numbered from <strong>1 to n</strong>, your task is to determine the minimum number of operations required to sort the array in increasing order. In each operation, called moveCard(x), you can move the card with value x (where 1 ≤ x ≤ n) to the top of the array, without altering the order of the other cards. Your goal is to sort the array with the fewest possible moveCard(x) operations.</span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [5, 1, 2, 3, 4]
<strong>Output: </strong>4
<strong>Explanation:</strong>
5 1 2 3 4              //given sequence
4 5 1 2 3              //moveCard(4)
3 4 5 1 2              //moveCard(3)
2 3 4 5 1              //moveCard(2)
1 2 3 4 5              //moveCard(1)
Hence, minimum 4 operations are required.</span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [3, 4, 2, 1]
<strong>Output: </strong>2
<strong>Explanation:</strong>
3 4 2 1             //given sequence
2 3 4 1             //moveCard(2)
1 2 3 4             //moveCard(1)
Hence, minimum 2 operations are required.</span></pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(n)<br><strong>Expected Auxiliary Space:</strong> O(1)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 &lt;= arr.size() &lt;=10<sup>6</sup><br>1 &lt;= arr[i] &lt;= arr.size()</span><br><br></p></div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>BankBazaar</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Data Structures</code>&nbsp;