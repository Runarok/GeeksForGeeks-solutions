<h2><a href="https://www.geeksforgeeks.org/problems/java-abstract-keyword/1?page=3&difficulty=Basic&status=unsolved,attempted&sortBy=accuracy">Java Abstract keyword</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px"><strong><em>abstract</em></strong>&nbsp;is a non-access modifier in java applicable for classes, methods but&nbsp;<strong>not</strong>&nbsp;variables. It is used to achieve abstraction which is one of the pillar of Object Oriented Programming(OOP). Following is an example of abstract class.</span></p>

<pre><span style="font-size:18px">abstract class A 
{
    int prod;
    abstract void m1(int p,int q);
    void m2()
    {
        System.out.println(prod);
    }
}</span></pre>

<p><span style="font-size:18px">As we know , we can't create an instance of an abstract class. Hence create and another class that extends the abstract class , then you can create an instance of the new class.</span></p>

<p><span style="font-size:18px">Also m1 method is abstract too, that means you must implement the&nbsp;body of that method in the child class.</span></p>

<p><span style="font-size:18px">Main function is already created in the editor and instance of class B is also created . So your task is&nbsp;to write just class B .&nbsp;</span></p>

<p><span style="font-size:18px"><strong>Input:</strong><br>
First line of input file contains an integer T, denoting the number of test cases. Then T test case follow. First and only line of each test case contains two&nbsp;integers a1 and a2.</span></p>

<p><span style="font-size:18px"><strong>Output:</strong><br>
For each test case,&nbsp;print output as the product of the two nos. a1 and a2.</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1&lt;=T&lt;=100<br>
1&lt;=a1,a2&lt;=10<sup>3</sup></span></p>

<p><span style="font-size:18px"><strong>Example:</strong><br>
<strong>Input:</strong><br>
2<br>
9 2<br>
8 4</span></p>

<p><span style="font-size:18px"><strong>Output:</strong><br>
18<br>
32</span><br>
&nbsp;</p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Java</code>&nbsp;<code>OOP</code>&nbsp;