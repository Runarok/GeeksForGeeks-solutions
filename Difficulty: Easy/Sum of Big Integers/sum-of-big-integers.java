//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.math.BigInteger;
import java.util.*;


// } Driver Code Ends

// User function Template for Java

/* Class MathematicalOperation with add function
 * a, b : Two parameters of BigIntegers to add
 */
class MathematicalOperation {

    // add function to return the sum of two BigIntegers
    static BigInteger add(BigInteger a, BigInteger b) {
        // Return the sum of a and b
        return a.add(b);
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
            System.out.println(obj.add(x, y));

            System.out.println("~");
        }
    }
}
// } Driver Code Ends