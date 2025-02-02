<h2><a href="https://www.geeksforgeeks.org/problems/method-overriding-in-python/1?page=1&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Method Overriding in Python</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 14pt;">Implement the following classes to understand method overriding in Python:</span></p>
<p><span style="font-size: 14pt;"><strong>Class Name:</strong> <code>Employee</code></span></p>
<ul>
<li>
<p><span style="font-size: 14pt;"><strong>Attributes</strong>:</span></p>
<ul>
<li><span style="font-size: 14pt;"><code>id</code> (integer)</span></li>
<li><span style="font-size: 14pt;"><code>salary</code> (integer)</span></li>
</ul>
</li>
<li>
<p><span style="font-size: 14pt;"><strong>Constructor</strong>:</span></p>
<ul>
<li><span style="font-size: 14pt;"><code>__init__(self, id, salary)</code>: Initializes the <code>id</code> and <code>salary</code> attributes with the given values.</span></li>
</ul>
</li>
<li>
<p><span style="font-size: 14pt;"><strong>Methods/Functions</strong>:</span></p>
<ol>
<li><span style="font-size: 14pt;"><code>get_info(self)</code>:</span>
<ul>
<li><span style="font-size: 14pt;"><strong>Parameters</strong>: None</span></li>
<li><span style="font-size: 14pt;"><strong>Task</strong>: Returns a string formatted as: <code>"EmployeeID:{id} Salary:{salary}"</code>.</span></li>
</ul>
</li>
</ol>
</li>
</ul>
<p><span style="font-size: 14pt;"><strong>Class Name:</strong> <code>SalesEmployee</code> (Subclass of <code>Employee</code>)</span></p>
<ul>
<li>
<p><span style="font-size: 14pt;"><strong>Attributes</strong>:</span></p>
<ul>
<li><span style="font-size: 14pt;">Inherited from <code>Employee</code>: <code>id</code>, <code>salary</code></span></li>
<li><span style="font-size: 14pt;">New attribute: <code>sales</code> (integer, optional, defaults to 0)</span></li>
</ul>
</li>
<li>
<p><span style="font-size: 14pt;"><strong>Constructor</strong>:</span></p>
<ul>
<li><span style="font-size: 14pt;"><code>__init__(self, id, salary, sales=0)</code>: Calls <code>super().__init__(id, salary)</code> to initialize the inherited attributes, and initializes the <code>sales</code> attribute. The <code>sales</code> parameter defaults to <code>0</code> if not provided.</span></li>
</ul>
</li>
<li>
<p><span style="font-size: 14pt;"><strong>Methods/Functions</strong>:</span></p>
<ol>
<li><span style="font-size: 14pt;"><code>get_info(self)</code>:</span>
<ul>
<li><span style="font-size: 14pt;"><strong>Parameters</strong>: None</span></li>
<li><span style="font-size: 14pt;"><strong>Task</strong>: <strong>Overrides</strong> the <code>get_info</code> method to include the <code>sales</code> attribute in the output.</span></li>
<li><span style="font-size: 14pt;"><strong>Return Format</strong>: <code>"EmployeeID:{id} Salary:{salary} Sales:{sales}"</code>.</span></li>
</ul>
</li>
</ol>
</li>
</ul>
<p><strong><span style="font-size: 14pt;">Examples:</span></strong></p>
<pre><span style="font-size: 14pt;"><strong>Input:</strong> <code>id = 103</code>, <code>salary = 70000</code>, <code>sales = 300</code><br><strong>Output: <br></strong><span style="white-space: normal; background-color: #b4d7ff;">EmployeeID:103 Salary:70000<br></span></span><span style="font-size: 18.6667px; white-space: normal;">EmployeeID:103 Salary:70000 Sales:300</span></pre></div>