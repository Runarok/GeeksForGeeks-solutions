//{ Driver Code Starts
//Initial Template for Java

import java.util.Scanner;

class Main {
    
    
// } Driver Code Ends

// User function Template for Java

public static int fibonacci(int n) {
    // Base case: First and second Fibonacci numbers are both 1
    if (n == 1 || n == 2) {
        return 1;
    }

    // Initialize first two Fibonacci numbers
    int first = 1, second = 1, nextFib = 0;

    // Loop to compute Fibonacci sequence up to nth number
    for (int i = 3; i <= n; i++) {
        nextFib = first + second; // Calculate next Fibonacci number
        first = second; // Move first pointer forward
        second = nextFib; // Move second pointer forward
    }

    // Return the nth Fibonacci number
    return second;
}


//{ Driver Code Starts.

    public static void main(String[] args)
    {
        Scanner scn = new Scanner(System.in);
        int t = scn.nextInt();
        while(t-- > 0) {
            int n = scn.nextInt();
            int ans = fibonacci(n);
            System.out.println(ans);
        
System.out.println("~");
}
        scn.close();
    }
}
// } Driver Code Ends