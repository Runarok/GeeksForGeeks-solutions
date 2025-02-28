//{ Driver Code Starts
// Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.math.BigInteger;
import java.util.*;


// } Driver Code Ends

// Back-end complete function Template for Java

/* Class MathematicalOperation with add function
 * a, b : Two parameters of BigIntegers to multiply
 */
class MathematicalOperation {

    // multiply function that returns the multiplication of a and b
    static BigInteger mul(BigInteger a, BigInteger b) {
        // Return the result of multiplying a and b
        return a.multiply(b);
    }
}



//{ Driver Code Starts.

// Driver class with main function
class GFG {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int testcase = sc.nextInt();

        while (testcase-- > 0) {
            // Taking first element
            // in BigInteger x
            BigInteger x = sc.nextBigInteger();

            // Taking second element in
            // BigInteger y
            BigInteger y = sc.nextBigInteger();

            // Calling function add to add two BigIntegers
            MathematicalOperation obj = new MathematicalOperation();
            System.out.println(obj.mul(x, y));

            System.out.println("~");
        }
    }
}
// } Driver Code Ends