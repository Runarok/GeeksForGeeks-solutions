//{ Driver Code Starts
// Initial Template for Java

import java.math.BigInteger;
import java.util.Scanner;

// Driver class with main function
class Main {

    
// } Driver Code Ends

// User function Template for Java

public static BigInteger factorial(int n) {
    // Initialize the result as 1 (BigInteger)
    BigInteger result = new BigInteger("1");
    
    // Multiply the result by each number from 1 to n
    for (int i = 1; i <= n; i++) {
        // Convert each i to BigInteger and multiply
        BigInteger current = BigInteger.valueOf(i);
        result = result.multiply(current);
    }
    
    // Return the calculated factorial
    return result;
}


//{ Driver Code Starts.

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int testcase = sc.nextInt();

        while (testcase-- > 0) {
            // Taking input x
            int x = sc.nextInt();

            System.out.println(factorial(x));

            System.out.println("~");
        }
    }
}
// } Driver Code Ends