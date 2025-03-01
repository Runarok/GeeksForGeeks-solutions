//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

// Position this line where user code will be pasted.

class GFG {
    public static void main(String[] args) {

        // taking input using scanner class
        Scanner sc = new Scanner(System.in);

        int testcases = sc.nextInt();

        while (testcases-- > 0) {

            // taking a,b,c
            int a = sc.nextInt();
            int b = sc.nextInt();
            int c = sc.nextInt();

            // creating an object of class Geeks
            Geeks g = new Geeks();

            // calling the method bitWiseOp()
            // of class Geeks and passing
            // a,b,c as arguments
            g.bitWiseOp(a, b, c);
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

// Function to perform bitwise manipulations
// a, b, and c are input integers
class Geeks {
    static void bitWiseOp(int a, int b, int c) {

        // Performing XOR of 'a' with itself, result is always 0
        int xorSelf = a ^ a;

        // Performing XOR between 'c' and 'b'
        int xorCB = c ^ b;

        // Performing bitwise AND between 'a' and 'b'
        int andAB = a & b;

        // Performing bitwise OR between 'c' and (a XOR a) which is effectively 'c | 0' => 'c'
        int orCWithZero = c | (a ^ a);

        // Performing bitwise NOT of (c XOR b)
        int notXorCB = ~xorCB;

        // Printing results
        System.out.println(xorSelf);
        System.out.println(xorCB);
        System.out.println(andAB);
        System.out.println(orCWithZero);
        System.out.println(notXorCB);
    }
}
