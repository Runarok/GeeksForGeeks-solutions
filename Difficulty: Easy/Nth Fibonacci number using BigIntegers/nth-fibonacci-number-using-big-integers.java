//{ Driver Code Starts
//Initial Template for Java

import java.math.BigInteger;
import java.util.Scanner;

// Driver class with main function
class Main {
    
    
// } Driver Code Ends

//User function Template for Java

public static BigInteger fib(int n){
    // If n is 1 or 2, the Fibonacci number is 1
    if (n == 1 || n == 2) {
        return BigInteger.ONE;
    }

    // Initialize the first two Fibonacci numbers
    BigInteger a = BigInteger.ONE, b = BigInteger.ONE, c = BigInteger.ZERO;

    // Loop to compute the nth Fibonacci number using the formula: F(n) = F(n-1) + F(n-2)
    for (int i = 3; i <= n; i++) {
        c = a.add(b); // F(n) = F(n-1) + F(n-2)
        a = b;
        b = c;
    }

    // Return the nth Fibonacci number
    return c;
}



//{ Driver Code Starts.

    public static void main (String[] args) {
        Scanner sc = new Scanner(System.in);

        int t = sc.nextInt();

        while(t-- > 0){
            //Taking input n
            int n = sc.nextInt();

            System.out.println(fib(n));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends