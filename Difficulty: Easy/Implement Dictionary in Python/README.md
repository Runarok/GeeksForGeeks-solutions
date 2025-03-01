<h2><a href="https://www.geeksforgeeks.org/problems/implement-dictionary-in-python--172954/1?page=15&status=unsolved&sortBy=accuracy">Implement Dictionary in Python</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">You are familiar with most of the properties of dictionaries in Python. </span><span style="font-size: 18px;">Let's get this into head by solving a problem. <br></span><span style="font-size: 18px;">The task is to do operations as described below:</span></p>
<ul>
<li><span style="font-size: 18px;"><strong>k </strong>key<strong>, v </strong>value: Insert given key<strong> k</strong> and value <strong>v </strong>in the dictionary, print <strong>'Inserted'&nbsp;</strong>after inserting.</span></li>
<li><span style="font-size: 18px;"><strong>d </strong>key: D</span><span style="font-size: 18px;">elete the entry for a given key <strong>d</strong> and print <strong>'Deleted'</strong> if the key to be deleted is present, else<strong> print '-1'.</strong></span></li>
<li><span style="font-size: 18px;"><strong>p </strong>key: Print marks of given key <strong>p</strong> in statement as "Marks of {student_name} is : {marks}". If key is not present print '-1'.</span></li>
</ul>
<table style="border-collapse: collapse; width: 100.013%;" border="1">
<tbody>
<tr>
<td style="width: 99.2396%;"><em><strong><span style="font-size: 18px;">Avoid using <span style="text-decoration: underline;">F-string</span> in your python solution code</span></strong></em></td>
</tr>
</tbody>
</table>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong>
dhi ankit
100 200
harsh 300
harsh
harsh</span>
<span style="font-size: 18px;"><strong>Output:</strong></span>
<span style="font-size: 18px;">Inserted<br>Deleted<br>-1</span>
<span style="font-size: 18px;"><strong>Explanation: </strong>First two lines take my_dict input as key and values. Then, insert and del operation happens, correspondingly <strong>Inserted </strong>and <strong>Deleted </strong>is printed. For last query, <strong>harsh </strong>key is not present so -1 is printed.</span></pre>
<pre><span style="font-size: 18px;"><span style="font-size: 18px;"><strong>Input:</strong><br>harsh ghutra mith
100 200 300
ankit 400
mith
ankit</span></span>
<span style="font-size: 18px;"><strong>Output:</strong></span>
<span style="font-size: 18px;">Inserted
Deleted
Marks of ankit is 400<br></span><strong style="font-size: 18px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">Explanation: </strong><span style="font-size: 18px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">First two lines take my_dict input as key and values. Then, insert and del operation happens, correspondingly </span><strong style="font-size: 18px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">Inserted </strong><span style="font-size: 18px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">and </span><strong style="font-size: 18px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">Deleted </strong><span style="font-size: 18px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">is printed. For last query, </span><span style="font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;"><span style="font-size: 18px;">Marks of ankit is 400</span></span> <span style="font-size: 14pt;">is printed</span>.</pre>
<p><span style="font-size: 18px;">&nbsp;</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 &lt;= | key | &lt;= 20<br>1 &lt;= marks &lt;= 10<sup>5</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>python-dict</code>&nbsp;