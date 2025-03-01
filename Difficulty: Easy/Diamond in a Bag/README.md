<h2><a href="https://www.geeksforgeeks.org/problems/diamond-and-bags2240/1?page=14&status=unsolved&sortBy=accuracy">Diamond in a Bag</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">A big diamond is hidden in one of N identical bags. A balance scale is being used to determine which bag is the heaviest in order to locate the diamond.&nbsp;Find the minimum number of time you need to use the balance scale to find the bag containing the diamond.</span></p>

<p><br>
<span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N = 3
<strong>Output:</strong> 1
<strong>Explaination:</strong> 
The balance scale is needed only once. 
Take any two bags and put them on the 
scale. Either one of them will turn out 
to be heavier or they will be of equal 
weight and the left out third bag will 
contain the diamond.</span></pre>

<p><br>
<span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N = 10
<strong>Output:</strong> 3
<strong>Explaination: 
</strong>The balance scale is needed 3 times. 
1st Put 5 bags on each side and determine 
which side is heavier. Take those 5 bags 
and put 2 on one side and 2 on the other 
leaving 1 out of the balance scale. If the 
scale is perfectly balanced, then the left 
out bag has teh diamond. Otherwise if one 
side is heavier, put those two in the balance. </span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
You do not need to read input or print anything. Your task is to complete the function <strong>minScale() </strong>which takes N as input parameter and returns the minimum number of times you need to use the balance scale to get the bag with diamond.</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(log N)<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ N ≤ 10<sup>6</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;