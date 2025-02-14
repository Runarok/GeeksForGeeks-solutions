//{ Driver Code Starts
//Initial Template for Java

// Java program to illustrate
// Generics
import java.io.*;
import java.util.Scanner;

class gfg
{
    public static void main(String[] args)
    {
        Scanner sc=new Scanner(System.in);
        int t=sc.nextInt();
        while(t-->0)
        {
        int n=sc.nextInt();
        if(n==1)
        {
            String s=sc.next();
            GenericClass<String> Str=new GenericClass<String>(s);
            Str.showType();
        }
        else
        {
            Integer p=sc.nextInt();
            GenericClass<Integer> integer=new GenericClass<Integer>(p);
            integer.showType();
        }
        
System.out.println("~");
}
    }
}

// } Driver Code Ends
//User function Template for Java
class GenericClass<T> {
    // Private data variable to store the input value of generic type T
    private T data;

    // Constructor to initialize the data variable
    public GenericClass(T data) {
        this.data = data;
    }

    // Method to show the type of the input and the input value
    public void showType() {
        // Print the type of the data and its value
        System.out.println(data.getClass().getSimpleName()); // Print type (e.g., Integer or String)
        System.out.println(data); // Print the actual value
    }
}

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt(); // Read the number of test cases
        sc.nextLine(); // Consume the newline character
        
        for (int i = 0; i < T; i++) {
            int c = sc.nextInt(); // Read the type indicator (1 or 2)
            sc.nextLine(); // Consume the newline character
            
            if (c == 1) {
                // For c == 1, the input is a string
                String str = sc.nextLine(); // Read the string
                GenericClass<String> obj = new GenericClass<>(str); // Create GenericClass object with String type
                obj.showType(); // Call the method to print type and value
            } else if (c == 2) {
                // For c == 2, the input is an integer
                int num = sc.nextInt(); // Read the integer
                GenericClass<Integer> obj = new GenericClass<>(num); // Create GenericClass object with Integer type
                obj.showType(); // Call the method to print type and value
            }
        }
        sc.close(); // Close the scanner
    }
}


//{ Driver Code Starts.

// } Driver Code Ends