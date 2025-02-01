<h2><a href="https://www.geeksforgeeks.org/problems/amount-of-water1348/1?page=1&company=Flipkart,Adobe&difficulty=Medium&status=unsolved&sortBy=accuracy">Water Collection</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p style="text-align: justify;"><span style="font-size: 18px;">It is raining in Geek City. The height of the buildings in the city is given in an array <strong>arr[]</strong>. Calculate the amount of water that can be collected between all the buildings.</span></p>
<p style="text-align: justify;"><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[] = [3, 0, 2, 0, 4]
<strong>Output:</strong> 7
<strong>Explanation:</strong>
Geek city looks like
<img style="height: 250px; width: 500px;" title="Click to enlarge" src="https://media.geeksforgeeks.org/wp-content/uploads/20200429012307/Untitled-Diagram811.png" alt="">
We can trap "3 units" of water between 3 and 2, "1 unit" <br>on top of bar 2 and "3 units" between 2 and 4. </span></pre>
<pre><span style="font-size: 18px;"><strong>Input:</strong> arr[] = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
<strong>Output:</strong> 6
<strong>Explanation:</strong>
The structure is like below
<img style="height: 268px; width: 500px;" title="Click to enlarge" src="https://media.geeksforgeeks.org/wp-content/uploads/20200429011707/Untitled-Diagram101.png" alt="">
Trap "1 unit" between first 1 and 2, "4 units" between <br>first 2 and 3 and "1 unit" between second last 1 and last 2.</span></pre>
<p><br><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(n)<br><strong>Expected Auxiliary Space:</strong>&nbsp;O(1)</span></p>
<p style="text-align: justify;"><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ arr.size() ≤ 10<sup>6</sup><br>1 ≤ arr[i] ≤ 10<sup>3</sup></span></p></div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Amazon</code>&nbsp;<code>Adobe</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Data Structures</code>&nbsp;