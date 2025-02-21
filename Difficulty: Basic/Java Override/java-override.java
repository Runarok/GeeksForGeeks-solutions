//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.Scanner;
class Parent
{
    void show(int p) { System.out.print(p+" "); }
    void print(int q){
        System.out.print(q+" ");
    }
}

 
class Main
{
    public static void main(String[] args)
    {
        Scanner sc=new Scanner(System.in);
        int t=sc.nextInt();
        while(t-->0)
        {
        int p=sc.nextInt();
        int q=sc.nextInt();
        int r=sc.nextInt();
        int s=sc.nextInt();
        Parent obj1 = new Parent();
        obj1.show(p);
        obj1.print(q);
        Parent obj2 = new Child();
        obj2.show(r);
        obj2.print(s);
        
System.out.println("~");
}
    }
}



// } Driver Code Ends
//User function Template for Java
// Assuming there is a Parent class with methods `show(int p)` and `print(int q)`
// Here's an example implementation of the Child class which overrides the methods from Parent

class Child extends Parent {
    
    // Overriding the show method to print the passed integer followed by a space
    @Override
    void show(int p) { 
        System.out.print(p + " "); 
    }
    
    // Overriding the print method to print the square of the passed integer
    @Override
    void print(int q) {
        System.out.println(q * q);  // Print the square of the integer
    }
}


//{ Driver Code Starts.

// } Driver Code Ends