//{ Driver Code Starts
import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        
        while (t-- > 0) {
            Solution ob = new Solution();
            System.out.println(ob.javaIntType(sc));
            System.out.println(ob.javaStringType(sc));
            System.out.println(ob.javaFloatType(sc));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

class Solution {

    // Method to read and return an integer
    int javaIntType(Scanner sc) {
        // Code to return an integer value from the input
        return sc.nextInt();
    }

    // Method to read and return a string
    String javaStringType(Scanner sc) {
        // Clear the buffer before reading the next line
        sc.nextLine();
        // Code to return a string value from the input
        return sc.nextLine();
    }

    // Method to read and return a float
    float javaFloatType(Scanner sc) {
        // Code to return a float value from the input
        return sc.nextFloat();
    }
}
