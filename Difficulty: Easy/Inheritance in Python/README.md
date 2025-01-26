<h2><a href="https://www.geeksforgeeks.org/problems/inheritance-in-python/1?page=1&difficulty=Basic,Easy,Hard&status=unsolved&sortBy=accuracy">Inheritance in Python</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 14pt;">Implement the following classes to understand inheritance in Python:</span></p>
<ul>
<li><span style="font-size: 14pt;"><strong>Class Name</strong>: <code>Employee</code></span>
<ul>
<li><span style="font-size: 14pt;"><strong>Attributes</strong>:</span>
<ul>
<li><span style="font-size: 14pt;"><code>id</code> (int)</span></li>
<li><span style="font-size: 14pt;"><code>salary</code> (int)</span></li>
</ul>
</li>
<li><span style="font-size: 14pt;"><strong>Constructor</strong>: <code>__init__(self, id, salary)</code> — Initializes the values to respective variables.</span></li>
</ul>
</li>
<li><span style="font-size: 14pt;"><strong>Class Name</strong>: <code>SalesEmployee</code> (Subclass of <code>Employee</code>)</span>
<ul>
<li><span style="font-size: 14pt;"><strong>Attributes</strong>:</span>
<ul>
<li><span style="font-size: 14pt;">Inherited from <code>Employee</code>: <code>id</code>, <code>salary</code></span></li>
<li><span style="font-size: 14pt;">New attribute: <code>sales</code> (int)</span></li>
</ul>
</li>
<li><span style="font-size: 14pt;"><strong>Constructor</strong>: <code>__init__(self, id, salary, sales)</code> — Calls <code>super().__init__(id, salary)</code> to initialize <code>id</code> and <code>salary</code>, and initializes the <code>sales</code> attribute.</span></li>
</ul>
</li>
</ul>
<p><strong><span style="font-size: 14pt;">Examples:</span></strong></p>
<pre><strong><span style="font-size: 14pt;">Input: </span></strong><span style="font-size: 14pt;">id = 14, salary = 30000, sales = 20
<strong>Output:</strong> 
14 30000
14 30000 20</span></pre></div>