<h2><a href="https://www.geeksforgeeks.org/problems/multiple-inheritence-in-python/1?page=1&difficulty=Easy&status=unsolved&sortBy=accuracy">Multiple inheritence in Python</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 14pt;">Implement the following classes to understand multiple inheritance in Python:</span></p>
<ul>
<li><span style="font-size: 14pt;"><strong>Class Name</strong>: <code>Student</code></span>
<ul>
<li><span style="font-size: 14pt;"><strong>Attributes</strong>:</span>
<ul>
<li><span style="font-size: 14pt;"><code>sid</code> (int) — Student ID.</span></li>
<li><span style="font-size: 14pt;"><code>deptid</code> (int) — Department ID.</span></li>
</ul>
</li>
<li><span style="font-size: 14pt;"><strong>Constructor</strong>: <code>__init__(self, sid, deptid)</code> — Initializes the <code>sid</code> and <code>deptid</code> attributes.</span></li>
<li><span style="font-size: 14pt;"><strong>Method</strong>: <code>get_info(self)</code> — Returns a formatted string with the student ID and department ID, eg., "StudentID:101 DepartmentID:42"</span></li>
</ul>
</li>
<li><span style="font-size: 14pt;"><strong>Class Name</strong>: <code>Faculty</code></span>
<ul>
<li><span style="font-size: 14pt;"><strong>Attributes</strong>:</span>
<ul>
<li><span style="font-size: 14pt;"><code>eid</code> (int) — Employee ID.</span></li>
<li><span style="font-size: 14pt;"><code>deptid</code> (int) — Department ID.</span></li>
</ul>
</li>
<li><span style="font-size: 14pt;"><strong>Constructor</strong>: <code>__init__(self, eid, deptid)</code> — Initializes the <code>eid</code> and <code>deptid</code> attributes.</span></li>
<li><span style="font-size: 14pt;"><strong>Method</strong>: <code>get_info(self)</code> — Returns a formatted string with the employee ID and department ID, eg., "EmployeeID:555 DepartmentID:42"</span></li>
</ul>
</li>
<li><span style="font-size: 14pt;"><strong>Class Name</strong>: <code>PhDStudent</code> (Inherits from both <code>Student</code> and <code>Faculty</code>)</span>
<ul>
<li><span style="font-size: 14pt;"><strong>Constructor</strong>: <code>__init__(self, sid, eid, deptid)</code> — Calls the constructors of <code>Student</code> and <code>Faculty</code> to initialize <code>sid</code>, <code>eid</code>, and <code>deptid</code>.</span></li>
<li><span style="font-size: 14pt;"><strong>Method</strong>: <code>get_info(self)</code> — Returns a formatted string with the student ID, employee ID and department ID, eg., "Student ID:101 EmployeeID:555 DepartmentID:42".</span></li>
</ul>
</li>
</ul>
<p><span style="font-size: 14pt;"><strong>Example</strong>:</span></p>
<pre><span style="font-size: 14pt;"><strong style="font-size: 14pt;">Input</strong><span style="font-size: 14pt;">: </span><code style="font-size: 14pt;">sid = 101, eid = 555, deptid = 42<br></code><strong style="font-size: 14pt;">Output: <br></strong><span style="font-size: 18.6667px;">StudentID:101 DepartmentID:42<br></span><span style="font-size: 18.6667px;">EmployeeID:555 DepartmentID:42<br></span><span style="font-size: 18.6667px;">Student ID:101 EmployeeID:555 DepartmentID:42</span></span></pre></div>