<h2><a href="https://www.geeksforgeeks.org/problems/java-override/1?page=1&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">Java Override</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">In any object-oriented programming language, <strong>Overriding</strong> is a feature that allows a subclass or child class to provide a specific implementation of a method that is already provided by one of its super-classes or parent classes. When a method in a subclass has the same name, same parameters or signature and same return type(or sub-type) as a method in its super-class, then the method in the subclass is said to&nbsp;<strong><em>override</em></strong>&nbsp;the method in the super-class.</span></p>
<p><span style="font-size: 18px;">Consider the following parent class :</span></p>
<pre><span style="font-size: 18px;">class Parent
{
    void show(int p)
    {
     System.out.print(p+" ");
    }
&nbsp;   void print(int q){
&nbsp; &nbsp; &nbsp; &nbsp; System.out.println(q+" ");
&nbsp; &nbsp; }
}</span></pre>
<p><span style="font-size: 18px;">Also given a class named child which inherits from Parent class&nbsp;</span></p>
<pre><span style="font-size: 18px;">class Child extends Parent
{
    @Override
    void show(int p) { System.out.print(p+" "); }
} </span></pre>
<p><span style="font-size: 18px;">Your task is to create a method named print (which takes one integer as input ) in class Child&nbsp;which overrides the method print of the Parent class such that its prints the square of the input integer.&nbsp;In Main function instance of both classes are made and all methods are called in the editor.</span></p>
<p><span style="font-size: 18px;"><strong>Input:</strong><br>The first line of input contains an integer T denoting the no of test cases then T test cases follow. First line of each test case contains four integers p,q,r,s.</span></p>
<p><span style="font-size: 18px;"><strong>Output:</strong><br>Print the required output.&nbsp;</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1&lt;=T&lt;=100<br>1&lt;=p,q,rs&lt;=10<sup>4</sup></span></p>
<p><span style="font-size: 18px;"><strong>Example:<br>Input:</strong><br>1<br>1 2 3 4</span></p>
<p><span style="font-size: 18px;"><strong>Output:</strong><br>1 2 3 16</span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Java</code>&nbsp;<code>OOP</code>&nbsp;