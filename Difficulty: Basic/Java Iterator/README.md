<h2><a href="https://www.geeksforgeeks.org/problems/java-iterator2702/1?page=10&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">Java Iterator</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">It is a&nbsp;<strong>universal</strong>&nbsp;iterator as we can apply it to any Collection object. By using Iterator, we can perform both read and remove operations.Try this problem using <strong>Iterator</strong>.</span></p>

<p><span style="font-size:18px">Given&nbsp;an array <strong>arr[]</strong> of <strong>n</strong> integrs which are to be put in an ArrayList&nbsp;and an integer <strong>k</strong>. Iterate the Array List using iterator and&nbsp;remove all the numbers of the ArrayList which are less than <strong>k</strong>. And then return the sorted ArrayList. </span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong></span>
<span style="font-size:18px"><strong>n = </strong>5, <strong>k = </strong>8</span>
<strong><span style="font-size:18px">arr[] = </span></strong><span style="font-size:18px">{1, 6, 9, 2, 11}</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">[9, 11]</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">The numbers 1, 6 and 2 are less than 8,
and so they are removed.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong></span>
<span style="font-size:18px"><strong>n = </strong>4, <strong>k = </strong>13</span>
<strong><span style="font-size:18px">arr[] = </span></strong><span style="font-size:18px">{1, 4, 6, 9}</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">[]</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">All the numbers are less than 13,
and so they are removed.</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>javaIterator()</strong> which takes 2 Integers n, k, and an array arr[] of n integers as input and returns a sorted ArrayList after removing all elements less than k.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(n)<br>
<strong>Expected Auxiliary Space:</strong> O(n)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong></span><br>
<span style="font-size:18px">1 &lt;= n,k &lt;= 10<sup>5</sup><br>
1 &lt;= arr[i] &lt;= 10<sup>5</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Java</code>&nbsp;<code>OOP</code>&nbsp;