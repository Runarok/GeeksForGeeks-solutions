<h2><a href="https://www.geeksforgeeks.org/problems/house-robber-ii/1?page=1&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">House Robber II</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-family: arial, helvetica, sans-serif;">You are given an array <strong>arr[]</strong> which represents houses arranged in a circle, where each house has a certain value. A thief aims to maximize the total stolen value without robbing two adjacent houses. Since the houses are in a circle, the first and last houses are also considered adjacent. Determine the maximum amount the thief can steal.</span></p>
<p><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif;"><strong>Examples:</strong></span></p>
<pre style="background: #eeeeee; border: 1px solid #cccccc; padding: 5px 10px;"><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif;"><strong>Input: </strong>arr[] = [2, 3, 2]
<strong>Output:</strong> 3
<strong>Explanation:</strong> nums[0] and nums[2] can't be robbed because they are adjacent houses.</span></pre>
<pre style="background: #eeeeee; border: 1px solid #cccccc; padding: 5px 10px;"><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif;"><strong>Input:</strong> arr[] = [1, 2, 3, 1]
<strong>Output:</strong> 4
<strong>Explanation:</strong> Maximum stolen value: nums[0] + nums[2] = 1 + 3 = 4</span></pre>
<pre style="background: #eeeeee; border: 1px solid #cccccc; padding: 5px 10px;"><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif;"><strong>Input:</strong> arr[] = [2, 2, 3, 1, 2]
<strong>Output:</strong> 5
<strong>Explanation:</strong> Maximum stolen value: nums[0] + nums[2] = 2 + 3 = 5 <strong>or </strong>nums[2] + nums[4] = 3 + 2 = 5</span></pre>
<p><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif;"><strong>Constraints:<br></strong>2 &lt;= arr.size() &lt;=10<sup>5</sup><br>0 &lt;= arr[i] &lt;=10<sup>4</sup><sup><br></sup></span></p></div>