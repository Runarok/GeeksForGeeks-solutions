//{ Driver Code Starts
// Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String[] args) {

        // taking input using Scanner class
        Scanner sc = new Scanner(System.in);

        // taking testcases count
        int t = sc.nextInt();

        while (t-- > 0) {
            // calling helperFunction of class Hello
            Hello h = helperFunction();

            // calling Interface method
            h.sayHello();

            System.out.println("~");
        }
    }

    
// } Driver Code Ends

// User function Template for Java
/*
This is what the interface looks like
interface Hello {
    public void sayHello();
}
*/
// Interface Hello
interface Hello {
    public void sayHello();
}

public static Hello helperFunction() {
    // Using lambda expression to implement the sayHello method
    Hello h = () -> System.out.println("Hello");
    return h;
}


//{ Driver Code Starts.
}

interface Hello {
    public void sayHello();
}
// } Driver Code Ends