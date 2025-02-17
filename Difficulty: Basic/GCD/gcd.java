//{ Driver Code Starts
//Initial Template for Java

import java.util.Scanner;

class Main {

    
// } Driver Code Ends

public static int gcd(int a, int b) {
    int max = 0;  // Variable to store the maximum common divisor (GCD).

    // Loop to check for common divisors from 1 to the smaller of a and b.
    for (int i = 1; i <= a && i <= b; i++) {
        // If i divides both a and b, then it is a common divisor.
        if (a % i == 0 && b % i == 0) {
            // Update max if a larger common divisor is found.
            if (i > max) {
                max = i;
            }
        }
    }
    return max;  // Return the greatest common divisor.
}


//{ Driver Code Starts.

    public static void main(String[] args)
    {
        Scanner scn = new Scanner(System.in);
        int t = scn.nextInt();
        while(t-- > 0) {
            int A = scn.nextInt();
            int B = scn.nextInt();
            int ans = gcd(A,B);
            System.out.println(ans);
        
System.out.println("~");
}
        scn.close();
    }
}
// } Driver Code Ends