//{ Driver Code Starts

// } Driver Code Ends

import java.util.*;

class GFG {
    public static void main(String args[]) {
        // Create a scanner object to read inputs
        Scanner sc = new Scanner(System.in);
        
        // Read various types of inputs
        int a = sc.nextInt();         // Read an integer
        float b = sc.nextFloat();     // Read a float
        long c = sc.nextLong();       // Read a long
        byte d = sc.nextByte();       // Read a byte
        
        sc.nextLine(); // Consume the leftover newline character after reading numeric values
        
        String s = sc.nextLine();     // Read a string
        
        // Print all the values
        System.out.println(a);        // Print the integer
        System.out.println(b);        // Print the float
        System.out.println(c);        // Print the long
        System.out.println(d);        // Print the byte
        System.out.println(s);        // Print the string
    }
}


//{ Driver Code Starts.
// } Driver Code Ends