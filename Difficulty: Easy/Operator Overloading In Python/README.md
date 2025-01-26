<h2><a href="https://www.geeksforgeeks.org/problems/operator-overloading-in-python/1?page=1&difficulty=Basic,Easy,Hard&status=unsolved&sortBy=accuracy">Operator Overloading In Python</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 14pt;">Implement a Python class <code>ComplexNumber</code> to demonstrate operator overloading for adding two complex numbers.</span></p>
<p><span style="font-size: 14pt;"><strong>Class Name:</strong> <code>ComplexNumber</code></span></p>
<ul>
<li>
<p><span style="font-size: 14pt;"><strong>Attributes</strong>:</span></p>
<ul>
<li><span style="font-size: 14pt;"><code>real</code> (float): The real part of the complex number.</span></li>
<li><span style="font-size: 14pt;"><code>imaginary</code> (float): The imaginary part of the complex number.</span></li>
</ul>
</li>
<li>
<p><span style="font-size: 14pt;"><strong>Constructor</strong>:</span></p>
<ul>
<li><span style="font-size: 14pt;"><code>__init__(self, real, imaginary)</code>: Initializes the <code>real</code> and <code>imaginary</code> attributes with the given values.</span></li>
</ul>
</li>
<li>
<p><span style="font-size: 14pt;"><strong>Methods/Functions</strong>:</span></p>
<ol>
<li>
<p><span style="font-size: 14pt;"><strong><code>__add__(self, other)</code></strong>:</span></p>
<ul>
<li><span style="font-size: 14pt;"><strong>Parameters</strong>: <code>other</code> (another <code>ComplexNumber</code> object)</span></li>
<li><span style="font-size: 14pt;"><strong>Task</strong>: Overload the <code>+</code> operator to add two complex numbers. The addition of two complex numbers <code>(a + bi)</code> and <code>(c + di)</code> is calculated as:</span>
<ul>
<li><span style="font-size: 14pt;">Real part: <code>a + c</code></span></li>
<li><span style="font-size: 14pt;">Imaginary part: <code>b + d</code></span></li>
</ul>
</li>
<li><span style="font-size: 14pt;"><strong>Return</strong>: A new <code>ComplexNumber</code> object representing the sum of the two complex numbers.</span></li>
</ul>
</li>
<li>
<p><span style="font-size: 14pt;"><strong><code>__str__(self)</code></strong>:</span></p>
<ul>
<li><span style="font-size: 14pt;"><strong>Parameters</strong>: None</span></li>
<li><span style="font-size: 14pt;"><strong>Task</strong>: Overload the string representation of the object to return the complex number in the format <code>"a + bi"</code>, where <code>a</code> is the real part and <code>b</code> is the imaginary part.</span></li>
</ul>
</li>
</ol>
</li>
</ul>
<p><strong><span style="font-size: 14pt;">Examples:</span></strong></p>
<pre><strong><span style="font-size: 14pt;">Input: </span></strong><span style="font-size: 14pt;">real1 = 3, imaginary1 = 2, real2 = 1, imaginary2 = 7<br><strong>Output: </strong>4 + 8i</span></pre></div>